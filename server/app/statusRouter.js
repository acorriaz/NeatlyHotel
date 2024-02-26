import { Router } from "express";
import prisma from "../utils/db.js";

const statusRouter = Router();

statusRouter.put("/rooms/:roomId", async function (req, res) {
  const { roomId } = req.params;
  const { statusId } = req.body;
  try {
    const newStatus = await prisma.room.update({
      where: {
        roomId: parseInt(roomId),
      },
      data: {
        statusId: statusId,
      },
    });
    res.status(200).json({ message: "Status updated successfully", newStatus });
  } catch (error) {
    res.status(400).json({ error: "Failed to update status", details: error });
  }
});

export default statusRouter;
