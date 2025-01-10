// models/eventModel.js
import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt
  }
);

const Event = mongoose.model("Event", eventSchema);

export default Event;
