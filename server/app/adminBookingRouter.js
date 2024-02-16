import { Router } from "express";
import supabase from "../utils/db.js";

const adminBookingRouter = Router();

adminBookingRouter.get("/", async (req, res) => {
  try {
    const bookings = await supabase.from("booking_detail").select("*");

    res.json(bookings);
  } catch (error) {
    res.status(400).json({ error: "data not found" });
  }
});

export default adminBookingRouter;

// import { Router } from "express";
// import supabase from "../utils/db.js";

// const adminBookingRouter = Router();

// adminBookingRouter.get("/", async (req, res) => {
//   try {
//     // Fetch bookings from the database
//     const bookingsData = await supabase.from("booking_detail").select("*");
//     // Fetch users from the database
//     const usersData = await supabase.from("users_profile").select("*");

//     // Merge bookings with users
//     const combinedData = bookingsData.data.map((booking) => {
//       // Find the user that corresponds to the booking
//       const user = usersData.data.find((u) => u.id === booking.user_id);
//       // Combine the booking and user objects
//       return {
//         ...booking, // Spread the booking data
//         user: user
//           ? {
//               ...user, // Spread the user data if found
//             }
//           : null, // Or keep it null if no user was found for this booking
//       };
//     });

//     // Send combined data as response
//     res.json(combinedData);
//   } catch (error) {
//     res.status(400).json({ error: "Data not found" });
//   }
// });

// export default adminBookingRouter;
