import * as actionTypes from "../actions/types";

const initialState = {
  shops: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SHOPS:
      return {
        ...state,
        shops: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
