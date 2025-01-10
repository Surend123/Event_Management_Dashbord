// models/taskModel.js
import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
    assignedAttendee: { type: mongoose.Schema.Types.ObjectId, ref: "Attendee" },
    status: { type: String, enum: ["Pending", "Completed"], default: "Pending" },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

export default Task;
