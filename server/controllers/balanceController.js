import Expense from "../models/Expense.js";

export const calculateBalances = async (req, res) => {
  try {
    const expenses = await Expense.find({
      group: req.params.groupId,
    });

    const balances = {};

    expenses.forEach((expense) => {
      const payer = expense.paidBy.toString();

      if (!balances[payer]) balances[payer] = 0;

      balances[payer] += expense.amount;

      expense.participants.forEach((participant) => {
        const userId = participant.user.toString();

        if (!balances[userId]) balances[userId] = 0;

        balances[userId] -= participant.share;
      });
    });

    res.json(balances);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};