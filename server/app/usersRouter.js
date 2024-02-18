import { Router } from "express";
import prisma from "../utils/db.js";

const usersRouter = Router();

usersRouter.get("/user-check", async (req, res) => {
  const { username, email, idNumber } = req.params;
  const user = await prisma.users.findMany({
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

  const user = await prisma.users.create({
    data: {
      userId: uId,
      username,
      email,
      userProfile: {
        create: {
          firstName,
          lastName,
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
