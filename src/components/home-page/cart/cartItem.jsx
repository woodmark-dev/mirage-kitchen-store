import { useNavigate } from "react-router-dom";
import { toggleCart } from "../home-components/header.component";
import store from "../../../redux/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const CartItem = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const storeItems = useSelector((state) => state.allShopItems);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToCheckout = () => {
    store.dispatch(toggleCart());
    if (cartItems.length === 0) return;
    navigate("/checkout");
  };

  const subtractFromCart = (allItems, item) => {
    return {
      type: "cartItem/subtract",
      payload: { allItems, item },
    };
  };

  const addToCart = (allItems, item) => {
    return {
      type: "cartItem/add",
      payload: { allItems, item },
    };
  };

  return (
    <div>
      <ul className="bg-zinc-100 p-8 flex flex-col gap-2 items-center rounded-2xl scale-105 shadow-xl w-96">
        {cartItems.map((item) => {
          return (
            <li
              key={item.id}
              className="flex items-center bg-zinc-50 px-4 py-2 rounded-2xl w-72"
            >
              <div className="relative flex items-center justify-center bg-zinc-100 overflow-hidden p-2 w-16 h-12">
                <img
                  className="w-full z-10"
                  src={item.imgUrl}
                  alt={item.name}
                />

                <div className="w-[90%] h-[120%] bg-zinc-200 absolute rounded-full"></div>
                <div className="w-[70%] h-[90%] bg-zinc-50 absolute rounded-full"></div>
              </div>

              <div className="flex flex-col gap-1 pr-4">
                <p>{item.name}</p>
                <span>{item.price}</span>
              </div>

              <div className="flex flex-col items-center ml-20">
                <span
                  onClick={() => dispatch(addToCart(storeItems, item))}
                  className="font-medium text-lg rounded-full hover:bg-zinc-200 flex items-center justify-center"
                >
                  <ion-icon name="add-outline"></ion-icon>
                </span>
                <span className="font-medium">{item.quantity}</span>
                <span
                  onClick={() => dispatch(subtractFromCart(storeItems, item))}
                  className="font-medium text-lg rounded-full hover:bg-zinc-200 flex items-center justify-center"
                >
                  <ion-icon name="remove-outline"></ion-icon>
                </span>
              </div>
            </li>
          );
        })}

        <button
          onClick={goToCheckout}
          className="mt-10 w-36 h-12 bg-black text-white rounded-xl border border-black hover:text-black hover:bg-white"
        >
          GO TO CHECKOUT
        </button>
      </ul>
    </div>
  );
};

export default CartItem;
