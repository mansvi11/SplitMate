import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { calculateBalances } from "../controllers/balanceController.js";

const router = express.Router();

router.get("/:groupId", protect, calculateBalances);

export default router;