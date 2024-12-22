import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getMessage, getUsersForSideBar, sendMessage } from "../controllers/message.controller.js";


const router = express.Router();

router.get("/conversations", protectRoute as any, getUsersForSideBar as any);
router.get("/:id",protectRoute as any, getMessage as any);
router.post("/send/:id",protectRoute as any, sendMessage as any);

export default router;

