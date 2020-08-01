import { CHANGE_SELECTION, RESET_SELECTION } from "../constants/";

export const changeSelection = (sel) => {
  return {
    type: CHANGE_SELECTION,
    selection: sel,
  };
};

export const resetSelection = () => {
  return {
    type: RESET_SELECTION,
  };
};
