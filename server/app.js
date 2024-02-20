import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import usersRouter from "./app/usersRouter.js";
import hotelRouter from "./app/hotelRouter.js";
import roomRouter from "./app/roomDetail.js";
import bookingRouter from "./app/bookingRouter.js";
import bookingHistory from "./app/bookingHistoryRouter.js";
import prisma from "./utils/db.js";

const app = express();

const port = 4000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/users", usersRouter);
app.use("/hotel", hotelRouter);
app.use("/roomdetail", roomRouter);
app.use("/booking", bookingRouter);
app.use("/bookinghistory", bookingHistory);

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
