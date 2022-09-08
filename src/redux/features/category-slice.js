import { projectFirestore } from "../../firebase-utils/config";
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
  const res = await projectFirestore.collection("categories").get();
  const results = res.docs.flatMap((item) => {
    return item.data().items;
  });

  dispatch(fetchData(results));
};

export default categoriesItemReducer;
