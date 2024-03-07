import { Router } from "express";
import prisma from "../utils/db.js";
import multer from "multer";

const hotelRouter = Router();

const storage = new multer.memoryStorage();
const upload = multer({ storage: storage });

hotelRouter.post('/room', upload.any('newRoomImage'), async (req, res) => {
  const {
    bedType, // You have both bedType and bedTypeId in your data, ensure to use the correct one
    guestCapacity,
    roomTypeName,
    roomSize,
    roomPrice,
    description,
    bedTypeId, // This seems to be the correct one to use based on your data
    roomAmenitie,
  } = req.body;

  let amenities;
  try {
    amenities = JSON.parse(roomAmenitie);
  } catch (error) {
    return res.status(400).send("Invalid 'roomAmenitie' format: must be a valid JSON string.");
  }

  try {
    const imageUploadPromises = req.files.map(async (file) => {
      if (file && file.mimetype.startsWith("image/")) {
        console.log("---Uploading to Cloudinary---");
        try {
          const b64 = Buffer.from(file.buffer).toString("base64");
          let dataURI = "data:" + file.mimetype + ";base64," + b64;
          const uploadResult = await handleUpload(dataURI);
          console.log("---Upload successfully---");
          console.log("response from cloud: ", uploadResult);
          return uploadResult.url; // Assuming uploadResult.url is where the image URL is 
        } catch (err) {
          console.error('Error uploading image to Cloudinary:', err);
          throw err; // Re-throw to avoid empty array
        }
      } else {
        console.error('Invalid file format:', file);
        throw new Error('Invalid file format');
      }
    });
    
    const uploadedImageUrls = await Promise.all(imageUploadPromises); 
    console.log(uploadedImageUrls);

    const roomType = await prisma.$transaction(async (prisma) => {
      const createdRoomType = await prisma.roomType.create({
        data: {
          roomTypeName,
          bedType: { connect: { bedTypeId: parseInt(bedTypeId) } },
          description,
          guestCapacity: parseInt(guestCapacity),
          roomSize: parseInt(roomSize),
          roomPrice: parseFloat(roomPrice),
          roomAmenitie: {
            create: amenities.map(amenity => ({
              roomAmenitieName: amenity.roomAmenitieName,
              // Assuming you have a relation set up, otherwise adjust accordingly
            })),
          },
          roomImage: { 
            create: uploadedImageUrls.map(imageUrl => ({
              imageUrl: imageUrl,
            })),
          },
        },
      });

      return createdRoomType;
    });

    res.json({ message: 'Room type saved successfully', roomType });
  } catch (error) {
    console.error('Error processing your request:', error);
    res.status(500).json({ message: 'Error saving room type', error: error.message });
  }
});

hotelRouter.get("/rooms", async function (req, res) {
  try {
    const resultRooms = await prisma.roomType.findMany({
      orderBy: {
        roomTypeName: "asc",
      },
      include: {
        roomAmenitie: true,
        bedType: true,
        roomImage: true,
        room: {
          include: {
            roomStatus: true,
          },
        },
      },
    });

    const vacantRooms = resultRooms.map((roomType) => {
      const vacantCount = roomType.room.filter(
        (room) => room.roomStatus.statusName === "Vacant"
      ).length;
      return {
        ...roomType,
        vacantCount,
      };
    });
    return res.status(200).json(vacantRooms);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

hotelRouter.get("/rooms-number", async function (req, res) {
  try {
    const resultRooms = await prisma.room.findMany({
      orderBy: {
        roomNumber: "asc",
      },
      include: {
        roomStatus: true,
        roomType: {
          include: {
            bedType: true,
          },
        },
      },
    });
    return res.status(200).json(resultRooms);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

hotelRouter.get("/rooms/:guests", async (req, res) => {
  const guests = parseInt(req.params.guests);
  try {
    if (guests >= 1 && guests <= 10) {
      const roomCondition = await prisma.roomType.findMany({
        where: {
          guestCapacity: {
            gte: guests,
          },
          room: {
            some: {
              roomStatus: {
                statusName: "Vacant",
              },
            },
          },
        },
        orderBy: {
          roomTypeName: "asc",
        },
        include: {
          roomAmenitie: true,
          bedType: true,
          roomImage: true,
          room: {
            where: {
              roomStatus: {
                statusName: "Vacant",
              },
            },
            include: {
              roomStatus: true,
            },
          },
        },
      });

      if (!roomCondition.length) {
        return res.status(404).json({ error: "Rooms not found" });
      }
      const vacantRooms = roomCondition.map((roomType) => {
        const vacantCount = roomType.room.filter(
          (room) => room.roomStatus.statusName === "Vacant"
        ).length;
        return {
          ...roomType,
          vacantCount,
        };
      });
      return res.status(200).json(vacantRooms);
    } else {
      return res.status(400).json({ error: "Invalid guest count" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
});

hotelRouter.get("/room/:roomTypeId", async (req, res) => {
  const roomTypeIdFromReq = parseInt(req.params.roomTypeId);

  try {
    const response = await prisma.roomType.findUnique({
      where: { roomTypeId: roomTypeIdFromReq },
      include: {
        roomImage: true,
        roomAmenitie: true,
      },
    });
    res.status(200).json(response);
  } catch (err) {
    res.status(404).json({ message: "Room type not found" });
  }
});

export default hotelRouter;
