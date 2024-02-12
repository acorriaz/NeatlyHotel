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

  if (guests > 2 && guests <= 4) {
    // 1. บอก DB ว่าขอ Query ข้อมูลห้องประเภทที่พี่ต้องการหน่อย
    const roomCondition = await supabase
      .from("room_type")
      .select((roomType) => {
        roomType.room_type.includes("Superior Garden View" && "Supreme");
        // 2. เอาข้อมูลที่ได้กลับมาจาก Database มา Filter ดูว่ามีห้องที่ว่างรึเปล่า
        // พอได้ข้อมูลที่ Query มาแล้วก็เอามา filter มันที่ Server ว่ามี status === vacant ไหม
        // 3. เมื่อ Filter ที่ Server เสร็จปุ๊บให้เข้า conditional statement ด้านล่าง
        if (filterVacantRooms.length >= 1) {
        } else if (filterVacantRooms.length === 0) {
          // ถ้า Query.length เป็น 0 แสดงว่าเราก็ไม่มีข้อมูลเหมือนกัน
          return res.status(400).json();
        }
        // status น่าจะต้อง Query ว่าอันไหนมี Status ที่เป็น Vacant บ้าง
        // ถ้ามีส่งอะไรกลับไป
        // ถ้าไม่มีที่ Vacant แล้วจะส่งอะไรกลับไป
      });
    return res.status(200).json(roomCondition);
  }

  if (guests <= 2 && status === "Vacant") {
    const roomCondition = await supabase
      .from("room_type")
      .filter((roomType) => {
        roomType.room_type.includes(
          "Deluxe" && "Premier Sea View" && "Superior" && "Suit"
        );
      });
    return res.status(200).json(roomCondition);
  }

  if (status === "Vacant") {
    const roomCondition = await supabase.from("room_type").select();
    return res.status(200).json(roomCondition);
  }
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
