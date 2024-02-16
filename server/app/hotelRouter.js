import { Router } from "express";
import supabase from "../utils/db.js";

const hotelRouter = Router();

hotelRouter.get("/users", async function (req, res) {
  let resultUsers = null;
  try {
    resultUsers = await supabase.from("users").select("*");
    return res.status(200).json(resultUsers.data);
  } catch (error) {
    return res.status(500).json(resultUsers.error);
  }
});

hotelRouter.get("/rooms", async function (req, res) {
  let resultRooms = null;
  try {
    resultRooms = await supabase.from("room_type").select("*");
    return res.status(200).json(resultRooms.data);
  } catch (error) {
    return res.status(500).json(resultRooms.error);
  }
});

hotelRouter.get("/rooms/:guests", async (req, res) => {
  let guests = parseInt(req.params.guests, 10);
  console.log(guests);
  try {
    if (guests >= 3 && guests <= 4) {
      const { data: roomCondition, error } = await supabase
        .from("room")
        .select(
          `*, 
          room_type:room_type_id(*
          ),status:status_id(status_name)`
        )
        .gte("room_type.guest_number", guests)
        .eq("status.status_name", "Vacant")
        .in("room_type.room_type", ["Superior Garden View", "Supreme"]);
      if (error) {
        console.error("Supabase error:", error);
        return res.status(400).json({ error: error.message });
      } else if (roomCondition.length >= 1) {
        const specificRoomTypeRooms = roomCondition.filter(
          (room) => room.room_type !== null
        );
        if (specificRoomTypeRooms.length > 0) {
          return res.status(200).json(specificRoomTypeRooms);
        } else {
          return res
            .status(404)
            .json({ error: "Rooms of the specified type not found" });
        }
      } else {
        return res.status(404).json({ error: "Rooms not found" });
      }
    }
  } catch (error) {
    return res.status(500).json(error);
  }

  try {
    if (guests >= 1 && guests <= 2) {
      const { data: roomCondition, error } = await supabase
        .from("room")
        .select(
          `*, 
          room_type:room_type_id(*
          ),status:status_id(status_name)`
        )
        .gt("room_type.guest_number", guests)
        .eq("status.status_name", "Vacant")
        .in("room_type.room_type", [
          "Premier Sea View",
          "Deluxe",
          "Superior",
          "Suit",
        ]);
      if (error) {
        console.error("Supabase error:", error);
        return res.status(400).json({ error: error.message });
      } else if (roomCondition.length >= 1) {
        const specificRoomTypeRooms = roomCondition.filter(
          (room) => room.room_type !== null
        );
        if (specificRoomTypeRooms.length > 0) {
          return res.status(200).json(specificRoomTypeRooms);
        } else {
          return res
            .status(404)
            .json({ error: "Rooms of the specified type not found" });
        }
      } else {
        return res.status(404).json({ error: "Rooms not found" });
      }
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});

export default hotelRouter;
