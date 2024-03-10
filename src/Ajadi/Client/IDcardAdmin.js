import React, { useEffect, useState } from 'react'
import {Link, Navigate, useLocation} from "react-router-dom"

import AOS from "aos";
import "aos/dist/aos.css";

function IDcardAdmin() {

    const location = useLocation()
    const data = location.state

    useEffect(()=> {
      AOS.init({duration:2000})
  
  },[])
    

  return (
    <div  className='bg-[#f5f5f5] text-gray-900 min-h-screen w-full '>

              <h1 className='pt-5 text-center'>Headings here i dont know what to write here</h1>   

    <div className='flex justify-center min-h-screen items-center '>
        {/* ID CARD */}
        <div className='border-transparent border-[0.2px] 
        bg-gradient-to-r text-white from-[#1a456e]  to-[#a4cb3c]
       rounded-2xl shadow-xl shadow-indigo-800/50  w-[350px] pb-4' data-aos="zoom-in">
            <h1 className='text-center border-b border-white'>Ajadi Muslim Community Youth Forum</h1>
       
    
     
       
        <div className="flex gap-x-6 items-center pt-1 ">

        {/* image */}
        <div className='pl-3'>
       <img src={data.Image[0].url} alt='#' className='w-[100px] h-[100px] rounded-md object-cover'/>
       </div>
             {/* text */}
             <div className='max-w-[250px] px-1 text-xs'>
             <h2 className='pt-2 font-bold text-[14px]'>{data.Name}</h2>
             <h2>Occupation: {data.Occupation}</h2>
             <h2>Qualification: {data.Qualification}</h2>
             <h2>Status: {data.Status}</h2>
             <h2>Address: {data.Address}</h2>
             <h2>Telephone No: {data.PhoneNo}</h2>

             </div>
       </div> 
       
       
       
    
            
        </div>
   </div>

    </div>
  )
}

export default IDcardAdmin