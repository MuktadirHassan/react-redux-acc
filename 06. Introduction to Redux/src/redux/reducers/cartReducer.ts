// action -> add to cart
// action type ??
// add to cart -> state modify
// return state

import { cartActionType } from "redux/actions/cartAction";
import { cartActionTypes } from "redux/types";

// dipatcher -> dispatch -> {type: 'add_to_cart', payload: {}}

function cartReducer(state: IProduct[] = [], action: cartActionType) {
  switch (action.type) {
    case cartActionTypes.ADD_TO_CART:
      return [...state, action.payload];
    case cartActionTypes.REMOVE_FROM_CART:
      const newState = state.filter((item) => item._id !== action.payload);
      return newState;
    case cartActionTypes.CLEAR_CART:
      return [];
    default:
      return state;
  }
}

export default cartReducer;
