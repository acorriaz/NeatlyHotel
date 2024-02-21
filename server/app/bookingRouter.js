import e, { Router, request } from "express";
import prisma from "../utils/db.js";

const bookingRouter = Router();

bookingRouter.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  console.log(userId);
  try {
    const userBooking = await prisma.bookingDetail.findMany({
      where: {
        userId: userId,
      },
    });

    if (userBooking.length === 0) {
      return res.status(404).json({
        message: "Data not found.",
      });
    }

    return res.status(200).json(userBooking);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Sorry, something went wrong. Please try again later.",
    });
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
    userId,
    roomId,
    checkIn,
    checkOut,
    paymentMethod,
    totalPrice,
    guestRequests,
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

    return res.status(201).json({
      message: "Booking has been created!",
      bookingDetail,
    });
  } catch (error) {
    console.error(error);

    if (error.code === "P2002") {
      return res.status(400).json({
        message: "Cannot create booking.",
      });
    }
    return res.status(500).json({
      message: "Sorry, something went wrong. Please try again later.",
    });
  }

  // try {
  //   const { data: bookingData, error } = await supabase
  //     .from("booking_detail")
  //     .insert({
  //       user_id: userId,
  //       room_id: roomId,
  //       check_in: checkInDate,
  //       check_out: checkOutDate,
  //       payment_method: paymentMethod,
  //       total_price: totalPrice,
  //     })
  //     .select("*");

  //   if (error) {
  //     console.error("Supabase error:", error);
  //     return res.status(400).json({ error: error.message });
  //   }

  //   return res.status(201).json({ data: bookingData });
  // } catch (error) {
  //   console.error("Unexpected error:", error);
  //   return res.status(500).json({
  //     error: "Failed to create bookings",
  //     details: error.message,
  //   });
  // }
});

bookingRouter.post("/request", async (req, res) => {
  // const { request_id: requestId, booking_detail_id: bookingId } = req.body;
  // try {
  //   const { data, error } = await supabase
  //     .from("guest_request")
  //     .insert({
  //       request_id: requestId,
  //       booking_detail_id: bookingId,
  //     })
  //     .single();
  //   if (error) {
  //     console.error("Supabase error: ", error);
  //     return res.status(400).json({ error: "Can not create request" });
  //   }
  //   return res
  //     .status(200)
  //     .json({ text: "Booking has been created new request" });
  // } catch (error) {
  //   console.error("Unexpected error:", error);
  //   return res.status(500).json({
  //     error: "Failed to create request",
  //     details: error.message,
  //   });
  // }
});

bookingRouter.put("/:bookingId", async (req, res) => {
  const bookingId = req.params.bookingId;
  console.log(bookingId);
  const { userId, roomId, checkIn, checkOut, paymentMethod, totalPrice } =
    req.body;

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
  console.log(req.body);
  const { requestId, bookingDetailId } = req.body;

  if (!req.body.requestId || !req.body.bookingDetailId) {
    return res.status(400).json({
      message: "requestId and bookingDetailId are required.",
    });
  }

  try {
    const guestRequest = await prisma.guestRequest.create({
      data: {
        requestId,
        bookingDetailId,
      },
    });

    if (guestRequest) {
      const bookingDetailWithRoom = await prisma.bookingDetail.findUnique({
        where: {
          bookingDetailId,
        },
        include: {
          room: {
            select: {
              roomId: true,
              roomNumber: true,
            },
          },
          guestRequest: {
            where: {
              bookingDetailId,
            },
            include: {
              request: true,
            },
          },
        },
      });

      const response = {
        bookingDetailId: bookingDetailWithRoom.bookingDetailId,
        room: bookingDetailWithRoom.room,
        requests: bookingDetailWithRoom.guestRequest.map((gr) => ({
          requestId: gr.requestId,
          requestType: gr.request.requestType,
          requestName: gr.request.requestName,
          requestPrice: gr.request.requestPrice,
        })),
      };

      console.log(response);
      return res.status(200).json({
        message: "Request has been created.",
        response,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to create request.",
      details: error.message,
    });
  }
});

bookingRouter.put("/:bookingId", async (req, res) => {
  const { bookingId } = req.params;
  const { roomId, checkIn, checkOut, paymentMethod, totalPrice } = req.body;

  try {
    const updatedBooking = await prisma.bookingDetail.update({
      where: { bookingDetailId: bookingId },
      data: {
        roomId,
        checkIn,
        checkOut,
        paymentMethod,
        totalPrice,
      },
    });

    return res.status(200).json({
      message: "Booking has been updated.",
      updatedBooking,
    });
  } catch (error) {
    console.error(error);
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Booking not found." });
    }
    return res.status(500).json({
      message: "Sorry, something went wrong. Plese try again later.",
    });
  }
});

bookingRouter.delete("/:bookingId", async (req, res) => {
  const { bookingDetailId } = req.params;
  try {
    const bookingDetail = await prisma.bookingDetail.delete({
      where: {
        bookingDetailId: bookingDetailId,
      },
    });

    return res.status(200).json({
      message: "Booking has been deleted.",
      bookingDetail,
    });
  } catch (error) {
    console.error(error);

    if (error.code === "P2025") {
      return res.status(404).json({ message: "Booking not found." });
    }

    return res.status(500).json({
      message: "Sorry, something went wrong. Please try again later.",
    });
  }
});

export default bookingRouter;
