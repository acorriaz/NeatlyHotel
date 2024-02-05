import express from "express";
import hotelRouter from "./app/hotelRouter.js";

const app = express();
const port = 4000;
app.use("/hotel", hotelRouter);

app.get("/", (req, res) => {
  res.send("Hello DTs");
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
