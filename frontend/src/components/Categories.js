import React from "react";
import { Link } from "react-router-dom";
function Categories() {
  return (

    //  h-screen  mx-4 bg-gray-100  border-2 border-gray-400 border-solid rounded-sm
    <div className="flex bg-black justify-around ">
    <div className="flex-col mx-80 my-36 ">
      <img
        className="border rounded-full w-44 object-cover object-center h-72"
        src="https://as1.ftcdn.net/v2/jpg/02/08/75/06/1000_F_208750607_Rno6RKDXL5ZkMNMyhUy1gTtbrB4bYi4q.jpg"
        alt="pic" />
      <button className="border-1 bg-white rounded-full w-32 hover:bg-red-500 mt-5">
        <Link
          className="  font-extrabold font-serif  text-xl text-black hover:text-white"
          to="/males/"
        >
          Male
        </Link>
      </button>
      </div>
      <div className="flex-col my-40">
      <img
      className="border rounded-full"
        style={{ width: "31%" }}
        src="https://assets.zeezest.com/web_stories/PROD_Scents%20Of%20Summer%20V%20banner_1653990942245_thumb_500.jpeg"
        alt=""
      />
      <button className="bg-white border-1 rounded-full w-32 hover:bg-red-500 mt-5">
        <Link
          className="  font-extrabold  font-serif text-xl text-black hover:text-white "
          to="/females/"
        >
          Female
        </Link>
      </button>
      </div>
    </div>
  );
}

export default Categories;

  
