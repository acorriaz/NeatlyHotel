import { Router } from "express";
import supabase from "../utils/db.js";

const bookingRouter = Router();

bookingRouter.get("/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    const bookings = await supabase
      .from("booking_detail")
      .select("*")
      .eq("user_id", userId);

    res.json(bookings);
  } catch (error) {
    res.status(400).json({ error: "data not found" });
  }
});

bookingRouter.post("/", async (req, res) => {
  const {
    user_id: userId,
    room_id: roomId,
    check_in: checkInDate,
    check_out: checkOutDate,
    payment_method: paymentMethod,
    total_price: totalPrice,
  } = req.body;
  try {
    const { data: bookingData, error } = await supabase
      .from("booking_detail")
      .insert({
        user_id: userId,
        room_id: roomId,
        check_in: checkInDate,
        check_out: checkOutDate,
        payment_method: paymentMethod,
        total_price: totalPrice,
      })
      .select("*");

    if (error) {
      console.error("Supabase error:", error);
      return res.status(400).json({ error: error.message });
    }

    return res.status(201).json({ data: bookingData });
  } catch (error) {
    console.error("Unexpected error:", error);
    return res.status(500).json({
      error: "Failed to create bookings",
      details: error.message,
    });
  }
});

bookingRouter.post("/request", async (req, res) => {
  const { request_id: requestId, booking_detail_id: bookingId } = req.body;

  try {
    const { data, error } = await supabase
      .from("guest_request")
      .insert({
        request_id: requestId,
        booking_detail_id: bookingId,
      })
      .single();

    if (error) {
      console.error("Supabase error: ", error);
      return res.status(400).json({ error: "Can not create request" });
    }

    return res
      .status(200)
      .json({ text: "Booking has been creaded new request" });
  } catch (error) {
    console.error("Unexpected error:", error);
    return res.status(500).json({
      error: "Failed to create request",
      details: error.message,
    });
  }
});

bookingRouter.put("/:bookingId", async (req, res) => {
  const bookingId = req.params.bookingId;
  const {
    room_id: roomId,
    check_in: checkInDate,
    check_out: checkOutDate,
    payment_method: paymentMethod,
    total_price: totalPrice,
  } = req.body;

  try {
    const { data, error } = await supabase
      .from("booking_detail")
      .update({
        room_id: roomId,
        check_in: checkInDate,
        check_out: checkOutDate,
        payment_method: paymentMethod,
        total_price: totalPrice,
      })
      .eq("booking_detail_id", bookingId)
      .select("*");

    if (error) {
      console.error("Supabase error:", error);
      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json({ data: data });
  } catch (error) {
    return res.status(500).json({
      error: "Failed to update bookings",
      details: error.message,
    });
  }
});

bookingRouter.delete("/:bookingId", async (req, res) => {
  const bookingId = req.params.bookingId;
  try {
    const { data, error } = await supabase
      .from("booking_detail")
      .delete()
      .eq("booking_detail_id", bookingId);

    if (error) {
      console.error("Supabase error:", error);
      return res.status(400).json({ error: "Can not delete booking" });
    }

    return res.status(200).json({ text: "Booking has been deleted" });
  } catch (error) {
    console.error("Unexpected error:", error);
    return res.status(500).json({
      error: "Failed to delete bookings",
      details: error.message,
    });
  }
});

export default bookingRouter;
