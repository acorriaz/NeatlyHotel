import { Router } from "express";
import prisma from "../utils/db.js";

const roomRouter = Router();

//API booking history page
roomRouter.get("/", async function (req, res) {
  try {
    const roomData = await prisma.roomType.findMany({
      include: {
        roomImage: true,
        bedType: true,
      },
    });
    res.json(roomData);
  } catch (error) {
    res.status(400).json({ error: "data not found" });
  }
});

export default roomRouter;
