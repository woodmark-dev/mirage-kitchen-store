import { collection, getDocs } from "firebase/firestore";
import { database } from "../../firebase-utils/config";
import { fetchShopItems } from "../../components/redux-functions/redex-functions";
import store from "../store";

const initialState = {
  items: [],
  isLoading: false,
  loadingError: false,
};

const shopItemsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "fetchData": {
      return {
        ...state,
        items: payload,
      };
    }
    case "shopItemsLoading": {
      return {
        ...state,
        isLoading: payload,
      };
    }
    case "shopItemsLoadingError": {
      return {
        ...state,
        loadingError: payload,
      };
    }
    default:
      return state;
  }
};

const loadingShopItems = (state) => {
  return {
    type: "shopItemsLoading",
    payload: state,
  };
};

const loadingshopItemsError = (state) => {
  return {
    type: "shopItemsLoadingError",
    payload: state,
  };
};

const storeFunction = (purpose, outcome) => {
  store.dispatch(purpose(outcome));
};

export const fetchShopData = async (dispatch) => {
  storeFunction(loadingShopItems, true);
  const res = collection(database, "shop-items");
  const result = await getDocs(res);

  if (result.docs.length === 0) {
    storeFunction(loadingShopItems, false);
    return storeFunction(loadingshopItemsError, true);
  }

  const results = result.docs.map((item) => {
    const data = item.data();
    return data;
  });

  storeFunction(loadingShopItems, false);
  dispatch(fetchShopItems(results));
};

export default shopItemsReducer;
