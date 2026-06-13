import Group from "../models/Group.js";

export const createGroup = async (req, res) => {
  try {
    const { name } = req.body;

    const group = await Group.create({
      name,
      createdBy: req.user._id,
      members: [req.user._id],
    });

    res.status(201).json(group);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};