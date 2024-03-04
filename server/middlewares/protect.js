import jwt from "jsonwebtoken";

export const protect = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token || !token.startsWith("Bearer")) {
    return res.status(401).json({
      message: "Token has invalid format",
    });
  }

  const tokenWithoutBearer = token.split(" ")[1];
  //ตรวจสอบว่า Token ถูกต้องและยังไม่หมดอายุหรือไม่
  jwt.verify(tokenWithoutBearer, process.env.SECRET_KEY, (err, payload) => {
    //ระบุว่าถ้า Token ไม่ผ่านเงื่อนไขให้ส่ง Response กลับไปว่า Token ที่ส่งเข้ามานั้น Invalid
    if (err) {
      return res.status(401).json({
        message: "Token is invalid",
      });
    }
    //นำข้อมูลผู้ใช้ที่แนบมากับ Token ใส่ลงไปใน Property user ของ Object req เพื่อที่จะนำไปใช้ต่อใน Controller Function ได้
    req.user = payload;
    next();
  });
};
