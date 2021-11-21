import { AllTypes, HeaderActionsEnum, InitialStateType } from "./header-types";

export const initialState = {
  menu: {
    isOpen: true,
  },
  search: {
    isOpen: false,
  },
};

const headerReducer = (
  state = initialState,
  action: AllTypes
): InitialStateType => {
  switch (action.type) {
    case HeaderActionsEnum.MENU_OPEN:
      return { ...state, menu: { ...state.menu, isOpen: action.data } };

    case HeaderActionsEnum.SEARCH_OPEN:
      return { ...state, search: { ...state.search, isOpen: action.data } };

    default:
      return state;
  }
};

export default headerReducer;
