import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useSignOut } from "../../../custom-hooks/useSignOut";
import CartItems from "../cart/cartItems";
import PopUp from "../../pop-up/pop-up.component";
import { togglePopup } from "../../redux-functions/redex-functions";

import store from "../../../redux/store";
import { cartTotal } from "../../../redux/helperfunctions";
import { favTotal } from "../../../redux/helperfunctions";
import { database } from "../../../firebase-utils/config";
import { doc, setDoc } from "firebase/firestore";
import logo from "../../../logo/new-logo.png";

import {
  setState,
  toggleCart,
  resetUser,
  resetCartItems,
  resetFavItems,
} from "../../redux-functions/redex-functions";

const Header = () => {
  const toggle = useSelector((state) => state.cartToggle);
  const cartItems = useSelector((state) => state.cartItems);
  const favoriteItems = useSelector((state) => state.favItems);
  const user = useSelector((state) => state.userData.user);
  const userState = useSelector((state) => state.userData.userState);
  const popupToggle = useSelector((state) => state.popupToggle);
  const [total, setTotal] = useState(0);
  const [favoTotal, setFavTotal] = useState(0);
  const { signout } = useSignOut();

  let navigate = useNavigate();

  const favPageHandler = () => {
    if (userState === false) return store.dispatch(togglePopup());
    return navigate(`/favorites`);
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

  useEffect(() => {
    setFavTotal(() => favTotal(favoriteItems));
  }, [favoriteItems]);

  const toggleHandler = () => {
    store.dispatch(toggleCart());
  };

  return (
    <div className="flex items-center md:justify-between md:px-10 px-4">
      <Link className="pt-6 w-32 h-32" to="/">
        <img src={logo} alt="logo" />
      </Link>

      <div className="flex items-center gap-3 text-sm md:text-lg md:gap-8 pr-8">
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
        <div onClick={favPageHandler} className="cursor-pointer relative">
          <div
            style={{
              color: favoTotal === 0 ? "white" : "red",
              backgroundColor: favoTotal === 0 ? "black" : "white",
            }}
            className="text-2xl md:text-3xl rounded w-5 h-5 md:w-8 md:h-8 flex justify-center items-center"
          >
            &#9825;
          </div>
          {userState && (
            <div className="flex items-center justify-center text-black w-5 h-5 bg-zinc-200 rounded-full absolute -top-3 -right-3 text-xs">
              {favoTotal}
            </div>
          )}
        </div>
        <div onClick={toggleHandler} className="p-0.5 cursor-pointer relative">
          <p className="text-xl md:text-2xl">&#128722;</p>
          <div className="flex items-center justify-center w-5 h-5 bg-zinc-200 rounded-full absolute -top-2 -right-2 text-xs">
            {total}
          </div>
        </div>
      </div>

      {toggle && <CartItems />}

      {popupToggle && <PopUp />}
    </div>
  );
};

export default Header;
