// routes/taskRoutes.js
import express from "express";
import { createTask, getTasksForEvent, updateTaskStatus } from "../controllers/taskController.js";

const router = express.Router();

router.post("/tasks", createTask);
router.get("/tasks/:eventId", getTasksForEvent);
router.put("/tasks/:id", updateTaskStatus);

export default router;
