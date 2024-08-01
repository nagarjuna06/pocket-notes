import { Router } from "express";
import groupRouter from "./group.js";
import noteRouter from "./notes.js";

const router = Router();

router.use("/group", groupRouter);

router.use("/note", noteRouter);

export default router;
