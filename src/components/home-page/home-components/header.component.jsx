import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import CartItems from "../cart/cartItems";
import store from "../../../redux/store";
import { cartTotal } from "../../../redux/helperfunctions";
import { useState } from "react";
import { useEffect } from "react";

const toggleCart = () => {
  return {
    type: "toggleCart",
  };
};

const Header = () => {
  const toggle = useSelector((state) => state.cartToggle);
  const cartItems = useSelector((state) => state.cartItems);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(() => cartTotal(cartItems));
  }, [cartItems]);

  const toggleHandler = () => {
    store.dispatch(toggleCart());
  };

  return (
    <div className="flex items-center justify-between px-6 pb-0 pt-10 md:px-10">
      <Link to="/">LOGO</Link>

      <div className="flex items-center gap-6 md:gap-8">
        <div className="uppercase font-medium">
          <Link to="/shop">Shop</Link>
        </div>
        <div className="uppercase font-medium">
          <Link to="/contact">Contact</Link>
        </div>
        <div className="uppercase font-medium">
          <Link to="sign-in">Sign in</Link>
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <Link to="favorites" className="p-0.5 cursor-pointer">
          <ion-icon size="large" name="heart"></ion-icon>
        </Link>
        <div onClick={toggleHandler} className="p-0.5 cursor-pointer relative">
          <ion-icon size="large" className="text-6xl" name="cart"></ion-icon>
          <div className="flex items-center justify-center w-5 h-5 bg-zinc-200 rounded-full absolute -top-2 -right-2 text-xs">
            {total}
          </div>
        </div>
      </div>

      {toggle && <CartItems />}
    </div>
  );
};

export { toggleCart };

export default Header;
