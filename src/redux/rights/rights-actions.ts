import rightsAPI from "../../API/rights/rights-api";
import { IRightsTag } from "../../API/rights/rights-interface";
import {
  RightsActionsEnum,
  SetTags,
  SetTagsSelected,
  ThunkType,
  ThunkTypeAsync,
} from "./rights-type";

const rightsActions = {
  setTags: (data: IRightsTag[]): SetTags => ({
    type: RightsActionsEnum.TAGS,
    data,
  }),
  setTagsSelected: (data: IRightsTag[]): SetTagsSelected => ({
    type: RightsActionsEnum.TAGS_SELECTED,
    data,
  }),
};

export const getRightsTags = (): ThunkTypeAsync => async (dispatch) => {
  try {
    const data = await rightsAPI.getTags();
    dispatch(rightsActions.setTags(data));
  } catch (error) {
    console.log(error);
  }
};

export const setRightsTagsSelected =
  (data: IRightsTag[]): ThunkType =>
  (dispatch) => {
    dispatch(rightsActions.setTagsSelected(data));
  };
