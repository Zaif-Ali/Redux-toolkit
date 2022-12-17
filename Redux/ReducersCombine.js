import { combineReducers } from "@reduxjs/toolkit";
import { CartReducers } from "./Reducers/cart";

export const reducer = combineReducers({
  cart: CartReducers,
});
