// controllers/attendeeController.js
import Attendee from "../models/attendeeModel.js";

// Add Attendee
export const addAttendee = async (req, res) => {
  const { name, eventId } = req.body;
  try {
    const newAttendee = new Attendee({ name, eventId });
    await newAttendee.save();
    res.status(201).json(newAttendee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get All Attendees
export const getAllAttendees = async (req, res) => {
  try {
    const attendees = await Attendee.find();
    res.status(200).json(attendees);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete Attendee
export const deleteAttendee = async (req, res) => {
  const { id } = req.params;
  try {
    await Attendee.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
