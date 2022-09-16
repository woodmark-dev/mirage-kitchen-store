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
    if (userState === true) return dispatch(addRemoveFav(storeItems, item));
    return store.dispatch(togglePopup());
  };

  const { imgUrl, name, price } = item;
  return (
    <div>
      <div className="relative flex items-center justify-center bg-zinc-100 overflow-hidden p-10">
        <div className="z-10 md:w-52 md:h-60 h-24 flex items-center">
          <img src={imgUrl} alt={name} />
        </div>

        <div className="w-[90%] h-[120%] bg-zinc-200 absolute rounded-full"></div>
        <div className="w-[70%] h-[90%] bg-zinc-50 absolute rounded-full"></div>

        <div
          onClick={() => favIconHandler(storeItems, item)}
          className="absolute z-10 top-0 right-2 cursor-pointer"
        >
          <p
            style={{
              color: fun(favItems, item) === true ? "red" : "white",
              backgroundColor: fun(favItems, item) === true ? "white" : "black",
            }}
            className="text-3xl rounded w-5 h-5 flex justify-center items-center"
          >
            &#9825;
          </p>
        </div>
      </div>
      <div className="flex justify-between border-x-2 w-full">
        <p className="mx-2 my-1">{name}</p>
        <p className="mx-2 my-1">${price}</p>
      </div>
      <button
        onClick={() => dispatch(addToCart(storeItems, item))}
        className="font-medium p-2 border-2 border-zinc-200 bg-zinc-200 rounded-lg text-center w-full"
      >
        Add to cart
      </button>
    </div>
  );
};

export default ShopItem;

//Today:
//implement persist
//refactor your redux functions

//Tomorow:
//Optimize blender images
//start styling finishes and responsiveness

//Monday:
//Finish stylish and responsiveness finishes
//catching errors and implementing spinners

//Tuesday:
//Finish catching errors
//Testing

//Wednesday:
//Finish testing
//implement favicon
//deployment
