import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  // auth: authReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
