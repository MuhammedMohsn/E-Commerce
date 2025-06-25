import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartReducer";
let store = configureStore({
  reducer: { cart: cartReducer },
});
export default store;
