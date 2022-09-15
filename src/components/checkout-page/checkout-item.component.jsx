import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  subtractFromCart,
  removeCartItem,
} from "../redux-functions/redex-functions";

const CheckoutItem = ({ item }) => {
  const storeItems = useSelector((state) => state.allShopItems);
  const dispatch = useDispatch();

  return (
    <li className="bg-zinc-50 px-2 py-2 rounded-2xl flex gap-2 items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="relative flex items-center justify-center bg-zinc-100 overflow-hidden p-2 w-24 h-20 self-center shrink-0 xl:shrink">
          <img className="w-full z-10" src={item.imgUrl} alt={item.name} />

          <div className="w-[90%] h-[120%] bg-zinc-200 absolute rounded-full"></div>
          <div className="w-[70%] h-[90%] bg-zinc-50 absolute rounded-full"></div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium">{item.name}</p>
          <span className="font-bold">${item.price}</span>
        </div>
      </div>

      <div className="flex flex-col items-end justify-between">
        <div
          onClick={() => dispatch(removeCartItem(storeItems, item))}
          className="p-1 hover:bg-zinc-400 hover:text-white rounded-full font-bold flex items-center justify-center"
        >
          <ion-icon className="text-xl" name="close-outline"></ion-icon>
        </div>

        <div className="flex items-center">
          <span
            onClick={() => dispatch(subtractFromCart(storeItems, item))}
            className="font-medium rounded-full p-1 hover:bg-zinc-200 flex items-center justify-center"
          >
            <ion-icon className="" name="remove-outline"></ion-icon>
          </span>
          <span className="font-medium p-2">{item.quantity}</span>
          <span
            onClick={() => dispatch(addToCart(storeItems, item))}
            className="font-medium rounded-full p-1 hover:bg-zinc-200 flex items-center justify-center"
          >
            <ion-icon name="add-outline"></ion-icon>
          </span>
        </div>
      </div>
    </li>
  );
};

export default CheckoutItem;
