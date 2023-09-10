import { Router } from "express";
import {
  createUser,
  createUserAdmin,
  getUser,
} from "../controllers/user.controller.js";

const router = Router();

router.post("/createUser", createUser);
router.post("/createUserAdmin", createUserAdmin);
router.get("/getUser", getUser);

export default router;
