import e, { Router } from "express";
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

bookingRouter.get("/recent-booking/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    let { data: booking, error: bookingError } = await supabase
      .from("booking_detail")
      .select(
        `
      *,
      room:room_id (
        room_type:room_type_id (
          room_type,
          room_price,
          guest_number
        )
      )
    `
      )
      .eq("user_id", userId)
      .order("created_at", { ascending: false })
      .limit(1);

    if (bookingError) throw bookingError;
    if (booking.length === 0) return res.status(404).send("No booking found");

    const recentBooking = booking[0];

    let { data: guestRequests, error: guestRequestsError } = await supabase
      .from("guest_request")
      .select("request_id")
      .eq("booking_detail_id", recentBooking.booking_detail_id);

    if (guestRequestsError) throw guestRequestsError;

    const requests = await Promise.all(
      guestRequests.map(async (guestRequest) => {
        let { data: request, error: requestError } = await supabase
          .from("request")
          .select("request_name, request_price, request_type")
          .eq("request_id", guestRequest.request_id);

        if (requestError) throw requestError;
        return request[0];
      })
    );

    const response = {
      bookingDetail: recentBooking,
      roomInfo: {
        roomType: recentBooking.room.room_type.room_type,
        roomPrice: recentBooking.room.room_type.room_price,
        guestNumber: recentBooking.room.room_type.guest_number,
      },
      requests,
    };

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
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
      .json({ text: "Booking has been created new request" });
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
