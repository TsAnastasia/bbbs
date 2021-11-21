import { ThunkAction } from "redux-thunk";
import { StateType } from "../store";
import { initialState } from "./header-reducer";

export enum HeaderActionsEnum {
  MENU_OPEN = "MENU_OPEN",
  SEARCH_OPEN = "SEARCH_OPEN",
}

export type InitialStateType = typeof initialState;

export type AllTypes = MenuOpen | SearchOpen;

// export type ThunkTypeAsync = ThunkAction<Promise<void>, StateType, unknown, AllTypes>;
export type ThunkType = ThunkAction<void, StateType, unknown, AllTypes>;

export type MenuOpen = {
  type: HeaderActionsEnum.MENU_OPEN;
  data: boolean;
};

export type SearchOpen = {
  type: HeaderActionsEnum.SEARCH_OPEN;
  data: boolean;
};
