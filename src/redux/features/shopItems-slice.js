import { collection, getDocs } from "firebase/firestore";
import { database } from "../../firebase-utils/config";

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
  const res = collection(database, "shop-items");
  const result = await getDocs(res);

  const results = result.docs.map((item) => {
    const data = item.data();
    return data;
  });

  dispatch(fetchData(results));
};

export default shopItemsReducer;
