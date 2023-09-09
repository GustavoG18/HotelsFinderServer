import { Router } from "express";
import { createHotel } from "../controllers/hotel.controller.js";
import { createRoom } from "../controllers/room.controller.js";

const router = Router();

router.post("/createHotel", createHotel);
router.post("/room/createRoom", createRoom);

export default router;
