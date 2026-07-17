import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./sass/variables/_normalize.scss";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <App />,
  // </StrictMode>,
);
