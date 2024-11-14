import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { NewContext } from "./context/NewContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NewContext>
      <App />
    </NewContext>
  </StrictMode>
);
