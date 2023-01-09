import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/main.css";
import AppState from "./context/AppState";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppState>
  </React.StrictMode>
);
