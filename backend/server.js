// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./db.js";
import eventRoutes from "./routes/eventRoutes.js";
import attendeeRoutes from "./routes/attendeeRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api", eventRoutes);
app.use("/api", attendeeRoutes);
app.use("/api", taskRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Event Management API is working!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
