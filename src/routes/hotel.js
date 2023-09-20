import { Router } from "express";
import {
  createHotel,
  getAllHotels,
  getAllHotelByUser,
  getHotel,
  updateHotel,
  enabledHotel,
} from "../controllers/hotel.controller.js";
import {
  createRoom,
  enabledRoom,
  getAllRooms,
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
router.get("/room/getAllRooms", getAllRooms);
router.get("/room/getRoom", getRoom);
router.put("/room/updateRoom", updateRoom);
router.put("/enabledHotel", enabledHotel);
router.put("/room/enabledRoom", enabledRoom);

export default router;
