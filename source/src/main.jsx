import React from "react";
import ReactDOM from "react-dom/client";
import "ress"; //初期化CSS
import Base from "./layout/base/Base";
import "./layout/base/Base.scss";
import "./global/scss/utility.scss";

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <Base />
  </React.StrictMode>
);
