import { Router } from "express";
import supabase from "../utils/db.js";

const adminBookingRouter = Router();

adminBookingRouter.get("", async (req, res) => {
  try {
    const bookings = await supabase.from("booking_detail").select("*");

    res.json(bookings);
  } catch (error) {
    res.status(400).json({ error: "data not found" });
  }
});

export default adminBookingRouter;

/*const fetchRooms = async () => {
  const { data, error } = await supabase.from("rooms").select("*");

  if (error) {
    console.error("Error fetching rooms:", error);
  } else {
    setRooms(data);
  }
};

useEffect(() => {
  fetchRooms();
}, []); */
