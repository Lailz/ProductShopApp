import axios from "axios";
import decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

import * as actionTypes from "./types";
import { CART_LIST, HOME } from "../../components/Navigation/types";
import instance from "./instance";

export const signup = (userData, navigation) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`http://localhost:8000/signup`, userData);
      dispatch(setUser(res.data.token));
      navigation.navigate(CART_LIST);
    } catch (error) {
      console.log(error);
    }
  };
};

export const signin = (userData, navigation) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`http://localhost:8000/signin`, userData);
      dispatch(setUser(res.data.token));
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };
};

export const signOut = (navigation) => {
  return setUser();
};

export const checkForToken = () => async (dispatch) => {
  const token = await AsyncStorage.getItem("myToken");
  if (token) {
    const currentTime = Date.now();
    const user = decode(token);
    if (user.exp > currentTime) return dispatch(setUser(token));
  }
  dispatch(setUser());
};

const setUser = (token) => async (dispatch) => {
  if (token) {
    await AsyncStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    dispatch({
      type: actionTypes.SET_USER,
      payload: decode(token),
    });
  } else {
    await AsyncStorage.removeItem("myToken");
    dispatch({
      type: actionTypes.SET_USER,
      payload: null,
    });
  }
};
