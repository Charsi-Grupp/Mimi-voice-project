import userUser from "../context/useUser";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";
Modal.setAppElement("#root");

function Completion() {
  const user = userUser();
  /* const [name, setName] = useState(user.data.name); */
  const navigate = useNavigate();

  const handleLogout = async () => {
    await user.logout();
    navigate("/team");
  };
  return (
    <section className="bg-black text-white flex justify-center font-serif">
      <motion.div
        className="my-36 p-2"
        initial={{ scale: 0.2 }}
        animate={{ scale: 1.5 }}
        transition={{ duration: "0.5" }}
      >
        <h1 className="font-medium text-7xl  py-8">Thank you!🎉</h1>
        <h2 className="text-3xl py-8">Your payment was succesful!</h2>
        <motion.button
          className="border-1 rounded-full bg-white w-36 h-8 m-4"
          whileHover={{ scale: 1.3, boxShadow: "0px 0px 8px rgb(255,255,255)" }}
        >
          <Link className="text-black font-bold" to="/categories/">
            Keep shopping
          </Link>
        </motion.button>
        <motion.button
          className="border-1 rounded-full bg-white w-36 h-8 m-4 text-black font-bold"
          onClick={handleLogout}
          whileHover={{ scale: 1.3, boxShadow: "0px 0px 8px rgb(255,255,255)" }}
        >
          logout
        </motion.button>
      </motion.div>
    </section>
  );
}

export default Completion;
