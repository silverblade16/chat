import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getMessage, getUsersForSideBar, sendMessage } from "../controllers/message.controller.js";
const router = express.Router();
router.get("/conversations", protectRoute, getUsersForSideBar);
router.get("/:id", protectRoute, getMessage);
router.post("/send/:id", protectRoute, sendMessage);
export default router;
