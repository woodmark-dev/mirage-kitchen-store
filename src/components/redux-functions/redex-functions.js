export const fetchUser = (user) => {
  return {
    type: "fetchUser",
    payload: user,
  };
};

export const setState = (state) => {
  return {
    type: "userState",
    payload: state,
  };
};

export const loadUserCartItems = (cartItems) => {
  return {
    type: "loadUserCartItems",
    payload: cartItems,
  };
};

export const loadUserFavItems = (favItems) => {
  return {
    type: "loadFavItems",
    payload: favItems,
  };
};

export const addToCart = (allItems, item) => {
  return {
    type: "cartItem/add",
    payload: { allItems, item },
  };
};

export const subtractFromCart = (allItems, item) => {
  return {
    type: "cartItem/subtract",
    payload: { allItems, item },
  };
};

export const removeCartItem = (allItems, item) => {
  return {
    type: "cartItem/remove",
    payload: { allItems, item },
  };
};

export const addRemoveFav = (allItems, item) => {
  return {
    type: "favItem/add/remove",
    payload: { allItems, item },
  };
};

export const removeFav = (allItems, item) => {
  return {
    type: "favItem/remove",
    payload: { allItems, item },
  };
};

export const toggleCart = () => {
  return {
    type: "toggleCart",
  };
};

export const togglePopup = () => {
  return {
    type: "togglePopup",
  };
};

export const resetUser = () => {
  return {
    type: "resetUser",
  };
};

export const resetCartItems = (emptyArray) => {
  return {
    type: "resetCartItems",
    payload: emptyArray,
  };
};

export const resetFavItems = (emptyArray) => {
  return {
    type: "resetfavItems",
    payload: emptyArray,
  };
};

export const allItems = (results) => {
  return {
    type: "include_all_items",
    payload: results,
  };
};

export const fetchCategories = (results) => {
  return {
    type: "fetchcategories",
    payload: results,
  };
};

export const fetchShopItems = (results) => {
  return {
    type: "fetchData",
    payload: results,
  };
};

export const loadingCategories = (state) => {
  return {
    type: "categoriesLoading",
    payload: state,
  };
};

export const loadingCategoryError = (state) => {
  return {
    type: "categoriesLoadingError",
    payload: state,
  };
};

export const fetchDisplayName = (displayName) => {
  return {
    type: "displayName",
    payload: displayName,
  };
};
