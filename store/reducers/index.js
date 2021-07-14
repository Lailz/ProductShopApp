import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import shopReducer from "./shopReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  authReducer,
  cartReducer,
  productReducer,
  shopReducer,
});

export default rootReducer;
