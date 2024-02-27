import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import adminRouter from "./app/adminRouter.js"
import usersRouter from "./app/usersRouter.js";
import hotelRouter from "./app/hotelRouter.js";
import roomRouter from "./app/roomDetailRouter.js";
import bookingRouter from "./app/bookingRouter.js";
import bookingHistory from "./app/bookingHistoryRouter.js";
import statusRouter from "./app/statusRouter.js";
import prisma from "./utils/db.js";

const app = express();

const port = 4000;

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(morgan("tiny"));

app.use("/admin", adminRouter);
app.use("/users", usersRouter);
app.use("/hotel", hotelRouter);
app.use("/roomdetail", roomRouter);
app.use("/booking", bookingRouter);
app.use("/bookinghistory", bookingHistory);
app.use("/status", statusRouter);

app.post("/test", async (req, res) => {
  const bedTypes = await prisma.bedTypes.create({
    data: {
      bedTypeName: "Single",
    },
  });
  res.json(bedTypes);
  console.log("bedTypes", bedTypes);
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
