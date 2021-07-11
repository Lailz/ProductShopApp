import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
import { fetchShops } from "./actions/shopActions";

const store = createStore(
  reducer, // reducer function
  applyMiddleware(thunk)
);

// This will run ONE TIME ONLY when the app first loads
store.dispatch(fetchShops());

export default store;
