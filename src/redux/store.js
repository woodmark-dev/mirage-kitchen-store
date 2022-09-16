import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import thunk from "redux-thunk";

import cartItemsReducer from "./features/cartItems-slice";
import favItemsReducer from "./features/favItems-slice";
import shopItemsReducer from "./features/shopItems-slice";
import categoriesItemReducer from "./features/category-slice";
import cartToggleReducer from "./features/cartToggle-slice";
import allShopItemsReducer from "./features/allShopItems";
import userReducer from "./features/userSlice";
import togglePopupReducer from "./features/popupSlice";

const reducers = combineReducers({
  cartItems: cartItemsReducer,
  favItems: favItemsReducer,
  shopItems: shopItemsReducer,
  allShopItems: allShopItemsReducer,
  categoriesItem: categoriesItemReducer,
  cartToggle: cartToggleReducer,
  popupToggle: togglePopupReducer,
  userData: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: [
    "shopItems",
    "allShopItems",
    "categoriesItem",
    "cartToggle",
    "popupToggle",
    " userData",
  ],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
