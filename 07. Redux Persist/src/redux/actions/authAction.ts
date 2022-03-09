import { Dispatch } from "react";
import { AuthActionType, authActionTypes } from "redux/types";
import AuthService from "services/Auth.Service";

export const login = (payload: { email: string; password: string }) => {
  return (dispatch: Dispatch<AuthActionType>) => {
    AuthService.login(payload)
      .then((user) => {
        dispatch({
          type: authActionTypes.LOGIN_SUCCESS,
          payload: user,
        });
      })
      .catch((err) => {
        dispatch({
          type: authActionTypes.LOGIN_FAIL,
          payload: err?.response?.data?.message,
        });
      });
  };
};
export const logout = (): AuthActionType => {
  return {
    type: authActionTypes.LOGOUT,
  };
};
