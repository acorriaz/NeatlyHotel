import express from "express";
import hotelRouter from "./app/hotelRouter.js";
// import bookingRouter from "./app/bookingRouter.js";
import adminBookingRouter from "./app/adminBookingRouter.js";
import cors from "cors";

const app = express();
const port = 4000;

app.use(cors());

app.use("/hotel", hotelRouter);
/*app.use("/booking", bookingRouter);*/
app.use("/admin", adminBookingRouter);
app.get("/", (req, res) => {
  res.send("Hello DTs");
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
