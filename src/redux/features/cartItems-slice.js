import { findItem, filterItems, searchItem } from "../helperfunctions";

const initialState = [];

const cartItemsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "cartItem/add": {
      const { allItems, item } = payload;
      const currentItem = searchItem(allItems, item);
      const matchedItem = findItem(state, currentItem);
      if (matchedItem) {
        return state.map((item) =>
          item.id === matchedItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...currentItem, quantity: 1 }];
    }

    case "cartItem/subtract": {
      const { allItems, item } = payload;
      const currentItem = searchItem(allItems, item);
      const matchedItem = findItem(state, currentItem);
      if (matchedItem && matchedItem.quantity > 1) {
        return state.map((item) =>
          item.id === matchedItem.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      return filterItems(state, matchedItem);
    }

    case "cartItem/remove": {
      const { allItems, item } = payload;
      const currentItem = searchItem(allItems, item);
      const matchedItem = findItem(state, currentItem);
      if (matchedItem) {
        return filterItems(state, matchedItem);
      }
      return state;
    }

    case "loadUserCartItems": {
      const result = [...state, ...payload].reduce(function (acc, curr) {
        if (!acc.find((item) => item.id === curr.id)) acc.push(curr);
        return acc;
      }, []);

      return result;
    }

    case "resetCartItems": {
      return payload;
    }

    default: {
      return state;
    }
  }
};

export default cartItemsReducer;
