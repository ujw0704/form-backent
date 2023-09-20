import React,{useState, useEffect} from 'react'
import axios from "axios";

function Data() {
    const [data,setData] =useState([])
    useEffect(()=>{
        axios.get("localhost://3000/")
    })
  return (
    <div>
      
    </div>
  )
}

export default Data
