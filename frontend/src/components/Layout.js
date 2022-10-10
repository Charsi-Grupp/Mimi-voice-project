import { Link } from "react-router-dom";
import useUser from "../context/useUser";
/* import { FcRight } from "react-icons/fc";
import { MdSettingsVoice } from "react-icons/md"; */

export default function Layout(props) {
  const user = useUser();

  const accountLink = user.data ? "/account" : "/login";
  const linkLable = user.data ? user.data.name : "Login"
  return (
    <div className="h-24">
      <header className="flex justify-around font-sans ">
        <button className="border-1 rounded-full bg-black w-32 h-8 m-8"> <h1 className="text-xl text-white" >{/*  <MdSettingsVoice /> */}Mimi{/*  <FcRight /> */}</h1></button>
     {/*  className="bg-withe py-4 px-16 border-blue-400 hover:bg-blue-200 border-4 rounded-full" */}
     
   {/*    className="font-extrabold font-sans text-xl text-blue-400 hover:text-white" */}
     {/*  bg-withe py-4 px-16 border-blue-400 border-4 hover:bg-blue-200 rounded-full */}
       <button className="text-white border-1 rounded-full bg-black w-32 h-8 m-8">{/* {" "}  */}<Link to={accountLink}>
         {linkLable}
        </Link></button>
      </header>
      <main>{props.children}</main>
    </div>
  );
}
