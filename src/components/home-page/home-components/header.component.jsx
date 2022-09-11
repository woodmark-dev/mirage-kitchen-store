import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { useSignOut } from "../../../custom-hooks/useSignOut";
import CartItems from "../cart/cartItems";
import store from "../../../redux/store";
import { cartTotal } from "../../../redux/helperfunctions";
import { database } from "../../../firebase-utils/config";
import { doc, setDoc } from "firebase/firestore";

const toggleCart = () => {
  return {
    type: "toggleCart",
  };
};

const Header = () => {
  const toggle = useSelector((state) => state.cartToggle);
  const cartItems = useSelector((state) => state.cartItems);
  const favoriteItems = useSelector((state) => state.favItems);
  const user = useSelector((state) => state.userData.user);
  const userState = useSelector((state) => state.userData.userState);
  const [total, setTotal] = useState(0);
  const { signout } = useSignOut();

  const setState = (state) => {
    return {
      type: "userState",
      payload: state,
    };
  };

  const resetUser = () => {
    return {
      type: "resetUser",
    };
  };

  const resetCartItems = (emptyArray) => {
    return {
      type: "resetCartItems",
      payload: emptyArray,
    };
  };

  const resetFavItems = (emptyArray) => {
    return {
      type: "resetfavItems",
      payload: emptyArray,
    };
  };

  const handleSignOut = () => {
    if (user) {
      signout();
      store.dispatch(setState(false));
      store.dispatch(resetUser());

      const setCartFavItems = async (user, items, favoriteItems) => {
        await setDoc(doc(database, "users", user), {
          cartItems: items,
          favItems: favoriteItems,
          user: user,
        });
      };
      setCartFavItems(user, cartItems, favoriteItems);

      store.dispatch(resetCartItems([]));
      store.dispatch(resetFavItems([]));
    }
  };

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
          {userState === true ? (
            <p onClick={handleSignOut} className="cursor-pointer">
              Sign out
            </p>
          ) : (
            <Link to="sign-in">Sign in</Link>
          )}
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
