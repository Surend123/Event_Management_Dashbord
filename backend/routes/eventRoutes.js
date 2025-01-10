// routes/eventRoutes.js
import express from "express";
import { createEvent, getAllEvents, updateEvent, deleteEvent } from "../controllers/eventController.js";

const router = express.Router();

router.post("/events", createEvent);
router.get("/events", getAllEvents);
router.put("/events/:id", updateEvent);
router.delete("/events/:id", deleteEvent);

export default router;
