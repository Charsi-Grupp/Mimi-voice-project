import React, { useState, useEffect } from "react";
import { fetchTeam } from "../util/apiCalls";
import TeamMembers from "./TeamMembers";
import { motion } from "framer-motion";

function Team() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      const res = await fetchTeam();
      console.log(res.data);
      setItems(res.data);
    };
    getItems();
  }, []);
  console.log(items);
  return (
    <div className="bg-black text-white">
      <motion.h1
        className="text-center text-5xl font-serif pt-14"
        initial={{ scale: 0.2 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: "1",
        }}
      >
        Project Developers
      </motion.h1>
      <section>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {items.map((item) => (
              <TeamMembers key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
