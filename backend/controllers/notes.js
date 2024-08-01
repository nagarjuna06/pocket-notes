import noteModel from "../models/notes.js";

export const createNote = async (req, res) => {
  try {
    const newNote = await noteModel.create(req.body);
    return res.status(201).json(newNote);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateNote = async (req, res) => {
  try {
    const updatedNote = await noteModel.findByIdAndUpdate(
      req.params.noteId,
      req.body,
      { new: true }
    );
    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    return res.json(updatedNote);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const deletedNote = await noteModel.findByIdAndDelete(req.params.noteId);
    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    return res.json({ message: "Note deleted", id: deletedNote.id });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getNotes = async (req, res) => {
  try {
    const notes = await noteModel
      .find({ groupId: req.params.groupId })
      .sort({ createdAt: 1 });
    return res.json(notes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
