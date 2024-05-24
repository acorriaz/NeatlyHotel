import e, { Router, request } from "express";
import prisma from "../utils/db.js";

const bookingRouter = Router();

bookingRouter.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  console.log(userId);
  try {
    const userBooking = await prisma.bookingDetail.findMany({
      where: {
        userId: userId,
      },
    });

    if (userBooking.length === 0) {
      return res.status(404).json({
        message: "Data not found.",
      });
    }

    return res.status(200).json(userBooking);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Sorry, something went wrong. Please try again later.",
    });
  }
});

bookingRouter.get("/recent-booking/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const recentBooking = await prisma.bookingDetail.findFirst({
      where: {
        userId: userId,
      },
      include: {
        room: {
          include: {
            roomType: true,
          },
        },
        guestRequest: {
          include: {
            request: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!recentBooking)
      return res.status(404).json({ message: "No booking found." });

    console.log(recentBooking);
    res.status(200).json(recentBooking);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Sorry, something went wrong. Please try again later.",
    });
  }
});

// TODO : Error handling for transaction
// Making Booking detail from PaymentPage
bookingRouter.post("/reserve-room", async (req, res) => {
  const { userId, checkIn, checkOut, paymentMethod, roomTypeId, guestRequest } =
    req.body;
  const requiredKeys = [
    "userId",
    "checkIn",
    "checkOut",
    "paymentMethod",
    "roomTypeId",
  ];
  const missingKeys = requiredKeys.filter(
    (key) => !req.body.hasOwnProperty(key)
  );

  console.log("Request body: ", req.body);

  if (missingKeys.length > 0) {
    console.log("Missing Keys: ", missingKeys);
    return res.status(400).json({
      error: `Missing required fields: ${missingKeys.join(", ")}`,
    });
  }

  try {
    const response = await prisma.$transaction(async (tx) => {
      console.log("---Start transaction---");
      console.log("---Fetching available room...---");
      const availableRooms = await tx.room.findMany({
        where: {
          roomTypeId: roomTypeId,
          bookingDetail: {
            none: {
              OR: [
                {
                  checkIn: {
                    lt: checkOut,
                  },
                  checkOut: {
                    gt: checkIn,
                  },
                },
              ],
            },
          },
        },
      });

      console.log("---Fetch success---", availableRooms);

      if (availableRooms.length === 0) {
        console.log("---No rooms---");
        return res.status(500).json({ message: "No room available" });
      }

      console.log("---Random room---");

      const roomToBook =
        availableRooms[Math.floor(Math.random() * availableRooms.length)];

      console.log("Booked room:", roomToBook);

      console.log("---Fetch roomType from db---");

      const roomTypeData = await tx.roomType.findUnique({
        where: { roomTypeId },
      });

      console.log("Room Type Data: ", roomTypeData);

      let totalPrice = roomTypeData.roomPrice;

      const requestMapping = {
        earlyCheckIn: 1,
        lateCheckOut: 2,
        nonSmokeRoom: 3,
        highFloor: 4,
        quietRoom: 5,
        babyCot: 6,
        airportTransfer: 7,
        extraBed: 8,
        extraPillow: 9,
        phoneCharger: 10,
        breakfast: 11,
      };

      if (guestRequest && Object.keys(guestRequest).length > 0) {
        console.log("---Start calculated total price with request---");

        for (const requestKey of Object.keys(guestRequest)) {
          const requestId = requestMapping[requestKey];
          if (requestId) {
            const guestRequestDetails = await tx.request.findUnique({
              where: { requestId: requestId },
            });
            if (guestRequestDetails) {
              totalPrice += guestRequestDetails.requestPrice;
            }
          }
        }
      }

      console.log("Total Price: ", totalPrice);

      console.log("---Creating booking detail---");
      const bookingDetail = await tx.bookingDetail.create({
        data: {
          userId,
          roomId: roomToBook.roomId,
          totalPrice,
          checkIn,
          checkOut,
          paymentMethod,
        },
      });
      console.log("Booking Detail: ", bookingDetail);

      if (guestRequest && Object.keys(guestRequest).length > 0) {
        console.log("---Insert Guest Request to DB---");
        const guestRequestPromises = Object.keys(guestRequest).map(
          async (request) => {
            const requestId = requestMapping[request];
            const requestDetails = await tx.request.findUnique({
              where: { requestId: requestId },
            });
            if (requestDetails) {
              return tx.guestRequest.create({
                data: {
                  bookingDetailId: bookingDetail.bookingDetailId,
                  requestId: requestDetails.requestId,
                },
              });
            }
          }
        );
        await Promise.all(guestRequestPromises);
        console.log("Guest Request: ", guestRequestPromises);
      }

      // update room status to occupied
      await tx.room.update({
        where: { roomId: roomToBook.roomId },
        data: { statusId: 2 },
      });
      console.log("Room status updated");

      console.log(bookingDetail);
      return bookingDetail;
    });

    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err });
  }
});

bookingRouter.post("/", async (req, res) => {
  const { userId, roomId, checkIn, checkOut, paymentMethod, totalPrice } =
    req.body;
  if (
    !userId ||
    !roomId ||
    !checkIn ||
    !checkOut ||
    !paymentMethod ||
    !totalPrice
  ) {
    return res.status(400).json({
      message: "Every field requires data.",
    });
  }
  try {
    const booking = await prisma.bookingDetail.create({
      data: {
        userId: userId,
        roomId,
        checkIn,
        checkOut,
        paymentMethod,
        totalPrice,
      },
    });

    return res.status(200).json({
      message: "Booking has been created",
      booking,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Sorry, something went wrong. Please try again later.",
    });
  }
});

bookingRouter.post("/request", async (req, res) => {
  console.log(req.body);
  const { requestId, bookingDetailId } = req.body;

  if (!req.body.requestId || !req.body.bookingDetailId) {
    return res.status(400).json({
      message: "requestId and bookingDetailId are required.",
    });
  }

  try {
    const guestRequest = await prisma.guestRequest.create({
      data: {
        requestId,
        bookingDetailId,
      },
    });

    if (guestRequest) {
      const bookingDetailWithRoom = await prisma.bookingDetail.findUnique({
        where: {
          bookingDetailId,
        },
        include: {
          room: {
            select: {
              roomId: true,
              roomNumber: true,
            },
          },
          guestRequest: {
            where: {
              bookingDetailId,
            },
            include: {
              request: true,
            },
          },
        },
      });

      const response = {
        bookingDetailId: bookingDetailWithRoom.bookingDetailId,
        room: bookingDetailWithRoom.room,
        requests: bookingDetailWithRoom.guestRequest.map((gr) => ({
          requestId: gr.requestId,
          requestType: gr.request.requestType,
          requestName: gr.request.requestName,
          requestPrice: gr.request.requestPrice,
        })),
      };

      console.log(response);
      return res.status(200).json({
        message: "Request has been created.",
        response,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to create request.",
      details: error.message,
    });
  }
});

bookingRouter.put("/:bookingId", async (req, res) => {
  const { bookingId } = req.params;
  const { roomId, checkIn, checkOut, paymentMethod, totalPrice } = req.body;

  try {
    const updatedBooking = await prisma.bookingDetail.update({
      where: { bookingDetailId: parseInt(bookingId, 10) },
      data: {
        roomId,
        checkIn,
        checkOut,
        paymentMethod,
        totalPrice,
      },
    });

    return res.status(200).json({
      message: "Booking has been updated.",
      updatedBooking,
    });
  } catch (error) {
    console.error(error);
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Booking not found." });
    }
    return res.status(500).json({
      message: "Sorry, something went wrong. Plese try again later.",
    });
  }
});

bookingRouter.delete("/:bookingId", async (req, res) => {
  const { bookingDetailId } = req.params;
  try {
    const bookingDetail = await prisma.bookingDetail.delete({
      where: {
        bookingDetailId: bookingDetailId,
      },
    });

    return res.status(200).json({
      message: "Booking has been deleted.",
      bookingDetail,
    });
  } catch (error) {
    console.error(error);

    if (error.code === "P2025") {
      return res.status(404).json({ message: "Booking not found." });
    }

    return res.status(500).json({
      message: "Sorry, something went wrong. Please try again later.",
    });
  }
});

export default bookingRouter;
