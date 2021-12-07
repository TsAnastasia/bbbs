import rightsAPI from "../../API/rights/rights-api";
import { IRightsRes, IRightsTag } from "../../API/rights/rights-interface";
import {
  RightsActionsEnum,
  SetResults,
  SetTags,
  SetTagsSelected,
  ThunkType,
  ThunkTypeAsync,
} from "./rights-type";

const actions = {
  setResults: (data: IRightsRes): SetResults => ({
    type: RightsActionsEnum.RESULTS,
    data,
  }),
  setTags: (data: IRightsTag[]): SetTags => ({
    type: RightsActionsEnum.TAGS,
    data,
  }),
  setTagsSelected: (data: IRightsTag[]): SetTagsSelected => ({
    type: RightsActionsEnum.TAGS_SELECTED,
    data,
  }),
};

export const getRightsResults =
  (tags: IRightsTag[], limit: number, page: number): ThunkTypeAsync =>
  async (dispatch) => {
    try {
      const res = await rightsAPI.getRights(tags, limit, page);
      dispatch(actions.setResults(res));
    } catch (error) {
      console.log(error);
    }
  };

export const getRightsTags = (): ThunkTypeAsync => async (dispatch) => {
  try {
    const data = await rightsAPI.getTags();
    dispatch(actions.setTags(data));
  } catch (error) {
    console.log(error);
  }
};

export const setRightsTagsSelected =
  (data: IRightsTag[]): ThunkType =>
  (dispatch) => {
    dispatch(actions.setTagsSelected(data));
  };
