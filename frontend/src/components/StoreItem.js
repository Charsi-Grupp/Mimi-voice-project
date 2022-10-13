import { useState } from "react";
import formatCurrency from "../util/formatCurrency";
import StoreItemModal from "./StoreItemModal";
import { motion } from "framer-motion";

export default function StoreItem({ item }) {
  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  return (
    <>
      <div className="lg:w-1/4 w-1/2 p-3 text-white">
        <div className="block relative h-24 rounded overflow-hidden">
          <img
            alt="e-commerce"
            className=" object-cover object-center w-70% h-full block"
            src={item.image}
          />
        </div>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <h3 className="text-red-400  font-bold text-l tracking-widest title-font uppercase mb-1">
              {item.brand}
            </h3>
            <h2 className=" title-font text-l font-medium">{item.name}</h2>
            <p className="mt-1">{formatCurrency(item.price.full)}</p>
            <motion.button
              onClick={openModal}
              className="text-black py-2 px-4 text-lg rounded-full hover:bg-red-500 m-4 bg-white "
              whileHover={{
                scale: 1.3,
                boxShadow: "0px 0px 8px rgb(254,255,255)",
              }}
            >
              Details
            </motion.button>
          </div>
        </div>
      </div>
      <StoreItemModal item={item} open={open} closeModal={closeModal} />
    </>
  );
}
