import { Router } from "express";
import prisma from "../utils/db.js";
import multer from "multer";
import handleUpload from "../utils/cloudinary.js"

const storage = new multer.memoryStorage();
const upload = multer({ storage: storage });

const usersRouter = Router();

// GET : user profile from ID
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

// GET : find email from username
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

  if (!user) {
    return res.status(404).json({ message: "Username not found" });
  }

  return res.json({ email: user.email });
});

// PUT : Update userprofile
usersRouter.put("/update-user/:uid", upload.single("profilePic"), async (req, res) => {
  if (!req.body) {
    res.status(400).json({message: "No request body"})
  }

  const formData = req.body

  let profilePicUrlResponse = ""

  if (req.file && req.file.mimetype.startsWith("image/")) {
    console.log("---Uploading to Cloudinary---")
    try {
      const b64 = Buffer.from(req.file.buffer).toString("base64");
      let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
      const uploadResult = await handleUpload(dataURI);
      profilePicUrlResponse = uploadResult.url
      console.log("---Upload successfully---")
      console.log("response from cloud: ", uploadResult)
      console.log("Profile pic URL: ", profilePicUrlResponse)
    } catch (err) {
      res.status(500).json({message: "Error uploading image to cloudinary", error: err})
    }
  }

  try {
    console.log("---split full name---")
    const newFirstName = formData.fullName.split(" ")[0];
    const newLastName = formData.fullName.split(" ")[1];

    let updateData = {
      fullName: formData.fullName,
      firstName: newFirstName,
      lastName: newLastName,
      idNumber: formData.idNumber,
      dateOfBirth: formData.dateOfBirth,
      country: formData.country,
    }

    console.log(updateData)

    console.log("--- construct ---")

    if (profilePicUrlResponse) {
      console.log("---profilePicUrl---")
      updateData.profilePicUrl = profilePicUrlResponse
    }

    console.log(profilePicUrlResponse)

    console.log("---Send Request to DB---")

    const responseDB = await prisma.userProfile.update({
      where: { userId: req.params.uid },
      data: updateData
    })

    res.json({ message: "User profile updated successfully", data: responseDB})
  } catch (err) {
    res.status(500).json({message: "Error update user profile in DB"})
  }
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
          fullName,
        },
      },
    },
  });
  return res.json(user);
});

export default usersRouter;
