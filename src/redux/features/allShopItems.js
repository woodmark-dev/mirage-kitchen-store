import { collection, getDocs } from "firebase/firestore";
import { database } from "../../firebase-utils/config";

const initialState = [];

const allShopItemsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "include_all_items": {
      return payload;
    }
    default:
      return state;
  }
};

const allItems = (results) => {
  return {
    type: "include_all_items",
    payload: results,
  };
};

const fetchAllItems = async (dispatch) => {
  const res = collection(database, "shop-items");

  const result = await getDocs(res);

  const mainData = result.docs.flatMap((item) => {
    const data = item.data().items;
    return data;
  });

  dispatch(allItems(mainData));
};

export { fetchAllItems };

export default allShopItemsReducer;
