import { ThunkAction } from "redux-thunk";
import { IRightsRes, IRightsTag } from "../../API/rights/rights-interface";
import { StateType } from "../store";
import { initialState } from "./rights-reducer";

export enum RightsActionsEnum {
  RESULTS = "RESULTS",
  TAGS = "TAGS",
  TAGS_SELECTED = "TAGS_SELECTED",
}

export type InitialStateType = typeof initialState;

export type ThunkTypeAsync = ThunkAction<
  Promise<void>,
  StateType,
  unknown,
  AllTypes
>;
export type ThunkType = ThunkAction<void, StateType, unknown, AllTypes>;

export type AllTypes = SetResults | SetTags | SetTagsSelected;

export type SetResults = {
  type: RightsActionsEnum.RESULTS;
  data: IRightsRes;
};

export type SetTags = {
  type: RightsActionsEnum.TAGS;
  data: IRightsTag[];
};

export type SetTagsSelected = {
  type: RightsActionsEnum.TAGS_SELECTED;
  data: IRightsTag[];
};
