import * as React from "react";
import { useState } from "react";
import useUser from "../context/useUser";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const user = useUser();
  const navigate = useNavigate();
  const [name, setName] = useState(user.data.name);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleLogout = async () => {
    await user.logout();
    navigate("/mimi");
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const status = await user.update({
      name,
    });

    if (status === 200) {
      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
      }, 4000);
    }
  };

  return (

    <section className="bg-black flex justify-center">
    <div className="text-2xl my-44  font-serif  bg-white border-gray-300 border-solid-2 p-20 mx-80 rounded-lg">
    <div className="title">
      <h1 className="text-center text-4xl">Das bin Ich</h1>
    </div>

    <form className="update-box" onSubmit={handleUpdate}>
      <div className="input-group">
        <span className="mr-44 ">Name</span>
        <input
          type="text"
          placeholder="Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
          <button className="hover:text-blue-600">{user.isFetching ? "fetching..." : "Updaten"}</button>
          {user.error && <div className="error">{user.error}</div>}
          {showSuccess && <div className="success">Update war erfolgreich</div>}
        </form>
        <button className="hover:text-blue-600" onClick={handleLogout}>
        logout
      </button>
      </div>
      </section>
  

  );
}
