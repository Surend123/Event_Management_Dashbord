// models/attendeeModel.js
import mongoose from "mongoose";

const attendeeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
  },
  {
    timestamps: true,
  }
);

const Attendee = mongoose.model("Attendee", attendeeSchema);

export default Attendee;
