import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.scss";
import { HashRouter } from "react-router-dom";
import App from "./app/App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter basename="/">
    <App />
  </HashRouter>
);
