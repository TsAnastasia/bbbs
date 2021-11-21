import { AllTypes, AuthActionsEnum, InitialStateType } from "./auth-types";

export const initialState = { isAuth: false };

const authReducer = (
  state = initialState,
  action: AllTypes
): InitialStateType => {
  switch (action.type) {
    case AuthActionsEnum.SET_AUTH:
      return { ...state, isAuth: action.data };

    default:
      return state;
  }
};

export default authReducer;
