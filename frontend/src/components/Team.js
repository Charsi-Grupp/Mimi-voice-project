import React,{useState,useEffect} from 'react'
import {fetchTeam} from '../util/apiCalls'
import TeamMembers from './TeamMembers';

function Team() {
  const [items, setItems] = useState([]);
  useEffect(()=>{
    const getItems = async ( ) => {
      const res = await fetchTeam()
       console.log(res.data); 
       setItems(res.data);
    }
    getItems()
  },[])
  console.log(items);
  return (
    <div className='bg-black text-white'>
      <h1 className='text-center text-5xl font-serif pt-14'>Project Developers</h1>
      <section className="text-gray-500">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {items.map(item => (
            <TeamMembers key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default Team