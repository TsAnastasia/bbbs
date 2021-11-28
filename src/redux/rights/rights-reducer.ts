import { IRightsTag } from "../../API/rights/rights-interface";
import { AllTypes, InitialStateType, RightsActionsEnum } from "./rights-type";

export const initialState = {
  tags: [] as IRightsTag[],
  tags_selected: [] as IRightsTag[],
};

const rightsReducer = (
  state = initialState,
  action: AllTypes
): InitialStateType => {
  switch (action.type) {
    case RightsActionsEnum.TAGS:
      return { ...state, tags: action.data };

    case RightsActionsEnum.TAGS_SELECTED:
      return { ...state, tags_selected: action.data };

    default:
      return state;
  }
};

export default rightsReducer;
