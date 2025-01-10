import React, { useState, useEffect } from "react";
import AddEventForm from "../components/AddEventForm";
import { Link } from "react-router-dom";

const EventManagement = () => {
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState("");
  const [eventDetails, setEventDetails] = useState("");
  const [attendees, setAttendees] = useState([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
  ]);

  // Load events from localStorage when the component mounts
  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem("events"));
    if (savedEvents) {
      setEvents(savedEvents);
    }
  }, []);

  // Save events to localStorage whenever the events array changes
  useEffect(() => {
    if (events.length > 0) {
      localStorage.setItem("events", JSON.stringify(events));
    }
  }, [events]);

  const addEvent = (name, details) => {
    const newEvent = {
      id: events.length + 1,
      name,
      details,
      assignedAttendees: [],
    };
    setEvents((prevEvents) => [...prevEvents, newEvent]);
    setEventName("");
    setEventDetails("");
  };

  const assignAttendeesToEvent = (eventId, attendeeId) => {
    setEvents(
      events.map((event) =>
        event.id === eventId
          ? {
              ...event,
              assignedAttendees: [
                ...event.assignedAttendees,
                attendees.find((attendee) => attendee.id === attendeeId),
              ],
            }
          : event
      )
    );
  };

  return (
    <div>
      <h1>Event Management</h1>
      <AddEventForm
        eventName={eventName}
        setEventName={setEventName}
        eventDetails={eventDetails}
        setEventDetails={setEventDetails}
        addEvent={addEvent}
      />
      <div>
        <h2>Event List</h2>
        {events.length > 0 ? (
          <ul>
            {events.map((event) => (
              <li key={event.id}>
                <h3>{event.name}</h3>
                <p>{event.details}</p>
                <p>Assigned Attendees:</p>
                <ul>
                  {event.assignedAttendees.map((attendee) => (
                    <li key={attendee.id}>{attendee.name}</li>
                  ))}
                </ul>
                <div>
                  <h4>Assign Attendee</h4>
                  <select
                    onChange={(e) =>
                      assignAttendeesToEvent(event.id, Number(e.target.value))
                    }
                  >
                    <option value="">Select Attendee</option>
                    {attendees.map((attendee) => (
                      <option key={attendee.id} value={attendee.id}>
                        {attendee.name}
                      </option>
                    ))}
                  </select>
                </div>
                <Link to={`/tasks`}>Go to Task Tracker</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No events yet. Add some!</p>
        )}
      </div>
    </div>
  );
};

export default EventManagement;
