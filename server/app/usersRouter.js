import { Router } from "express";
import prisma from "../utils/db.js";

const usersRouter = Router();

usersRouter.get("/:uid", async (req, res) => {
  const userIdFromClient = req.params.uid;

  try {
    const response = await prisma.user.findUnique({
      where: {
        userId: userIdFromClient,
      },
      include: {
        userProfile: true,
      },
    });

    return res.status(200).json(response);
  } catch (err) {
    return res.status(404).json({ message: "User not found" });
  }
});

usersRouter.get("/user-email/:username", async (req, res) => {
  const { username } = req.params;
  console.log(username);
  const user = await prisma.user.findFirst({
    where: {
      username,
    },
    select: {
      email: true,
    },
  });

  console.log("user: ", user);

  if (!user) {
    return res.status(404).json({ message: "Username not found" });
  }

  return res.json({ email: user.email });
});

usersRouter.get("/user-check", async (req, res) => {
  const { username, email, idNumber } = req.params;
  const user = await prisma.user.findMany({
    where: {
      OR: [{ username }, { email }, { idNumber }],
    },
    include: {
      userProfile: true,
    },
  });

  if (user.length > 0) {
    return res
      .status(409)
      .json({ message: "Username Email or idNumber already exists" });
  }

  return res.json({ message: "Didn't have existing username" });
});

usersRouter.post("/register", async (req, res) => {
  console.log("run");
  const {
    uId,
    username,
    email,
    idNumber,
    fullName,
    dateOfBirth,
    country,
    cardNumber,
    cardOwner,
    cardExpiry,
  } = req.body;

  const firstName = fullName.split(" ")[0];
  const lastName = fullName.split(" ")[1];

  const user = await prisma.user.create({
    data: {
      userId: uId,
      username,
      email,
      userProfile: {
        create: {
          firstName,
          lastName,
          fullName,
          dateOfBirth,
          idNumber,
          cardExpiry,
          cardNumber,
          cardOwner,
          country,
        },
      },
    },
  });
  return res.json(user);
});

export default usersRouter;
