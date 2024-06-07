import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Theme from "./Theme";
import { ThemeProvider } from "@mui/material/styles";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={Theme}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </ThemeProvider>
);
