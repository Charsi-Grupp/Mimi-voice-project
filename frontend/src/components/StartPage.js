import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function StartPage() {
  return (
    <div className="bg-black text-white font-serif">
      <div
        className="flex-col text-center p-16  mx-96" /* className=" flex justify-center mx-4 bg-gray-100 border-2 border-gray-400 border-solid rounded-sm " */
      >
        <h1 className="text-5xl m-8">Welcome to ATROPIA!</h1>
        <span className="text-xl">
          Mimi, your intelligent voice assistent, is ready to support you!
        </span>
        <span className="text-xl">
          Please click the voice buttom to start your shopping
        </span>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: "0.8" }}
        >
          <img
            className="mx-36 mt-12 border rounded-3xl"
            style={{ width: "55%" }}
            src="https://i.pinimg.com/originals/63/71/b9/6371b96dfb59740b017ffd3518060c66.jpg"
            alt=""
          />
        </motion.div>
        <motion.button
          className="bg-white w-32 m-12 hover:text-white  rounded-full  hover:bg-red-500"
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgb(255,255,255)" }}
        >
          <Link
          id="perfumesLink"
            className=" font-serif text-2xl hover:text-white text-black"
            to="/categories/"
          >
            Perfumes
          </Link>
        </motion.button>
      </div>
    </div>
  );
}

export default StartPage;
