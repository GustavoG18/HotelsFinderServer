import { Router } from "express";
import {
  createHotel,
  getAllHotels,
  getAllHotelByUser,
  getHotel,
  updateHotel,
} from "../controllers/hotel.controller.js";
import {
  createRoom,
  getAllRoomsByHotel,
  getRoom,
  updateRoom,
} from "../controllers/room.controller.js";

const router = Router();

router.post("/createHotel", createHotel);
router.put("/updateHotel", updateHotel);
router.get("/getHotel", getHotel);
router.get("/getAllHotelByUser", getAllHotelByUser);
router.get("/getAllHotels", getAllHotels);
router.post("/room/createRoom", createRoom);
router.get("/room/getAllRoomsByHotel", getAllRoomsByHotel);
router.get("/room/getRoom", getRoom);
router.put("/room/updateRoom", updateRoom);

export default router;
