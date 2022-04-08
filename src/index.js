import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import App from "./App";

import "./scss/resets.scss";

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>William Does Dev</title>
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
