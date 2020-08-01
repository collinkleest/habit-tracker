import { CHANGE_SELECTION, RESET_SELECTION } from "../constants/";

const initialState = {
  selection: "login",
};

export const selectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SELECTION:
      return {
        selection: action.selection,
      };
    case RESET_SELECTION:
      return {
        selection: "login",
      };
    default:
      return state;
  }
};
