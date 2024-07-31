import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Herosection from "./components/Herosection.jsx";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Herosection></Herosection>
  </React.StrictMode>
);
