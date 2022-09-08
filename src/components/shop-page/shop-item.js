import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import HeartIcon from "../icons/heart-icon";

const ShopItem = ({ item }) => {
  const storeItems = useSelector((state) => state.allShopItems);
  const all = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = (allItems, item) => {
    return {
      type: "cartItem/add",
      payload: { allItems, item },
    };
  };

  const addRemoveFav = (allItems, item) => {
    console.log(all);
    return {
      type: "favItem/add/remove",
      payload: { allItems, item },
    };
  };

  const { imgUrl, name } = item;
  return (
    <div>
      <div className="relative flex items-center justify-center bg-zinc-100 overflow-hidden p-10 h-80">
        <div className="z-10 w-36">
          <img src={imgUrl} alt={name} />
        </div>

        <div className="w-[90%] h-[120%] bg-zinc-200 absolute rounded-full"></div>
        <div className="w-[70%] h-[90%] bg-zinc-50 absolute rounded-full"></div>

        <div
          onClick={() => dispatch(addRemoveFav(storeItems, item))}
          className="absolute z-10 top-0 right-2 cursor-pointer"
        >
          <HeartIcon />
        </div>
      </div>
      <button
        onClick={() => dispatch(addToCart(storeItems, item))}
        className="font-medium p-2 border-2 border-zinc-200 bg-zinc-200 rounded-lg mt-3 w-full text-center"
      >
        Add to cart
      </button>
    </div>
  );
};

export default ShopItem;
