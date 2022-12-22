import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import App from "./App";

//Render location currently set to "root" within the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
