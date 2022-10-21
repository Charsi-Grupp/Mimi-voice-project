import React, { useState, useEffect } from "react";
import { fetchTeachers} from "../util/apiCalls";
import { motion } from "framer-motion";
import Teachers from "../components/Teachers"

function Thank() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      const res = await fetchTeachers();
      console.log(res.data);
      setItems(res.data);
    };
    getItems();
  }, []);
  return (
    <div className="bg-black text-white font-serif">
    
    <motion.h1
      className="text-center text-7xl font-serif py-20"
      initial={{ scale: 0.2 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: "1",
      }}
    >
      Gratitude 
    </motion.h1>
    <section>
      <h2 className="text-5xl text-center py-4">Jobcenter</h2>
      <div>
      <ul  className="flex flex-row justify-around py-24 p-12 pb-44 text-2xl">
        <li>Frau Ute Velcovsky</li>
        <li>Herr Matthias Weichel</li>
        <li>Frau Spendrin</li>
        <li>Frau Elham jobcenter</li>
      </ul>
      </div>
     
    </section>
    <section>
      <h3 className="text-5xl text-center pt-12 ">DCI</h3>
      <div className="container px-24 py-12 mx-auto">
        <div className="flex flex-wrap -m-4">
          {items.map((item) => (
            <Teachers key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
   <section className="text-center py-44">
    <h3 className="text-xl" >SPECIAL THANKS TO</h3>
    <motion.h3
      className="text-center text-7xl font-serif py-24"
      initial={{ scale: 0.2 }}
      animate={{ scale: 3 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: "36",
        duration: 36
      }}
    >
      YouTube
    </motion.h3>
   </section>
  </div>
  )
}

export default Thank