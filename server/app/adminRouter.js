import { Router } from "express";
import prisma from "../utils/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import { protect } from "../middlewares/protect.js";

const adminRouter = Router();

// adminRouter.use(protect);

//หาข้อมูล Booking ด้วย keyword ถ้าไม่มี query ทั้งหมด
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

// admin register function
adminRouter.post("/register", async (req, res) => {
  const admin = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    dateOfBirth: req.body.dateOfBirth,
    phoneNumber: Number(req.body.phoneNumber),
  };

  const salt = await bcrypt.genSalt(10);
  // now we set user password to hashed password
  admin.password = await bcrypt.hash(admin.password, salt);

  await prisma.agent.create({
    data: {
      username: admin.username,
      password: admin.password,
      email: admin.email,
      agentProfile: {
        create: {
          firstName: admin.firstName,
          lastName: admin.lastName,
          dateOfBirth: admin.dateOfBirth,
          phoneNumber: admin.phoneNumber,
        },
      },
    },
  });

  return res.json({
    message: "admin has been created successfully",
  });
});

//admin login function
adminRouter.post("/login", async (req, res) => {
  const adminLogin = { ...req.body };
  let admin = null;
  console.log(adminLogin);

  if (adminLogin.username.includes("@")) {
    admin = await prisma.agent.findUnique({
      where: {
        email: adminLogin.username,
      },
      include: {
        agentProfile: true,
      },
    });
  } else {
    admin = await prisma.agent.findUnique({
      where: {
        username: adminLogin.username,
      },
      include: {
        agentProfile: true,
      },
    });
  }

  if (!admin) {
    return res.status(404).json({
      message: "user not found",
    });
  }

  const isValidPassword = await bcrypt.compare(
    adminLogin.password,
    admin.password
  );

  if (!isValidPassword) {
    return res.status(400).json({
      message: "password not valid",
    });
  }

  const token = jwt.sign(
    {
      id: admin.agentId,
      firstName: admin.agentProfile.firstName,
      lastName: admin.agentProfile.lastName,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "36000",
    }
  );

  return res.json({
    message: "login succesfully",
    token,
  });
});
//   const adminIdFromClient = Number(req.params.adminId);
//   console.log(adminIdFromClient)

//   try {
//     const response = await prisma.agent.findUnique({
//       where: {
//         agentId: adminIdFromClient,
//       },
//       include: {
//         agentProfile: true,
//       },
//     });

//     return res.status(200).json({data:response});
//   } catch (err) {
//     return res.status(404).json({ message: "Admin not found" });
//   }
// });

export default adminRouter;