import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import hotelRouters from "./routes/hotel.js";
import connectToDatabase from "./database/database.js";

dotenv.config();
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
connectToDatabase();

// Routes
app.use("/", hotelRouters);

app.listen(3000, () => {
  console.log("Server is listening on port", 3000);
});
