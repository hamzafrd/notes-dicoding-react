import React from "react";
import { createRoot } from "react-dom/client";

// import style
import "./styles/style.css";
import App from "./components/App";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
