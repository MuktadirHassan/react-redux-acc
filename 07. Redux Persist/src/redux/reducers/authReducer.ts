import { AuthActionType, authActionTypes } from "redux/types";

interface IAuthState {
  data: IUserData | null;
  error: string | null;
  status: "idle" | "pending" | "success" | "error";
}

const initState: IAuthState = {
  data: null,
  error: null,
  status: "idle",
};

function authReducer(state: IAuthState = initState, action: AuthActionType) {
  switch (action.type) {
    case authActionTypes.LOGIN_PENDING:
      return {
        data: null,
        error: null,
        status: "pending",
      };
    case authActionTypes.LOGIN_SUCCESS:
      return {
        data: action.payload,
        error: null,
        status: "success",
      };
    case authActionTypes.LOGIN_FAIL:
      return {
        data: null,
        error: action.payload,
        status: "error",
      };
    default:
      return state;
  }
}
export default authReducer;
