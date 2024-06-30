import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { deleteNotifications, getNotifications, getNotificationsToRead } from "../controllers/notification.controller.js";

const router = express.Router();

router.get("/", protectRoute, getNotifications);
router.get("/to-read", protectRoute, getNotificationsToRead);
router.delete("/", protectRoute, deleteNotifications);

export default router;
