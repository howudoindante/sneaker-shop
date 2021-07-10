import { orderItems } from "./orderItems";
import { combineReducers } from "redux";
import { storeItems } from "./storeItems";
import { cartItems } from "./cartItems";
import { favItems } from "./favItems";
export const rootReducer = combineReducers({
  storeItems,
  cartItems,
  favItems,
  orderItems,
});
