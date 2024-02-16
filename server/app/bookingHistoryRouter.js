import { Router } from "express";
import supabase from "../utils/db.js";

const bookingHistory = Router();

//API booking history page
bookingHistory.get("/:userId", async function (req, res) {
  const userId = req.params.userId;
  try {
    const bookings = await supabase
      .from("booking_detail")
      .select("*, room_id(*, room_type_id(*)), user_id(*)")
      .eq("user_id", userId);

//ดึงข้อมูล request ทั้งหมดของแต่ละ booking detail
    const request = bookings.data.map(async (booking) => {
      const request = await supabase
        .from("guest_request")
        .select("*, request_id(*)")
        .eq("booking_detail_id", booking.booking_detail_id);
      return request.data;
    });

//รอให้การดึงข้อมูล request เสร็จทั้งหมด
    const requestResults = await Promise.all(request);

//กำหนดค่าข้อมูล request ให้กับแต่ละ booking detail
    bookings.data.map((booking, index) => {
      booking.request = requestResults[index];
    });

    res.json(bookings);
  } catch (error) {
    res.status(400).json({ error: "data not found" });
  }
});

//API booking history change date
bookingHistory.put("/:booking_id", async function (req, res) {
  const bookingId = req.params.booking_id;
  const updateData = {...req.body}
  try {
    await supabase
      .from("booking_detail")
      .update(updateData)
      .eq("booking_detail_id", bookingId);

    res.status(200).json({ message: "data update successfully!" });
  } catch (error) {
    res.status(400).json({ error: "data not found" });
  }
});

export default bookingHistory;
