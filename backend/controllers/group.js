import groupModel from "../models/group.js";

export const createGroup = async (req, res) => {
  try {
    const newGroup = await groupModel.create(req.body);
    return res.status(201).json(newGroup);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getGroups = async (req, res) => {
  try {
    const groups = await groupModel.find().sort({ createdAt: -1 });
    return res.status(200).json(groups);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
