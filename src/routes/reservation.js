import { Router } from "express";
import {
  createReservation,
  getAllReservationByUserAdmin,
  getReservation,
} from "../controllers/reservation.controller.js";

const router = Router();

router.post("/createReservation", createReservation);
router.get("/getReservation", getReservation);
router.get("/getAllReservationByUserAdmin", getAllReservationByUserAdmin);

export default router;
