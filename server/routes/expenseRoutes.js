import express from "express";
import {
  createExpense,
  getGroupExpenses,
} from "../controllers/expenseController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createExpense);

router.get(
  "/group/:groupId",
  protect,
  getGroupExpenses
);

export default router;