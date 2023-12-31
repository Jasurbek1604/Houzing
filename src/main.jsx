import React from "react";
import ReactDOM from "react-dom/client";
import App from "./root/index.jsx";
import "./index.css";
import RootContext from "./context/index.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RootContext>
      <App />
    </RootContext>
  </React.StrictMode>
);
