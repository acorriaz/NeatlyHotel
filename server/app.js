import express from "express";
<<<<<<< HEAD
=======
import bodyParser from "body-parser";
>>>>>>> cbc53b4 (feat: still working on landing booking page on checkin, checkout and room and guest)
import cors from "cors";
import hotelRouter from "./app/hotelRouter.js";
import bookingRouter from "./app/bookingRouter.js";

const app = express();
const port = 4000;

app.use(cors());
<<<<<<< HEAD
app.use(express.json());
=======
app.use(bodyParser.json());

>>>>>>> cbc53b4 (feat: still working on landing booking page on checkin, checkout and room and guest)
app.use("/hotel", hotelRouter);
app.use("/booking", bookingRouter);

app.get("/", (req, res) => {
  res.send("Hello DTs");
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
