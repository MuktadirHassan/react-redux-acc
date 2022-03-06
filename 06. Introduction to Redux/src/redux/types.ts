interface addToCartAction {
  type: ActionType.ADD_TO_CART;
  payload: IProduct;
}

interface removeFromCartAction {
  type: ActionType.REMOVE_FROM_CART;
  payload: string;
}

interface clearCartAction {
  type: ActionType.CLEAR_CART;
}

export enum ActionType {
  ADD_TO_CART = "add_to_cart",
  REMOVE_FROM_CART = "remove_from_cart",
  CLEAR_CART = "clear_cart",
}
export type CartAction =
  | addToCartAction
  | removeFromCartAction
  | clearCartAction;
