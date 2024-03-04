import { Router } from "express";
import prisma from "../utils/db.js";
import { protect } from "../middlewares/protect.js";

const adminRouter = Router();

adminRouter.use(protect);

//หาข้อมูล Booking ด้วย keyword ถ้าไม่มี query ทั้งหมด
adminRouter.get("/customer-booking", async (req, res) => {
  const keywords = req.query.keywords || "";

  try {
    const response = await prisma.bookingDetail.findMany({
      where: {
        OR: [
          {
            user: {
              userProfile: {
                fullName: {
                  contains: keywords,
                },
              },
            },
          },
          {
            room: {
              roomType: {
                roomTypeName: {
                  contains: keywords,
                },
              },
            },
          },
        ],
      },
      include: {
        user: {
          include: {
            userProfile: true,
          },
        },
        room: {
          include: {
            roomType: {
              include: {
                bedType: true,
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
        checkIn: "asc", // 'asc' for ascending order, 'desc' for descending order
      },
    });

    return res.status(200).json(response);
  } catch (err) {
    return res.status(404).json(err);
  }
});

export default adminRouter;