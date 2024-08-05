import React from "react";
import BarChart from './BarChart'
import Piechart from './PieChart'
import axios from 'axios'
import { useState,useEffect } from "react";

const Dashboard=()=>{
const [data,setData]=useState({earnings:[],spendings:[],categories:[]})

useEffect(()=>{
      
       const FetchData=async()=>{
         const res=await axios.get('/api/expenses',
            {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
         )
         setData(res.data)
       }
       FetchData()


},[])

return (

    <div className="Dashboard">
        <BarChart earnings={data.earnings} spendings={data.spendings}></BarChart>

         <Piechart categories={data.categories}></Piechart>
    </div>
)
} 


export default Dashboard