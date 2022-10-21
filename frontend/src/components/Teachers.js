import React from 'react'

function Teachers({item}) {
  return (
   
    <div className="flex flex-row p-10">
        <div className=''>
        <img
            style={{width: "200px" ,height: "200px"}}
            alt="teachers"
            className=" object-cover border-2 rounded-lg object-center w-full h-full block"
            src={item.image}
          />
          <h2 className='text-start text-2xl pt-4'>{item.name}</h2>
        </div>
    </div> 
  
  )
}

export default Teachers