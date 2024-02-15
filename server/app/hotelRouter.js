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

hotelRouter.get("/rooms/:guests", async (req, res) => {
  let guests = req.params.guests;
  console.log(guests);
  try {
    if (guests > 2 && guests <= 4) {
      const { data: roomCondition, error } = await supabase
        .from("room")
        .select(
          `*, 
          room_type:room_type_id(*
          ),status:status_id(status_name)`
        )
        .eq("room_type.guest_number", guests)
        .eq("status.status_name", "Vacant")
        .eq("room_type.room_type", "Superior Garden View");
      if (error) {
        console.error("Supabase error:", error);
        return res.status(400).json({ error: error.message });
      } else if (roomCondition.length >= 1) {
        return res.status(200).json(roomCondition);
      } else if (roomCondition.length === 0) {
        return res.status(404).json({ error: "room not found" });
      }
    }
  } catch (error) {
    return res.status(500).json(error);
  }

  // if (guests <= 2) {
  //   const roomCondition = await supabase
  //     .from("room")
  //     .select("*, room_type_id(*), status_id(*)")
  //     .match({
  //       guest_number: guests,
  //       status_name: "Vacant",
  //       room_type: "Deluxe" && "Premier Sea View" && "Superior" && "Suit",
  //     });

  //   if (roomCondition.length >= 1) {
  //     return res.status(200).json(roomCondition);
  //   } else if (roomCondition.length === 0) {
  //     return res.status(404).json({ error: "room not found" });
  //   }
  // }
});

export default hotelRouter;
