import { useState } from "react"
import TeamItemsModal from "./TeamItemsModal"

export default function TeamsMembers({ item }) {
  const [open, setOpen] = useState(false)

  function openModal() {
    setOpen(true)
  }

  function closeModal() {
    setOpen(false)
  }

  return (
    <>
      <div className="lg:w-1/3 w-1/2 p-3">
        <div className="block relative h-24 rounded overflow-hidden">
          <img
          style={{width: "30%"}}
            alt="e-commerce"
            className=" object-cover border-2 rounded-lg object-center w-full h-full block"
            src={item.image}
          />
        </div>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <span className="text-gray-500">Name</span>
            <h3 className="text-s tracking-widest title-font uppercase mb-1">
              {item.name}
            </h3>
          <span className="text-gray-500 text-s">Profession</span>
           <h3>{item.professions}</h3>
          </div>
          <button
            onClick={openModal}
            className="border-1 rounded-full bg-white w-44 h-8 m-4 text-black "
          >
            Info
          </button>
        </div>
      </div>
      <TeamItemsModal item={item} open={open} closeModal={closeModal} />
    </>
  )
}
