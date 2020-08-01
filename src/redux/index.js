import { createStore } from "redux";
import { selectionReducer } from "./reducers/selection";

export const store = createStore(
  selectionReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
