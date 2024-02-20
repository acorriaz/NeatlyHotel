import { Router } from "express";
import prisma from "../utils/db.js";

const bookingHistory = Router();

//API booking history page
bookingHistory.get("/:userId", async function (req, res) {
  const user_Id = req.params.userId;
  try {
    const bookings = await prisma.BookingDetail.findMany({
      where: {
        userId: user_Id,
      },
      include: {
        user: {
          include: {
            userProfile: {
              select: { cardNumber: true, cardOwner: true, cardExpiry: true },
            },
          },
        },
        room: {
          include: {
            roomType: {
              include: {
                roomAmenitie: {
                  select: { roomAmenitieName: true },
                },
                bedType: {
                  select: { bedTypeName: true },
                },
                roomImage: {
                  select: { imageUrl: true },
                },
              },
            },
          },
        },
        guestRequest: {
          include: {
            request: {
              select: {
                requestType: true,
                requestName: true,
              },
            },
          },
        },
      },
    });

    res.json(bookings);
  } catch (error) {
    res.status(400).json({ error: "data not found" });
  }
});

//API booking history change date
bookingHistory.put("/:booking_id", async function (req, res) {
  const bookingId = Number(req.params.booking_id);
  const updateData = {
    ...req.body
  };

  try {
    if (!updateData) {
      return res.status(400).json({ error: "Invalid data provided" });
    }

    console.log("check in",updateData.checkIn)
    console.log("check out",updateData.checkOut)

    const filteredData = {
      checkIn: updateData.checkIn,
      checkOut: updateData.checkOut,
    };

    const updatedBooking = await prisma.bookingDetail.update({
      where: {
        bookingDetailId: bookingId,
      },
      data: {
        ...filteredData,
      },
    });
    res
      .status(200)
      .json({ message: "Data updated successfully", updatedBooking });
  } catch (error) {
    res.status(400).json({ error: "Failed to update data", details: error });
  }
});

export default bookingHistory;
