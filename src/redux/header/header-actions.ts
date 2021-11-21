import {
  HeaderActionsEnum,
  MenuOpen,
  SearchOpen,
  ThunkType,
} from "./header-types";

const headerActions = {
  menuOpen: (data: boolean): MenuOpen => ({
    type: HeaderActionsEnum.MENU_OPEN,
    data,
  }),
  searchOpen: (data: boolean): SearchOpen => ({
    type: HeaderActionsEnum.SEARCH_OPEN,
    data,
  }),
};

export const setMenuOpen =
  (isOpen: boolean): ThunkType =>
  (dispatch) => {
    dispatch(headerActions.menuOpen(isOpen));
  };

export const setSearchOpen =
  (isOpen: boolean): ThunkType =>
  (dispatch) => {
    dispatch(headerActions.searchOpen(isOpen));
  };
