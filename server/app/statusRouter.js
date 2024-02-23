import { Router } from "express";
import prisma from "../utils/db.js";

const statusRouter = Router();

statusRouter.put("/rooms/:roomId", async function (req, res) {
  const roomId = Number(req.params.roomId);
  const updateStatusName = req.params.status;
  try {
    const newStatus = await prisma.room.update({
      where: {
        roomId: roomId,
      },
      data: {
        statusName: updateStatusName,
      },
    });
    res.status(200).json({ message: "Status updated successfully", newStatus });
  } catch (error) {
    res.status(400).json({ error: "Failed to update status", details: error });
  }
});
