
/* import formatCurrency from "../util/formatCurrency"; */
import Modal from "react-modal";
/* import { useCart } from "../context/CartContext"; */
import { FaGithub} from 'react-icons/fa';
import {ImLinkedin} from 'react-icons/im';
/* import { motion } from "framer-motion";
import {Link} from "react-router-dom"; */

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
        <div className="container flex-col px-4 py-4 mx-auto">
          <div className="mx-auto flex items-center pt-9">
            <img
              alt="ecommerce"
              style={{ width: "25%" }}
              className="w-20px object-cover object-center rounded"
              src={item.image}
            />
            <div className="pl-8 py-2">
              <h1 className="text-3xl  title-font  tracking-widest">
                {item.name}
              </h1>
              <h2 className="text-2xl title-font font-medium mb-1">
                {item.professions}
              </h2>
              <h3 className="text-3xl py-5">Skills</h3>
              <section className="flex mb-4">
                <div className="mr-9">
                <span className="text-2xl" >Technologie :</span>
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
             
            </div>
            <div>
              <h2 className="text-center text-2xl">About me:</h2>
            <p>
              {item.introducing}
            </p>
            <div className="flex justify-around p-9">
            {item.link.linkedin&&
              <button ><a  href={item.link.linkedin} className="text-white" ><ImLinkedin size={30}/></a></button>}
              <button ><a  href={item.link.github} className="text-white" ><FaGithub size={30}/></a></button>
            </div>
      {/*       <motion.button
        id="backTo"
          className="border-1 rounded-full bg-white w-36 h-8 m-4 text-black font-bold"
          whileHover={{ scale: 1.3, boxShadow: "0px 0px 8px rgb(255,255,255)" }}
        >
           <Link id="keepShopping" className="text-black font-bold" to="//">
            Back
          </Link>
        </motion.button> */}
          </div>
          </div>
          
        </div>
      </section>
    </Modal>
  )
}
