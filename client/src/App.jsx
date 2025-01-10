import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventManagement from "./pages/EventManagement";
import AttendeeManagement from "./pages/AttendeeManagement";
import TaskTracker from "./pages/TaskTracker"; // Import the Task Tracker Page

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <a href="/">Event Management</a> | <a href="/attendees">Attendee Management</a> | <a href="/tasks">Task Tracker</a>
        </nav>
        <Routes>
          <Route path="/" element={<EventManagement />} />
          <Route path="/attendees" element={<AttendeeManagement />} />
          <Route path="/tasks" element={<TaskTracker />} /> {/* Add Task Tracker route */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
