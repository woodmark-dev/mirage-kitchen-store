import { useSelector } from "react-redux";
import { computePrice } from "../../redux/helperfunctions";
import { useState, useEffect } from "react";

import CheckoutItem from "./checkout-item.component";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setPrice(() => computePrice(cartItems));
  }, [cartItems]);

  return (
    <div className="px-10 pb-10 md:px-28 md:pt-8 my-16">
      <div className="text-center text-2xl font-semibold mb-8 font-serif">
        Cart Items
      </div>

      <div className="bg-zinc-100 rounded-2xl pb-2">
        <ul className="p-6 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-3 gap-2">
          {cartItems.map((item) => {
            return <CheckoutItem key={item.id} item={item} />;
          })}
        </ul>

        <div className="flex items-center max-w-sm bg-zinc-50 justify-between px-6 py-4 rounded-2xl m-auto mt-8 shadow-xl">
          <div className="flex items-center gap-2">
            <span className="uppercase font-medium">total:</span>
            <span className="text-2xl font-semibold">${price}</span>
          </div>
          <button className="font-semibold text-lg px-6 py-3 bg-zinc-200 rounded-3xl hover:bg-zinc-300">
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
