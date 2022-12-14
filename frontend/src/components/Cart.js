import CartItem from "./CartItem";
import classnames from "classnames";
import formatCurrency from "../util/formatCurrency";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import useUser from "../context/useUser";
import { motion } from "framer-motion";

export default function Cart() {
  const user = useUser();
  const { cart, showCartItems, setShowCartItems, showCart, checkout } =
    useCart();

  const navigate = useNavigate();

  //console.log(cart);
  const totalCents = cart.reduce((sum, entry) => {
    return sum + parseFloat(entry.quantity);
  }, 0);

  return (
    <section className={classnames({ invisible: !showCart })}>
      <div
        className={classnames(
          "mb-4",
          "top-0",
          "right-0",
          "mr-4",
          "mt-20",
          "fixed",
          { invisible: !showCartItems }
        )}
      >
        <div
          style={{ maxHeight: "calc(100vh - 6rem)" }}
          className="bg-white text-gray-700 body-font shadow-lg border rounded-lg flex flex-col"
        >
          <div className="overflow-y-auto px-4 pt-4">
            {cart.map((entry) => (
              <CartItem key={entry.itemId} entry={entry} />
            ))}
          </div>
          <div className="flex justify-between items-end border-t border-b py-2 px-4">
            <span className="font-bold text-lg uppercase">Total</span>
            <span className="font-bold">{formatCurrency(totalCents)}</span>
          </div>
          <motion.button
          id="toPayButton"
            onClick={(e) => {
              if (user.data) {
                checkout();
                navigate("/payment");
              } else {
                checkout();
                navigate("/login?returnurl=" + encodeURIComponent("/payment"));
              }
            }}
            className="text-white py-2 px-4 text-lg rounded-full hover:bg-red-500 m-4 bg-black "
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}

          >
            Check out
          </motion.button>
        </div>
      </div>
      <motion.button
        onClick={() => setShowCartItems((prev) => !prev)}
        className="fixed top-0 right-0 mr-4 mt-4 w-12 bg-black p-2 rounded-full text-white hover:bg-red-500"
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 8px rgb(255,255,255)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="black"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <div className="bg-black rounded-full text-xs absolute w-6 h-6 flex justify-center items-center right-0 bottom-0 transform translate-x-2 translate-y-2">
          {cart.length}
        </div>
      </motion.button>
    </section>
  );
}
