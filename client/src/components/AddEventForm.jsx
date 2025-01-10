import React from "react";

const AddEventForm = ({ eventName, setEventName, eventDetails, setEventDetails, addEvent }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (eventName && eventDetails) {
      addEvent(eventName, eventDetails);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      <textarea
        placeholder="Event Details"
        value={eventDetails}
        onChange={(e) => setEventDetails(e.target.value)}
      />
      <button type="submit">Add Event</button>
    </form>
  );
};

export default AddEventForm;
