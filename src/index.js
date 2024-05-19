import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/utilities.css";
import "./styles/navbar.css";
import "./styles/content.css";
import "./styles/pengaturan.css";
import "./styles/activityInput.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
