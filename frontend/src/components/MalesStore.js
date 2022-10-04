import StoreItem from "./StoreItem" 
import React,{useState,useEffect} from 'react'
import { fetchMales } from "../util/apiCalls";
/* import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
console.log({API_URL});
axios.defaults.baseURL = API_URL;  */


function MalesStore() {
  const [items, setItems] = useState([]);
  useEffect(()=>{
    const getItems = async ( ) => {
      /* const res = await axios.get('/perfumes/males'); */
      const res = await fetchMales()
       console.log(res.data); 
       setItems(res.data);
    }
    getItems()
  },[])
  console.log(items);
  return (
  
<section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {items.map(item => (
            <StoreItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  
  )
}

export default MalesStore