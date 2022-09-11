import { collection, getDocs } from "firebase/firestore";
import { database } from "../../firebase-utils/config";

const initialSate = [];

const categoriesItemReducer = (state = initialSate, action) => {
  const { type, payload } = action;
  switch (type) {
    case "fetchcategories": {
      return payload;
    }
    default:
      return state;
  }
};

const fetchData = (results) => {
  return {
    type: "fetchcategories",
    payload: results,
  };
};

export const fetchCategoriesData = async (dispatch) => {
  const res = collection(database, "categories");
  const result = await getDocs(res);
  const results = result.docs.flatMap((item) => {
    return item.data().items;
  });

  dispatch(fetchData(results));
};

export default categoriesItemReducer;
