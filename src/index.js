// react imports
import React from "react";
import ReactDOM from "react-dom";

// style imports
import "bootstrap/dist/css/bootstrap.min.css";

// redux imports
import { Provider } from "react-redux";
import { store } from "./redux/index";

// component imports
import { App } from "./Components/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
