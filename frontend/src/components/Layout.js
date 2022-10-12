import useUser from "../context/useUser";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Layout(props) {
  const user = useUser();
  const navigate = useNavigate();
  const Logout = async () => {
    await user.logout();
    navigate("/mimi");
  };
  /*  const accountLink = user.data ? "/account" : "/login"; */
  const linkLable = user.data ? "Logout" : "Login";
  return (
    <div className="h-24 relative">
      <header className="flex justify-around font-serif ">
        <div className="flex">
          <div className="absolute left-8 top-0">
            <img
              className="w-24 "
              src="https://media0.giphy.com/media/Quso5mitLwTArJkLFC/200w.gif?cid=82a1493bsse48fhqo3d4xe7xmbdbmkfhbnqm6fazlc8bhz00&rid=200w.gif&ct=g"
              alt=""
            />
          </div>
          <button className="border-1 rounded-full bg-black w-32 h-8 m-8 ">
            {" "}
            <h1 className="text-white">Mimi</h1>
          </button>
        </div>
        <motion.button
          className="text-white border-1 rounded-full bg-black w-32 h-8 m-8 "
          whileHover={{ scale: 1.3, boxShadow: "0px 0px 8px rgb(2,2,2)" }}
          onClick={(e) => {
            if (user.data) {
              Logout();
            } else {
              navigate("/login");
            }
          }}
        >
          {linkLable}
        </motion.button>
      </header>
      <main>{props.children}</main>
    </div>
  );
}
