import Expense from "../models/Expense.js";

export const createExpense = async (req, res) => {
  try {
    const {
      group,
      amount,
      description,
      participants,
    } = req.body;

    const expense = await Expense.create({
      group,
      paidBy: req.user._id,
      amount,
      description,
      participants,
    });

    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getGroupExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({
      group: req.params.groupId,
    }).populate("paidBy", "name email");

    res.json(expenses);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};