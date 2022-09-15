import { useSelector } from "react-redux";
import CartItem from "./cartItem";

const CartItems = () => {
  const cartItems = useSelector((state) => state.cartItems);

  return (
    <div className="absolute top-24 right-20 md:right-3.5 z-20 flex justify-center translate-x-0 rounded-2xl scale-105 shadow-xl w-40 md:w-96 md:h-20">
      {cartItems.length === 0 ? (
        <p className="text-center pt-4 uppercase">Your cart is empty</p>
      ) : (
        <CartItem />
      )}
    </div>
  );
};

export default CartItems;
