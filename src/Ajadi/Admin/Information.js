import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Button from './Button'
import {  BallTriangle, Bars,Oval } from 'react-loader-spinner'
function Information () {

 const [Loading, setLoading] =useState(false)
 const [Message, setMessage] =useState([])





 const navigate = useNavigate()


 


 const getMessage = async  () => {
    axios.get("https://unusual-fawn-costume.cyclic.app/api/msg/")
    .then(res => {
        console.log(res.data)
      setMessage(res.data)
      setLoading(true)
    }).catch(err => {
      console.log(err)
    })
   }

   useEffect(() => {
    getMessage()
    },[])


 const deleteUser = async (id) => {
    // i want to do yes or no alert here
    alert("This lecture will be deleted")
    try{
      await axios.delete(`https://unusual-fawn-costume.cyclic.app/api/msg/${id}`);
      alert("Data deleted.")
      navigate("/");
      window.location.reload()
        }catch (err) 
    {
    console.log(err);
    alert("Unable to delete, Kindly ensure you are connectecd to the internet")
     }
  }

 

  

  return (
    <div className='bg-[#f5f5f5]  text-[#1a456e]   w-full min-h-screen'>
            <h1 className='text-center font-semibold font-montserat bg-gradient-to-r text-white from-[#0b46a1]  to-[#24c4da] mt-2 py-[2px]'>List Of Broadcast Message</h1>

            {Loading ? <div></div>:<div className="flex min-h-screen justify-center items-center text-xl font-bold"><BallTriangle height="100" width="85" radius="10" color="#1a456e" ariaLabel="loading"/></div>}
    
   { 
     Message.map((info, i) => (
        Message.length === 0 ? 
        <div className={`min-h-screen  flex ${Loading ? "block" : "hidden"} font-montserat text-xl font-semibold justify-center items-center`}> Oops!!! There is No Broadcast at the Moment.</div>  :
        <div key={i}>
     <div className=' flex items-center justify-center mt-14 '>
         <button className='border-2 rounded-md w-[350px] h-fit border-b-black'>{info.Message}</button>
      </div>

       <div className='flex justify-center w-full px-5  mt-[20px]  mb-[10px] items-center'>
             <button onClick={()=>deleteUser(info._id)} className='p-[3px] bg-[#1a456e]  text-white duration-300 transition-colors focus:outline-0 hover:text-[#1a456e]  hover:border-[1px] hover:bg-white hover:border-red-500 rounded-lg'>delete message</button>
       </div>

        </div>

     ))
   } 
     
           

    </div>
  )
}

export default Information