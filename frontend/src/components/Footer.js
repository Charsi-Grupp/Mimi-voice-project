import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {
  return (
    <div className="flex justify-around font-serif h-16 ">
      <motion.button
        className="border-1 rounded-full bg-black w-48 h-8 m-4"
        whileHover={{ scale: 1.3, boxShadow: "0px 0px 8px rgb(5,5,5)" }}
      >
        <Link to="/" className="text-white">
          Project Introduction
        </Link>
      </motion.button>
      <motion.button
        className="border-1 rounded-full bg-black w-48 h-8 m-4"
        whileHover={{ scale: 1.3, boxShadow: "0px 0px 8px rgb(5,5,5)" }}
      >
        <Link className="text-white" to="/team/">
          Developers Team
        </Link>
      </motion.button>
    </div>
  );
}

export default Footer;
