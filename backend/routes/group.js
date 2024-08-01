import { Router } from "express";
import { createGroup, getGroups } from "../controllers/group.js";
import validate from "../middleware/validate.js";
import { groupSchema } from "../utils/validations.js";

const groupRouter = Router();

groupRouter.post("", validate(groupSchema), createGroup);

groupRouter.get("/all", getGroups);

export default groupRouter;
