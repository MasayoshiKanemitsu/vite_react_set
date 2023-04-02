import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "@generouted/react-router";
import "ress"; //初期化CSS
import "./layout/base/Base.scss";
import "./global/scss/utility.scss";

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);
