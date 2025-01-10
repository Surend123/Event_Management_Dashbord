// controllers/eventController.js
import Event from "../models/eventModel.js";

// Create Event
export const createEvent = async (req, res) => {
  const { name, description, location, date } = req.body;
  try {
    const newEvent = new Event({ name, description, location, date });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get All Events
export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update Event
export const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { name, description, location, date } = req.body;

  try {
    const event = await Event.findById(id);
    if (!event) return res.status(404).json({ message: "Event not found!" });

    event.name = name || event.name;
    event.description = description || event.description;
    event.location = location || event.location;
    event.date = date || event.date;

    await event.save();
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete Event
export const deleteEvent = async (req, res) => {
  const { id } = req.params;
  try {
    await Event.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
