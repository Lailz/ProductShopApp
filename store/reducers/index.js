import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import shopReducer from "./shopReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  cartReducer,
  productReducer,
  shopReducer,
});

export default rootReducer;
