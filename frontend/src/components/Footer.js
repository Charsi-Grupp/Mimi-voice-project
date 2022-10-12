import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className="flex justify-around font-serif h-16 ">
       <button  className="border-1 rounded-full bg-black w-48 h-8 m-4"><Link to="/" className='text-white'>Project Introduction</Link></button>
      <button className="border-1 rounded-full bg-black w-48 h-8 m-4"><Link className='text-white' to="/team/">Developers Team</Link></button>
    </div>
  )
}

export default Footer