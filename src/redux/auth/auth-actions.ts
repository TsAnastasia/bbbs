import { AuthActionsEnum, SetAuth, ThunkType } from "./auth-types";

const authActions = {
  setAuth: (data: boolean): SetAuth => ({
    type: AuthActionsEnum.SET_AUTH,
    data,
  }),
};

export const login = (): ThunkType => (dispatch) => {
  dispatch(authActions.setAuth(true));
};

export const logout = (): ThunkType => (dispatch) => {
  dispatch(authActions.setAuth(false));
};
