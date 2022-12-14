import { useElements, useStripe } from "@stripe/react-stripe-js";

import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { motion } from "framer-motion";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.log("hier");
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/completion`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsProcessing(false);
  };

  return (
    <div className="grid grid-cols-1 my-24 p-2 font-serif ">
      <div className="flex justify-center justify-items-center">
        <form
          className="flex flex-col "
          id="payment-form"
          onSubmit={handleSubmit}
        >
          <PaymentElement id="payment-element" />
          <motion.button
            className=" text-xl  p-3 m-5 border-white border-4 hover:bg-white hover:text-black  rounded-full"
            disabled={isProcessing || !stripe || !elements}
            id="submit"
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
          >
            <span id="button-text  font-extrabold font-serif  hover:text-white text-blue-400">
              {isProcessing ? "Processing ... " : "Pay now"}
            </span>
          </motion.button>
          {/* Show any error or success messages */}
          {message && <div id="payment-message">{message}</div>}
        </form>
      </div>
    </div>
  );
}
