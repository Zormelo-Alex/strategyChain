import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AppKitProvider } from "./context/Reown.jsx";

createRoot(document.getElementById("root")).render(
  <AppKitProvider>
    <App />
  </AppKitProvider>
);
