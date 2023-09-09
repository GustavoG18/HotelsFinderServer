import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import hotelRouters from "./routes/hotel.js";
import userRouters from "./routes/user.js";
import reservationRouters from "./routes/reservation.js";
import connectToDatabase from "./database/database.js";

dotenv.config();
const app = express();

app.set("port", process.env.PORT || 5000);
app.use(morgan("dev"));
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
connectToDatabase();

// Routes
app.use("/user", userRouters);
app.use("/hotel", hotelRouters);
app.use("/reservation", reservationRouters);

app.listen(app.get("port"), () => {
  console.log("Server is listening on port", app.get("port"));
});
