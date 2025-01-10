// routes/attendeeRoutes.js
import express from "express";
import { addAttendee, getAllAttendees, deleteAttendee } from "../controllers/attendeeController.js";

const router = express.Router();

router.post("/attendees", addAttendee);
router.get("/attendees", getAllAttendees);
router.delete("/attendees/:id", deleteAttendee);

export default router;
