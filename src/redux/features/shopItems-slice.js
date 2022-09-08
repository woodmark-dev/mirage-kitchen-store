import { projectFirestore } from "../../firebase-utils/config";
const initialState = [];

const shopItemsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "fetchData": {
      return payload;
    }
    default:
      return state;
  }
};

const fetchData = (results) => {
  return {
    type: "fetchData",
    payload: results,
  };
};

export const fetchShopData = async (dispatch) => {
  const res = await projectFirestore.collection("shop-items").get();
  const results = res.docs.map((item) => {
    const data = item.data();
    return data;
  });

  dispatch(fetchData(results));
};

export default shopItemsReducer;
