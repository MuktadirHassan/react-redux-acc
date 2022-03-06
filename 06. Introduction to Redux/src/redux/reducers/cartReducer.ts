import { ActionType, CartAction } from "redux/types";

const cartReducer = (
  state: IProduct[] = [],
  action: CartAction
): IProduct[] => {
  switch (action.type) {
    case ActionType.ADD_TO_CART:
      return [...state, action.payload];
    case ActionType.REMOVE_FROM_CART:
      return state.filter((item) => item._id !== action.payload);
    case ActionType.CLEAR_CART:
      return [];
    default:
      return state;
  }
};

export default cartReducer;
