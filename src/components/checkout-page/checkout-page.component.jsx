import { useSelector } from "react-redux";
import { computePrice } from "../../redux/helperfunctions";
import { useState, useEffect } from "react";

import CheckoutItem from "./checkout-item.component";
import PaymentForm from "../payment-form/payment-form.component";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(() => computePrice(cartItems));
  }, [cartItems]);

  return (
    <div className="px-10 pb-10 md:px-28 md:pt-8">
      <div className="text-center text-2xl font-semibold mb-8 font-serif">
        Cart Items
      </div>

      <div className="text-red-500 text-center text-lg">
        <p>*Please use the following test credit card for payments*</p>
        <p>4242 4242 4242 4242 - Exp: 01/25 - CVV: 123 - Zip: 12345</p>
      </div>

      <div className="bg-zinc-100 rounded-2xl pb-2">
        {cartItems.length === 0 ? (
          <p className="text-center uppercase my-20 pt-3">
            You have no favorite items yet
          </p>
        ) : (
          <ul className="p-6 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-3 gap-2">
            {cartItems.map((item) => {
              return <CheckoutItem key={item.id} item={item} />;
            })}
          </ul>
        )}

        <div className="flex items-center flex-col max-w-sm bg-zinc-50 justify-around px-6 py-4 rounded-2xl m-auto mt-8 shadow-xl">
          <div className="flex items-center gap-2">
            <span className="uppercase font-medium">total:</span>
            <span className="text-2xl font-semibold">${totalPrice}</span>
          </div>
          <PaymentForm total={totalPrice} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
