import { Router } from "express";
import { getAllHotels } from "../controllers/hotel.controller.js";

const router = Router();

router.get("/", getAllHotels);

export default router;
