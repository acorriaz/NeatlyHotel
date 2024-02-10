import { Router } from "express";
import supabase from "../utils/db.js";

const bookingHistory = Router();

bookingHistory.get("/:user_id", async function (req, res) {
  const userId = req.params.user_id;
  try {
    const bookings = await supabase
      .from("booking_detail")
      .select("*,user()")
      .eq("user_id", userId);

    res.json(bookings);
  } catch (error) {
    res.status(400).json({ error: "data not found" });
  }
});

export default bookingHistory;
