import { useState } from "react";
import { useSelector } from "react-redux";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import ButtonSpinner from "../button-spinner/button-spinner.component";
import store from "../../redux/store.js";
import { resetCartItems } from "../redux-functions/redex-functions.js";

const PaymentForm = ({ total }) => {
  const userState = useSelector((state) => state.userData.userState);
  const userName = useSelector((state) => state.userData.displayName);
  const [isprocessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentError, setPaymentError] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(() => true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: total * 100 }),
    }).then((res) => res.json());

    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: userState === true ? userName : "guest",
        },
      },
    });

    setIsProcessingPayment(() => false);

    if (paymentResult.error) {
      setPaymentError(() => true);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        store.dispatch(resetCartItems([]));
        setPaymentSuccess(() => true);
      }
    }
  };

  return (
    <div className="flex flex-col justify-center gap-4 h-48 w-56">
      <form onSubmit={paymentHandler} className="flex flex-col gap-6">
        <h2 className="text-center font-bold">Card details</h2>
        <CardElement />
        {isprocessingPayment ? (
          <ButtonSpinner />
        ) : (
          <button className="ml-20 w-20 h-10 border font-bold text-white bg-zinc-700 rounded-lg transition-all duration-500 hover:text-black hover:bg-white">
            Pay Now
          </button>
        )}
      </form>
      {paymentSuccess && (
        <p className="text-green-500 text-center">
          Your payment was successful
        </p>
      )}
      {paymentError && (
        <p className="text-red-500 text-center">
          You transaction wasn't successful. Please try again.
        </p>
      )}
    </div>
  );
};

export default PaymentForm;
