import { Router } from "express";
import validate from "../middleware/validate.js";
import { noteSchema } from "../utils/validations.js";
import {
  createNote,
  deleteNote,
  getNotes,
  updateNote,
} from "../controllers/notes.js";

const noteRouter = Router();

noteRouter.post("", validate(noteSchema), createNote);

noteRouter.get("/:groupId/all", getNotes);

noteRouter.put("/:noteId", validate(noteSchema), updateNote);

noteRouter.delete("/:noteId", deleteNote);

export default noteRouter;
