export enum cartActionTypes {
  ADD_TO_CART = "add_to_cart",
  REMOVE_FROM_CART = "remove_from_cart",
  CLEAR_CART = "clear_cart",
}

export enum authActionTypes {
  LOGIN_SUCCESS = "login/success",
  LOGIN_PENDING = "login/pending",
  LOGIN_FAIL = "login/fail",
  LOGOUT = "logout",
}

interface loginSuccessAction {
  type: authActionTypes.LOGIN_SUCCESS;
  payload: IUserData;
}

interface loginPendingAction {
  type: authActionTypes.LOGIN_PENDING;
}

interface loginErrorAction {
  type: authActionTypes.LOGIN_FAIL;
  payload: string;
}
interface logoutAction {
  type: authActionTypes.LOGOUT;
}

export type AuthActionType =
  | loginSuccessAction
  | loginPendingAction
  | loginErrorAction
  | logoutAction;
