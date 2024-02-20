import { Router } from "express";
import prisma from "../utils/db.js";

const hotelRouter = Router();

hotelRouter.get("/rooms", async function (req, res) {
  try {
    const resultRooms = await prisma.roomType.findMany({
      include: {
        room: true,
        room: {
          include: {
            roomStatus: true,
          },
        },
        roomImg: true,
        bedType: true,
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

hotelRouter.get("/rooms/:guests", async (req, res) => {
  let { guests } = req.params;
  console.log(guests);
  let roomCondition = null;
  try {
    if (guests >= 3 && guests <= 4) {
      const { data, error } = await prisma.roomType.findMany({
        where: {
          guestCapacity: {
            gte: guests,
          },
          room: {
            roomStatus: {
              statusName: "Vacant",
            },
          },
          roomTypeName: {
            in: ["Supreme", "Superior Garden View"],
          },
        },
        include: {
          room: {
            include: {
              roomStatus: true,
            },
          },
          roomImg: true,
          bedType: true,
        },
      });
      if (error) {
        console.error("Prisma error:", error);
        return res.status(400).json({ error: error.message });
      } else if (data.length >= 1) {
        roomCondition = data.filter((room) => room.room !== null);
      } else {
        return res.status(404).json({ error: "Rooms not found" });
      }
    }

    if (roomCondition) {
      return res.status(200).json(roomCondition);
    } else {
      return res
        .status(404)
        .json({ error: "Rooms of the specified type not found" });
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});

export default hotelRouter;

// hotelRouter.get("/rooms/:guests", async (req, res) => {
//   let guests = parseInt(req.params.guests, 10);
//   console.log(guests);
//   try {
//     if (guests >= 3 && guests <= 4) {
//       const { data: roomCondition, error } = await supabase
//         .from("room")
//         .select(
//           `*,
//           room_type:room_type_id(*
//           ),status:status_id(status_name)`
//         )
//         .gte("room_type.guest_number", guests)
//         .eq("status.status_name", "Vacant")
//         .in("room_type.room_type", ["Superior Garden View", "Supreme"]);
//       if (error) {
//         console.error("Supabase error:", error);
//         return res.status(400).json({ error: error.message });
//       } else if (roomCondition.length >= 1) {
//         const specificRoomTypeRooms = roomCondition.filter(
//           (room) => room.room_type !== null
//         );
//         if (specificRoomTypeRooms.length > 0) {
//           return res.status(200).json(specificRoomTypeRooms);
//         } else {
//           return res
//             .status(404)
//             .json({ error: "Rooms of the specified type not found" });
//         }
//       } else {
//         return res.status(404).json({ error: "Rooms not found" });
//       }
//     }
//   } catch (error) {
//     return res.status(500).json(error);
//   }

//   try {
//     if (guests >= 1 && guests <= 2) {
//       const { data: roomCondition, error } = await supabase
//         .from("room")
//         .select(
//           `*,
//           room_type:room_type_id(*
//           ),status:status_id(status_name)`
//         )
//         .gt("room_type.guest_number", guests)
//         .eq("status.status_name", "Vacant")
//         .in("room_type.room_type", [
//           "Premier Sea View",
//           "Deluxe",
//           "Superior",
//           "Suit",
//         ]);
//       if (error) {
//         console.error("Supabase error:", error);
//         return res.status(400).json({ error: error.message });
//       } else if (roomCondition.length >= 1) {
//         const specificRoomTypeRooms = roomCondition.filter(
//           (room) => room.room_type !== null
//         );
//         if (specificRoomTypeRooms.length > 0) {
//           return res.status(200).json(specificRoomTypeRooms);
//         } else {
//           return res
//             .status(404)
//             .json({ error: "Rooms of the specified type not found" });
//         }
//       } else {
//         return res.status(404).json({ error: "Rooms not found" });
//       }
//     }
//   } catch (error) {
//     return res.status(500).json(error);
//   }
// });
