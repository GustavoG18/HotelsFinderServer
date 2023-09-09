import express from "express";
import morgan from "morgan";
import cors from "cors";
import hotelRouters from "./routes/hotel.js";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Routes
app.use("/", hotelRouters);

app.listen(3000, () => {
  console.log("Server is listening on port", 3000);
});
