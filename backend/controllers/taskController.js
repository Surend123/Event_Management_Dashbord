// controllers/taskController.js
import Task from "../models/taskModel.js";

// Create Task
export const createTask = async (req, res) => {
  const { name, eventId, assignedAttendee } = req.body;
  try {
    const newTask = new Task({ name, eventId, assignedAttendee });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get Tasks for an Event
export const getTasksForEvent = async (req, res) => {
  const { eventId } = req.params;
  try {
    const tasks = await Task.find({ eventId });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update Task Status
export const updateTaskStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const task = await Task.findById(id);
    if (!task) return res.status(404).json({ message: "Task not found!" });

    task.status = status || task.status;
    await task.save();
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
