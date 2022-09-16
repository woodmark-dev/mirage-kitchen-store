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
      return [...state, { ...currentItem, fav: true }];
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
    case "loadFavItems": {
      const result = [...state, ...payload].reduce(function (acc, curr) {
        if (!acc.find((item) => item.id === curr.id)) acc.push(curr);
        return acc;
      }, []);

      return result;
    }
    case "resetfavItems": {
      return payload;
    }

    default:
      return state;
  }
};

export default favItemsReducer;
