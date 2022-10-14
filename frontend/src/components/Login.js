import * as React from "react";
import useUser from "../context/useUser";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showRegister, setShowRegister] = React.useState(false);
  const [name, setName] = React.useState("");
  const user = useUser();
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const handleLoginClick = async (e) => {
    e.preventDefault();
    const status = await user.login({
      email: email,
      password: password,
    });

    if (status === 200) {
      const returnurl = params.get("returnurl");

      if (returnurl) {
        navigate(decodeURIComponent(returnurl));
      } else {
        navigate("/mimi");
      }
    }
  };

  const handleRegisterClick = async (e) => {
    e.preventDefault();
    const status = await user.register({
      email: email,
      password: password,
      name: name,
    });

    if (status === 200) {
      navigate("/mimi");
    }
  };

  if (showRegister) {
    return (
      //flex justify-center flex-wrap h-screen mb-20 ml-20 mt-20 h-screen bg-slate-200 text-2xl font-medium
      <div className="bg-black flex justify-center">
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "tween", delay: "0.8" }}
          id="form"
          className="block bg-gray-100 my-20 p-20 rounded-x1 shadow-md shadow-slate-300 "
        >
          <form action="" className="box" onSubmit={handleRegisterClick}>
            <h2 className="text-black text-3x1 font-semibold my-4">Register</h2>
            <hr />

            <div className="input-group  w-1/2 mr-1">
              <div className="label text-sm">Email</div>
              <input
              id="emailRegister"
                type="email"
                className="h-8 w-full rounded-md border border-slate-300 text-sm p1-2 bg-transparent  outline-blue-600 shadow-sm"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group  w-1/2 mr-1">
              <div className="label text-sm">Password</div>
              <input
              id="passwordRegister"
                type="password"
                className="h-8 w-full rounded-md border border-slate-300 text-sm p1-2 bg-transparent  outline-blue-600 shadow-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="input-group w-1/2 mr-1">
              <div className="label text-sm">Name</div>
              <input
              id="nameRegister"
                style={{ backgroundColor: "#E8F0FE" }}
                type="text"
                className="h-8 w-full rounded-md border border-slate-300 text-sm p1-2   outline-blue-600 shadow-sm"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div
            id="showLoginLink"
              className="toggle-register"
              onClick={() => setShowRegister(false)}
            >
              <p className="text-xs my-2">I have an Account</p>
            </div>

            <motion.button
            id="sendRegisterLink"
              type="submit "
              className="bg-black w-full h-10 cursor-pointer text-white rounded-md hover:bg-red-700 rounded-full hover:text-hover:outline-offset"
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgb(2,2,2)" }}
            >
              {user.isFetching ? "fetching..." : "Send"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-black flex justify-center">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "tween", delay: "0.8" }}
        id="form"
        className="block bg-gray-100 my-24 p-20 rounded-x1 shadow-md shadow-slate-300"
      >
        <form action="" className="box" onSubmit={handleLoginClick}>
          <h2 className="text-black text-3x1 font-semibold my-4">Login</h2>
          <hr />

          <div className="input-group  w-1/2 mr-1">
            <div className="label">Email</div>
            <input
            id="emailLogin"
              type="email"
              className="h-8 w-full rounded-md border border-slate-300 text-sm p1-2 bg-transparent  outline-blue-600 shadow-sm"
              placeholder="Email"
            /*   value={email} */
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group  w-1/2 mr-1">
            <div className="label">Password</div>
            <input
            id="passwordLogin"
              type="password"
              className="h-8 w-full rounded-md border border-slate-300 text-sm p1-2 bg-transparent  outline-blue-600 shadow-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div
            className="toggle-register"
            onClick={() => setShowRegister(true)}
          >
            <p  id="showRegisterLink" className="text-sm my-2">I don`t have an Account</p>
          </div>

          <motion.button
          id="sendLogin"
            type="submit"
            className="bg-black w-full h-10 cursor-pointer text-white rounded-md hover:bg-red-700 rounded-full hover:text-hover:outline-offset"
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgb(2,2,2)" }}
          >
            {user.isFetching ? "fetching..." : "Send"}
          </motion.button>

          {user.error && <div className="error">{user.error}</div>}
        </form>
      </motion.div>
    </div>
  );
}
