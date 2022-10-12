import StoreItem from "./StoreItem";
import React, { useState, useEffect } from "react";
import { fetchFeMales } from "../util/apiCalls";
import { motion } from "framer-motion";
/* import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
console.log({API_URL});
axios.defaults.baseURL = API_URL;  */

function FemalesStore() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      /* const res = await axios.get('/perfumes/females'); */
      const res = await fetchFeMales();
      console.log(res.data);
      setItems(res.data);
    };
    getItems();
  }, []);
  console.log(items);
  return (
    <section className="bg-black text-white body-font">
      <div className="container px-5 py-24 mx-auto">
        <motion.h1
          className="text-4xl font-serif text-center pb-16"
          initial={{ scale: 0.2 }}
          animate={{ scale: 1.2 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: "1",
          }}
        >
          Female Perfume
        </motion.h1>
        <div className="flex flex-wrap -m-4">
          {items.map((item) => (
            <StoreItem key={item.id} item={item} />
          ))}
        </div>
        {/*   <button className="w-52 " >
        <img src="https://i.pinimg.com/originals/f6/6a/b5/f66ab5d714c2dde5c042be0c763a76a8.gif" alt="" />
        </button> */}
      </div>
    </section>
  );
}

export default FemalesStore;
