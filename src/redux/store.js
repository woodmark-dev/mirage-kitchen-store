import { configureStore } from "@reduxjs/toolkit";

import cartItemsReducer from "./features/cartItems-slice";
import favItemsReducer from "./features/favItems-slice";
import shopItemsReducer from "./features/shopItems-slice";
import categoriesItemReducer from "./features/category-slice";
import cartToggleReducer from "./features/cartToggle-slice";
import allShopItemsReducer from "./features/allShopItems";

const store = configureStore({
  reducer: {
    cartItems: cartItemsReducer,
    favItems: favItemsReducer,
    shopItems: shopItemsReducer,
    allShopItems: allShopItemsReducer,
    categoriesItem: categoriesItemReducer,
    cartToggle: cartToggleReducer,
  },
});

export default store;
