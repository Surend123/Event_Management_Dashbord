import React, { useState, useEffect } from "react";

const AttendeeManagement = () => {
  const [attendees, setAttendees] = useState([]);
  const [newAttendeeName, setNewAttendeeName] = useState("");
  const [editAttendeeId, setEditAttendeeId] = useState(null);  // Store ID of the attendee to be edited
  const [editedName, setEditedName] = useState(""); // Store the name being edited

  // Load attendees from localStorage when the component mounts
  useEffect(() => {
    const savedAttendees = JSON.parse(localStorage.getItem("attendees"));
    if (savedAttendees) {
      setAttendees(savedAttendees);
    }
  }, []);

  // Save attendees to localStorage whenever the attendees array changes
  useEffect(() => {
    if (attendees.length > 0) {
      localStorage.setItem("attendees", JSON.stringify(attendees));
    }
  }, [attendees]);

  // Add a new attendee
  const addAttendee = () => {
    if (newAttendeeName.trim() !== "") {
      const newAttendee = {
        id: attendees.length + 1,
        name: newAttendeeName,
      };
      setAttendees((prevAttendees) => [...prevAttendees, newAttendee]);
      setNewAttendeeName(""); // Clear the input field
    }
  };

  // Edit an attendee's name
  const editAttendee = (id, name) => {
    setEditAttendeeId(id);  // Set the ID of the attendee to be edited
    setEditedName(name); // Set the current name of the attendee to be edited
  };

  // Save the edited name
  const saveEditedName = () => {
    setAttendees((prevAttendees) =>
      prevAttendees.map((attendee) =>
        attendee.id === editAttendeeId
          ? { ...attendee, name: editedName }
          : attendee
      )
    );
    setEditAttendeeId(null); // Clear the editing state
    setEditedName(""); // Clear the edited name field
  };

  // Delete an attendee
  const deleteAttendee = (id) => {
    setAttendees((prevAttendees) =>
      prevAttendees.filter((attendee) => attendee.id !== id)
    );
  };

  return (
    <div>
      <h1>Attendee Management</h1>
      
      <div>
        <input
          type="text"
          value={newAttendeeName}
          onChange={(e) => setNewAttendeeName(e.target.value)}
          placeholder="Enter Attendee Name"
        />
        <button onClick={addAttendee}>Add Attendee</button>
      </div>

      <div>
        <h2>Attendees List</h2>
        {attendees.length > 0 ? (
          <ul>
            {attendees.map((attendee) => (
              <li key={attendee.id}>
                {editAttendeeId === attendee.id ? (
                  <>
                    <input
                      type="text"
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                    />
                    <button onClick={saveEditedName}>Save</button>
                  </>
                ) : (
                  <>
                    <span>{attendee.name}</span>
                    <button onClick={() => editAttendee(attendee.id, attendee.name)}>Edit</button>
                    <button onClick={() => deleteAttendee(attendee.id)}>Delete</button>
                  </>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No attendees yet. Add some!</p>
        )}
      </div>
    </div>
  );
};

export default AttendeeManagement;
