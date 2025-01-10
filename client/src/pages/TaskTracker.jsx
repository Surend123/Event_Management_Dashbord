import React, { useState, useEffect } from "react";

const TaskTracker = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [eventId, setEventId] = useState("");

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  // Save tasks to localStorage whenever the tasks array changes
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = () => {
    if (taskName.trim() !== "" && eventId.trim() !== "") {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, name: taskName, status: "Pending", eventId },
      ]);
      setTaskName(""); // Clear input field
    }
  };

  const changeTaskStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, status: task.status === "Pending" ? "Completed" : "Pending" }
          : task
      )
    );
  };

  return (
    <div>
      <h1>Task Tracker</h1>
      <div>
        <input
          type="text"
          placeholder="Enter Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <select
          value={eventId}
          onChange={(e) => setEventId(e.target.value)}
        >
          <option value="">Select Event</option>
          {/* Replace with dynamic event list */}
          <option value="1">Event 1</option>
          <option value="2">Event 2</option>
        </select>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div>
        <h2>Task List</h2>
        {tasks.length > 0 ? (
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <span>{task.name}</span>
                <button
                  onClick={() => changeTaskStatus(task.id)}
                  style={{
                    backgroundColor: task.status === "Pending" ? "#f39c12" : "#2ecc71",
                  }}
                >
                  {task.status}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No tasks yet. Add some!</p>
        )}
      </div>
    </div>
  );
};

export default TaskTracker;
