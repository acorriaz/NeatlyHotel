import { Router } from "express";
import supabase from "../utils/db.js";

const hotelRouter = Router();

hotelRouter.get("/users", async function (req, res) {
  let resultUsers = null;
  try {
    resultUsers = await supabase.from("users").select("*");
    return res.status(200).json(resultUsers.data);
  } catch (error) {
    return res.status(500).json(resultUsers.error);
  }
});

hotelRouter.get("/rooms", async (req, res) => {
  let guests = req.query.guests;
  let status = req.query.status;

  if (guests > 2 && guests <= 4 && status === "Vacant") {
    const roomCondition = await supabase.from("room_type").filter();
    return res.status(200).json(roomCondition);
  }

  const roomCondition = await supabase.from("room_type").select();
  return res.status(200).json(roomCondition);
});

hotelRouter.get("/", async (req, res) => {
  let guests = req.query.guests;
  let status = req.query.status;

  if (keywords === undefined) {
    return res.status(400).json({
      message: "Please send keywords parameter in the URL endpoint",
    });
  }

  const regexKeywords = keywords.split(" ").join("|");
  const regex = new RegExp(regexKeywords, "ig");
  const results = trips.filter((trip) => {
    return (
      trip.title.match(regex) ||
      trip.description.match(regex) ||
      trip.tags.filter((tag) => tag.match(regex)).length
    );
  });

  return res.json({
    data: results,
  });
});

export default hotelRouter;
