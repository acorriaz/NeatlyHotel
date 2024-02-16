import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import hotelRouter from "./app/hotelRouter.js"
import roomRouter from "./app/roomDetail.js"
import bookingRouter from "./app/bookingRouter.js";
import bookingHistory from "./app/bookingHistoryRouter.js";
import hotelRouter from "./app/hotelRouter.js";
// import bookingRouter from "./app/bookingRouter.js";
import adminBookingRouter from "./app/adminBookingRouter.js";


const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use("/hotel", hotelRouter);
app.use("/roomdetail", roomRouter)
app.use("/booking", bookingRouter);
app.use("/bookinghistory", bookingHistory);

app.use("/hotel", hotelRouter);
/*app.use("/booking", bookingRouter);*/
app.use("/admin", adminBookingRouter);
app.get("/", (req, res) => {
  res.send("Hello DTs");
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
