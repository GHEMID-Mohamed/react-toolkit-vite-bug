import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import "@axa-fr/react-toolkit-all/dist/style/af-toolkit-core.scss";
import "bootstrap/scss/bootstrap-grid.scss";
import "bootstrap/scss/bootstrap-reboot.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
