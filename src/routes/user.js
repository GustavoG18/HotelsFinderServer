import { Router } from "express";
import { createUser, createUserAdmin } from "../controllers/user.controller.js";

const router = Router();

router.post("/createUser", createUser);
router.post("/createUserAdmin", createUserAdmin);

export default router;
