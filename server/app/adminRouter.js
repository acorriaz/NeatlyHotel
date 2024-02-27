import { Router } from "express";
import prisma from "../utils/db.js";

const adminRouter = Router();

adminRouter.get("/customer-booking", async (req, res) => {
  const keywords = req.query.keywords || "";

  try {
    const response = await prisma.bookingDetail.findMany({
      where: {
        OR: [
          {
            user: {
              username: {
                contains: keywords,
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
        user: true,
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
    });

    return res.status(200).json(response);
  } catch (err) {
    return res.status(404).json(err);
  }
});

adminRouter.get("/:adminId", async (req, res) => {
  const adminIdFromClient = Number(req.params.adminId);

  try {
    const response = await prisma.admin.findUnique({
      where: {
        adminId: adminIdFromClient,
      },
      include: {
        adminProfile: true,
      },
    });

    return res.status(200).json(response);
  } catch (err) {
    return res.status(404).json({ message: "Admin not found" });
  }
});

adminRouter.get("/admin-email/:username", async (req, res) => {
  const { username } = req.params;
  console.log(username);
  const admin = await prisma.admin.findFirst({
    where: {
      username,
    },
    select: {
      email: true,
    },
  });

  console.log("admin: ", admin);

  if (!admin) {
    return res.status(404).json({ message: "Username not found" });
  }

  return res.json({ email: admin.email });
});

adminRouter.get("/user-check/:username", async (req, res) => {
  const { username, email } = req.params;
  const admin = await prisma.admin.findMany({
    where: {
      OR: [{ username }, { email }],
    },
    include: {
      adminProfile: true,
    },
  });

  if (admin.length > 0) {
    return res
      .status(409)
      .json({ message: "Username Email already exists" });
  }

  return res.json({ message: "Didn't have existing username" });
});


export default adminRouter;