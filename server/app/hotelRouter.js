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
    // 2. เอาข้อมูลที่ได้กลับมาจาก Database มา Filter ดูว่ามีห้องที่ว่างรึเปล่า
    // พอได้ข้อมูลที่ Query มาแล้วก็เอามา filter มันที่ Server ว่ามี status === vacant ไหม
    // 3. เมื่อ Filter ที่ Server เสร็จปุ๊บให้เข้า conditional statement ด้านล่าง
    // ถ้า Query.length เป็น 0 แสดงว่าเราก็ไม่มีข้อมูลเหมือนกัน
    // status น่าจะต้อง Query ว่าอันไหนมี Status ที่เป็น Vacant บ้าง
    // ถ้ามีส่งอะไรกลับไป
    // ถ้าไม่มีที่ Vacant แล้วจะส่งอะไรกลับไป

    const roomCondition = await supabase
      .from("room")
      .select("*, room_type_id(*), status_id(*)")
      .match({
        guest_number: guests,
        status_name: "Vacant",
        room_type: "Superior Garden View" && "Supreme",
      });

    if (roomCondition.length >= 1) {
      return res.status(200).json(roomCondition);
    } else if (roomCondition.length === 0) {
      return res.status(404).json({ error: "room not found" });
    }
  }

  if (guests <= 2) {
    const roomCondition = await supabase
      .from("room")
      .select("*, room_type_id(*), status_id(*)")
      .match({
        guest_number: guests,
        status_name: "Vacant",
        room_type: "Deluxe" && "Premier Sea View" && "Superior" && "Suit",
      });

    if (roomCondition.length >= 1) {
      return res.status(200).json(roomCondition);
    } else if (roomCondition.length === 0) {
      return res.status(404).json({ error: "room not found" });
    }
  }
});

export default hotelRouter;
