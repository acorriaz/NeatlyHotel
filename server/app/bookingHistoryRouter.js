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
                bedType: {
                  select: { bedTypeName: true },
                },
                roomImg: {
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
  const bookingId = req.params.booking_id;
  const updateData = {...req.body}
  try {
    await prisma.BookingDetail.update({
      where: {
        bookingDetailId: bookingId,
      },
      data: {
        ...updateData,
        updatedAt : new Date(),
      },
    });
    res.status(200).json({ message: "data update successfully!" });
  } catch (error) {
    res.status(400).json(error);
  }
});

export default bookingHistory;
