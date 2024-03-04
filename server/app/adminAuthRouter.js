import { Router } from "express";
import prisma from "../utils/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const adminAuthRouter = Router();

// admin register function
adminAuthRouter.post("/register", async (req, res) => {
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
adminAuthRouter.post("/login", async (req, res) => {
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
      expiresIn: "900000",
    }
  );

  return res.json({
    message: "login succesfully",
    token,
  });
});

export default adminAuthRouter;