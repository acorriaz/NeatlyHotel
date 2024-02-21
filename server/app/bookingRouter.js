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
  const { userId } = req.params;

  try {
    const recentBooking = await prisma.bookingDetail.findFirst({
      where: {
        userId: userId,
      },
      include: {
        room: {
          include: {
            roomType: true,
          },
        },
        guestRequest: {
          include: {
            request: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!recentBooking)
      return res.status(404).json({ message: "No booking found." });

    console.log(recentBooking);
    res.status(200).json(recentBooking);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Sorry, something went wrong. Please try again later.",
    });
  }
});

bookingRouter.post("/", async (req, res) => {
  const { userId, roomId, checkIn, checkOut, paymentMethod, totalPrice } =
    req.body;
  if (
    !userId ||
    !roomId ||
    !checkIn ||
    !checkOut ||
    !paymentMethod ||
    !totalPrice
  ) {
    return res.status(400).json({
      message: "Every field requires data.",
    });
  }
  try {
    const booking = await prisma.bookingDetail.create({
      data: {
        userId: userId,
        roomId,
        checkIn,
        checkOut,
        paymentMethod,
        totalPrice,
      },
    });

    return res.status(200).json({
      message: "Booking has been created",
      booking,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Sorry, something went wrong. Please try again later.",
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
      where: { bookingDetailId: parseInt(bookingId, 10) },
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
