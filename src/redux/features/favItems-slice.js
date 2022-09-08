import { findItem, filterItems, searchItem } from "../helperfunctions";

const initialState = [];

const favItemsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "favItem/add/remove": {
      const { allItems, item } = payload;
      const currentItem = searchItem(allItems, item);
      const matchedItem = findItem(state, currentItem);
      if (matchedItem) {
        return filterItems(state, matchedItem);
      }
      return [...state, { ...currentItem }];
    }

    case "favItem/remove": {
      const { allItems, item } = payload;
      const currentItem = searchItem(allItems, item);
      const matchedItem = findItem(state, currentItem);
      if (matchedItem) {
        return filterItems(state, matchedItem);
      }
      return state;
    }

    default:
      return state;
  }
};

export default favItemsReducer;
