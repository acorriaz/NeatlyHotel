import { Router } from "express";
import prisma from "../utils/db.js";

const roomRouter = Router();

//API booking history page
roomRouter.get("/", async function (req, res) {
  try {
    const roomData = await prisma.RoomType.findMany({
      include: {
        bedType: true,
        roomAmenitie: true,
        roomImage: true,
      },
    });
    res.json(roomData);
  } catch (error) {
    res.status(400).json(error);
  }
});

export default roomRouter;
