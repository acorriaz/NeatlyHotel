import { Router } from "express";
import prisma from "../utils/db.js";

const bookingHistory = Router();

//API booking history page
bookingHistory.get("/:userId", async function (req, res) {
  const user_Id = req.params.userId;
  try {
    const bookings = await prisma.bookingDetail.findMany({
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
                requestPrice: true,
              },
            },
          },
        },
      },
      orderBy: {
        checkIn: "asc", // เรียงลำดับตามวันที่สร้างข้อมูล (createdAt) จากใหม่สุดไปยังเก่าที่สุด
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

    const updatedBooking = await prisma.bookingDetail.update({
      where: {
        bookingDetailId: bookingId,
      },
      data: {
        ...updateData,
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
