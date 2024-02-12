import { Router } from "express";
import supabase from "../utils/db.js";

const bookingHistory = Router();

bookingHistory.get("/:booking_id", async function (req, res) {
  const bookingId = req.params.booking_id;
  try {
    const bookings = await supabase
      .from("booking_detail")
      .select("*")
      .eq("booking_detail_id", bookingId);

    res.json(bookings);
  } catch (error) {
    res.status(400).json({ error: "data not found" });
  }
});

export default bookingHistory;
