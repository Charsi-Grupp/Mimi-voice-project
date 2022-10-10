import userUser from "../context/useUser"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");

function Completion() {
  const user = userUser()
  /* const [name, setName] = useState(user.data.name); */
  const navigate = useNavigate();

  const handleLogout = async () => {
    await user.logout();
    navigate("/team");
  };
  return (
    <section className="bg-black text-white flex justify-center font-serif">
      <div className="my-36 p-2">
         <h1 className="font-medium text-7xl  py-8">Thank you!🎉</h1>
             <h2 className="text-3xl py-8">Your payment was succesful!</h2>
             <button className="border-1 rounded-full bg-white w-36 h-8 m-4"><Link className="text-black font-bold" to="/categories/" >Keep shopping</Link></button>
             <button className="border-1 rounded-full bg-white w-36 h-8 m-4 text-black font-bold" onClick={handleLogout}>
        logout
      </button>
         </div>
     
    </section>
  ) 
}

export default Completion;
