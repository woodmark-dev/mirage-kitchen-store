import { projectFirestore } from "../../firebase-utils/config";
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
  const res = await projectFirestore.collection("shop-items").get();
  const results = res.docs.flatMap((item) => {
    const data = item.data().items;
    return data;
  });

  dispatch(allItems(results));
};

export { fetchAllItems };

export default allShopItemsReducer;
