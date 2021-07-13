import instance from "./instance";
import * as actionTypes from "./types";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/books");
      dispatch({
        type: actionTypes.FETCH_PRODUCTS,
        payload: res.data,
      });
    } catch (error) {
      console.log(
        "🚀 ~ file: App.js ~ line 18 ~ handleClick ~ error",
        error.message
      );
    }
  };
};
