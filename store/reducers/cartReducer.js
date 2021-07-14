import * as actionTypes from "../actions/types";

const initialState = {
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      const newItem = action.payload;
      const foundItem = state.items.find(
        (item) => item.cookieId === newItem.cookieId
      );
      if (foundItem)
        return {
          ...state,
          items: state.items.map((item) =>
            item === foundItem ? newItem : item
          ),
        };
      else
        return {
          ...state,
          items: [...state.items, newItem],
        };
    case actionTypes.CHECKOUT:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

export default reducer;
