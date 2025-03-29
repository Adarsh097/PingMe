import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getMessage, getUsersForSidebar, sendMessages } from "../controllers/message.contoller.js";



const router = express.Router();

router.get("/users",protectRoute,getUsersForSidebar);

router.get("/:id",protectRoute,getMessage);

router.post("/send/:id",protectRoute,sendMessages);

export default router;