import { collection, getDocs } from "firebase/firestore";
import { database } from "../../firebase-utils/config";
import {
  fetchCategories,
  loadingCategories,
  loadingCategoryError,
} from "../../components/redux-functions/redex-functions";
import store from "../store";

const initialSate = {
  items: [],
  isLoading: false,
  loadingError: false,
};

const categoriesItemReducer = (state = initialSate, action) => {
  const { type, payload } = action;
  switch (type) {
    case "fetchcategories": {
      return { ...state, items: payload };
    }
    case "categoriesLoading": {
      return {
        ...state,
        isLoading: payload,
      };
    }
    case "categoriesLoadingError": {
      return {
        ...state,
        loadingError: payload,
      };
    }
    default:
      return state;
  }
};

const storeFunction = (purpose, outcome) => {
  store.dispatch(purpose(outcome));
};

export const fetchCategoriesData = async (dispatch) => {
  storeFunction(loadingCategories, true);
  const res = collection(database, "categories");
  const result = await getDocs(res);
  if (result.docs.length === 0) {
    storeFunction(loadingCategories, false);
    return storeFunction(loadingCategoryError, true);
  }
  const results = result.docs.flatMap((item) => {
    return item.data().items;
  });
  storeFunction(loadingCategories, false);
  dispatch(fetchCategories(results));
};

export default categoriesItemReducer;

// if (!result) {
//   return storeFunction(loadingCategoryError, true);
// }
