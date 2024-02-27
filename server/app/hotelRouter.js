import { Router } from "express";
import prisma from "../utils/db.js";

const hotelRouter = Router();

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
      // orderBy: {
      //   roomTypeName: "asc",
      // },
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
  const roomTypeIdFromReq = parseInt(req.params.roomTypeId)

  console.log(roomTypeIdFromReq)

  try {
    const response = await prisma.roomType.findUnique({
      where: { roomTypeId: roomTypeIdFromReq }
    })
    res.status(200).json(response)
  } catch (err) {
    res.status(404).json({message: "Room type not found"})
  }

})

export default hotelRouter;

// hotelRouter.get("/rooms", async function (req, res) {
//   try {
//     const resultRooms = await prisma.roomType.findMany({
//       orderBy: {
//         roomTypeName: "asc",
//       },
//       include: {
//         roomAmenitie: true,
//         bedType: true,
//         roomImage: true,
//         room: {
//           include: {
//             roomStatus: true,
//           },
//         },
//       },
//     });

//     const vacantRooms = resultRooms.map((roomType) => {
//       const vacantCount = roomType.room.filter(
//         (room) => room.roomStatus.statusName === "Vacant"
//       ).length;
//       return {
//         ...roomType,
//         vacantCount,
//       };
//     });
//     return res.status(200).json(vacantRooms);
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// });

// hotelRouter.get("/rooms/:guests", async (req, res) => {
//   let guests = parseInt(req.params.guests);
//   let roomCondition = null;
//   try {
//     if (guests >= 1 && guests <= 10) {
//       roomCondition = await prisma.roomType.findMany({
//         where: {
//           guestCapacity: {
//             gte: guests,
//           },
//         },
//         orderBy: {
//           roomTypeName: "asc",
//         },
//         include: {
//           roomAmenitie: true,
//           bedType: true,
//           roomImage: true,
//           room: {
//             include: {
//               roomStatus: true,
//             },
//           },
//         },
//       });
//     }
//     // console.log(roomCondition);
//     if (roomCondition.length) {
//       const roomVacant = roomCondition.filter((roomType) =>
//         roomType.room.filter((room) => room.roomStatus.statusName === "Vacant")
//       );
//       if (!roomVacant.length) {
//         return res.status(404).json({ error: "Rooms not found" });
//       }
//       return res.status(200).json(roomVacant);
//     } else {
//       return res.status(404).json({ error: "Rooms not found" });
//     }
//   } catch (error) {
//     return res.status(500).json(error);
//   }
// });
