import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { followUnfollowUser, getSuggestedUsers, getUserProfile, updateUser, getUsersForSidebar, requestAddFriend, acceptAddFriend, updateIMGCover } from "../controllers/user.controller.js";
import { updateIMGProfile } from "../controllers/post.controller.js";

const router = express.Router();

router.get("/profile/:username", protectRoute, getUserProfile);
router.get("/suggested", protectRoute, getSuggestedUsers);
router.post("/follow/:id", protectRoute, followUnfollowUser);
router.post("/update", protectRoute, updateUser);
router.get("/", protectRoute, getUsersForSidebar);
router.post("/req/friend/:id", protectRoute, requestAddFriend)
router.post("/req/friend/accept/:reqId", protectRoute, acceptAddFriend)
router.post("/update/avt", protectRoute, updateIMGProfile)
router.post("/update/cover-img", protectRoute, updateIMGCover)

export default router;
