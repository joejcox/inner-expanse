import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";

import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    {/* redux provider component so the application can access anything related to redux store*/}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
