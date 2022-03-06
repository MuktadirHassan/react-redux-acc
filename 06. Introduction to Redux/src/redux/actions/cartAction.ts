import { ActionType, CartAction } from "redux/types";

export const addToCart = (payload: IProduct): CartAction => {
  return {
    type: ActionType.ADD_TO_CART,
    payload,
  };
};

export const removeFromCart = (payload: string): CartAction => {
  return {
    type: ActionType.REMOVE_FROM_CART,
    payload,
  };
};

export const clearCart = (): CartAction => {
  return {
    type: ActionType.CLEAR_CART,
  };
};
