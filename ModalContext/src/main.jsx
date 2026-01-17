import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ModalProvider } from "./contexts/ModalContext";
import Modals from "./contexts/ModalContainer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModalProvider>
      <App />
      <Modals /> 
    </ModalProvider>
  </React.StrictMode>
);
