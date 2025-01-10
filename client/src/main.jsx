import React from "react"; // Import React
import ReactDOM from "react-dom/client"; // Import React DOM
import App from "./App"; // Import App component
import "./styles/global.css"; // Import your styles

// Render the application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
