
/* import formatCurrency from "../util/formatCurrency"; */
import Modal from "react-modal";
/* import { useCart } from "../context/CartContext"; */

Modal.setAppElement("#root");

export default function TeamItemModal({ item, open, closeModal }) {

  return (
    <Modal
      isOpen={open}
      onRequestClose={closeModal}
      style={{
        overlay: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
        },
        content: {
          margin: "10px",
          padding: "0",
          inset: "auto",
          boxShadow:
            "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        },
      }}
    >
      <section className="bg-black text-white font-serif body-font overflow-hidden">
        <div className="container px-4 py-4 mx-auto">
          <div className="mx-auto flex items-center pt-9">
            <img
              alt="ecommerce"
              style={{ width: "15%" }}
              className="w-20px object-cover object-center rounded"
              src={item.image}
            />
            <div className="pl-8 py-2">
              <h2 className="text-xl  title-font  tracking-widest">
                {item.name}
              </h2>
              <h1 className="text-3xl title-font font-medium mb-1">
                {item.professions}
              </h1>
              <h3 className="text-3xl text-center pt-10">Skills</h3>
              <section className="flex justify-around mb-4">
                <div>
                <span className="text-2xl spacing-2" >Technologie :</span>
                {item.technologie&&
             <ul>
              <li>{item.technologie[0]}</li>
              <li> {item.technologie[1]}</li>
              <li> {item.technologie[2]}</li>
              <li> {item.technologie[3]}</li>
              <li> {item.technologie[4]}</li>
             </ul>}
                </div>
              <div>
              <span className="text-2xl ">Frameworks :</span>
              {item.framework&&
              <ul>
                <li>{item.framework[0]}</li>
                <li>{item.framework[1]}</li>
                <li>{item.framework[2]}</li>
                <li>{item.framework[3]}</li>
                <li>{item.framework[4]}</li>
              </ul>
                 }
              </div>
             
              </section>
              
              <div className="flex mb-4">
               
              </div>
              <p className="leading-relaxed max-w-lg"></p>
              <div className="flex mt-4">
               
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </Modal>
  )
}
