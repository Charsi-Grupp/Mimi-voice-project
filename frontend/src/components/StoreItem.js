import { useState } from "react";
import formatCurrency from "../util/formatCurrency";
import StoreItemModal from "./StoreItemModal";

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
      <div className="lg:w-1/4 w-1/2 p-3 ">
        <section className="bg-white text-black rounded p-6 h-80">
        <div className="block relative h-24  overflow-hidden">
          <img
            alt="e-commerce"
            className=" object-cover object-center w-50% h-full block "
            src={item.image}
          />
        </div>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <h3 className=" text-lg text-red-500 tracking-widest title-font uppercase mb-1">
              {item.brand}
            </h3>
            <h2 className=" title-font text-lg font-medium">
              {item.name}
            </h2>
            <p className="mt-1">{formatCurrency(item.price.full)}</p>
      </div>
      <button
            onClick={openModal}
            className="text-white py-2 px-4 text-lg rounded-full hover:bg-red-500 m-4 bg-black "
          >
            Details
          </button>
      </div>
        </section>
       
         
        </div>
      <StoreItemModal item={item} open={open} closeModal={closeModal} />
    </>
  );
}
