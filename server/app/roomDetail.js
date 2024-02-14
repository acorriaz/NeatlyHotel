import { Router } from "express";
import supabase from "../utils/db.js";

const roomRouter = Router();

//API booking history page
roomRouter.get("/", async function (req, res) {
  try {
    const roomDetail = await supabase
      .from("room_type")
      .select("*, bed_type_id(*)")

    res.json(roomDetail);
  } catch (error) {
    res.status(400).json({ error: "data not found" });
  }
});

export default roomRouter;
