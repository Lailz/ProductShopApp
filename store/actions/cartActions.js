import instance from "./instance";
import * as actionTypes from "./types";

export const addItemToCart = (newItem) => ({
  type: actionTypes.ADD_ITEM,
  payload: newItem,
});

export const checkout = (items) => async (dispatch) => {
  const res = await instance.post("/checkout", items);
  console.log("🚀 ~ file: cartActions.js ~ line 11 ~ checkout ~ res", res.data);

  dispatch({
    type: actionTypes.CHECKOUT,
    payload: [],
  });
};
