import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findItem } from "../../redux/helperfunctions";
import store from "../../redux/store";
import { togglePopup } from "../redux-functions/redex-functions";

import { addToCart, addRemoveFav } from "../redux-functions/redex-functions";

const fun = (favItems, item) => {
  if (favItems.length === 0) return;
  if (findItem(favItems, item)) return true;
  return false;
};

const ShopItem = ({ item }) => {
  const storeItems = useSelector((state) => state.allShopItems);
  const favItems = useSelector((state) => state.favItems);
  const userState = useSelector((state) => state.userData.userState);
  const dispatch = useDispatch();

  useEffect(() => {
    fun(favItems, item);
  }, [favItems, item]);

  const favIconHandler = (storeItems, item) => {
    if (userState === true) {
      dispatch(addRemoveFav(storeItems, item));
    } else {
      store.dispatch(togglePopup());
    }
  };

  const addToCartHandler = (storeItems, item) => {
    dispatch(addToCart(storeItems, item));
  };

  const { imgUrl, name, price } = item;
  return (
    <div>
      <div className="relative flex items-center justify-center bg-zinc-100 overflow-hidden p-10">
        <div className="z-10 md:w-52 md:h-60 flex items-center">
          <img src={imgUrl} alt={name} />
        </div>

        <div className="w-[90%] h-[120%] bg-zinc-200 absolute rounded-full"></div>
        <div className="w-[70%] h-[90%] bg-zinc-50 absolute rounded-full"></div>

        <div
          onClick={() => favIconHandler(storeItems, item)}
          className="absolute z-10 top-2 right-2 cursor-pointer"
        >
          <p
            style={{
              color: fun(favItems, item) === true ? "red" : "white",
              backgroundColor: fun(favItems, item) === true ? "white" : "black",
            }}
            className="text-3xl rounded w-6 h-7 md:h-8 md:w-8 flex justify-center items-center"
          >
            &#9825;
          </p>
        </div>
      </div>
      <div className="flex justify-around border-x-2 w-full">
        <p className="mx-2 my-1">{name}</p>
        <p className="mx-2 my-1">${price}</p>
      </div>
      <button
        onClick={() => addToCartHandler(storeItems, item)}
        className="font-medium p-2 border-2 border-zinc-200 bg-zinc-200 rounded-lg text-center w-full"
      >
        Add to cart
      </button>
    </div>
  );
};

export default ShopItem;
