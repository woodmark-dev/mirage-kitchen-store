import { useSelector } from "react-redux";
import CartItem from "./cartItem";

const CartItems = () => {
  const cartItems = useSelector((state) => state.cartItems);

  return (
    <div className="absolute top-20 right-3.5 z-20 translate-x-0 rounded-2xl scale-105 shadow-xl w-96 h-20">
      {cartItems.length === 0 ? (
        <p className="text-center pt-4 uppercase">Your cart is empty</p>
      ) : (
        <CartItem />
      )}
    </div>
  );
};

export default CartItems;
