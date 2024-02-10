import express from "express";
import cors from "cors";
import hotelRouter from "./app/hotelRouter.js";
import bookingRouter from "./app/bookingRouter.js";

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use("/hotel", hotelRouter);
app.use("/booking", bookingRouter);

app.get("/", (req, res) => {
  res.send("Hello DTs");
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
