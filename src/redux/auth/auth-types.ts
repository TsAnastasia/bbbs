import { ThunkAction } from "redux-thunk";
import { StateType } from "../store";
import { initialState } from "./auth-reducer";

export enum AuthActionsEnum {
  SET_AUTH = "SET_AUTH",
}

export type InitialStateType = typeof initialState;

export type AllTypes = SetAuth;

// export type ThunkTypeAsync = ThunkAction<Promise<void>, StateType, unknown, AllTypes>;
export type ThunkType = ThunkAction<void, StateType, unknown, AllTypes>;

export type SetAuth = {
  type: AuthActionsEnum.SET_AUTH;
  data: boolean;
};
