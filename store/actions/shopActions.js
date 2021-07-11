import instance from "./instance";
import * as actionTypes from "./types";

export const fetchShops = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/katakeet");
      dispatch({
        type: actionTypes.FETCH_SHOPS,
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
