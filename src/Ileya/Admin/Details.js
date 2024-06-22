import axios from 'axios'
import React from 'react'
import {Link, useLocation, useNavigate} from "react-router-dom"

function Details() {

    const location = useLocation()
    const data = location.state
    
    const navigate = useNavigate()

    const deleteUser = async (id) => {
      // i want to do yes or no alert here
      alert("This lecture will be deleted")
      try{
        await axios.delete(`https://ileya-backend.vercel.app/api/form/${id}`);
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
    <div className='bg-[#f5f5f5]  text-[#00008b]   w-full min-h-screen'>
   
    <h1 className='text-center font-semibold font-montserat bg-[#00008b]  text-white mt-2 py-[2px]'>Full Details</h1>
 
  

   <div className='flex justify-center items-center py-5 '>
       <div className='bg-white w-[350px] pb-3  pt-3 rounded-2xl shadow-xl shadow-indigo-800/50 flex flex-col items-center justify-center h-fit'>
        
         <h1 className='pt-2 font-semibold '>Name: </h1>
         <h1 className='px-2'>{data.Name}</h1>

         <h1 className='pt-2 font-semibold '> Address: </h1>
         <h1 className='px-2'>{data.Address}</h1>

         <h1 className='pt-2 font-semibold '>Phone Number:</h1>
         <h1 className='px-2'>{data.PhoneNo}</h1>

       
         <h1 className='pt-2 font-semibold '>Bank Name:</h1>
         <h1 className='px-2'>{data.BankName}</h1>
      

         <h1 className='pt-2 font-semibold '>Account Name:</h1>
         <h1 className='px-2' >{data.AcctName}</h1>

         <h1 className='pt-2 font-semibold '>Account Number:</h1>
         <h1 className='px-2' >{data.AcctNo}</h1>

        
         <h1 className='pt-2 font-semibold '>Next of Keen Contact:</h1>
         <h1 className='px-2'>{data.NOK}</h1>

         <h1 className='pt-2 font-semibold '>Marital Status:</h1>
         <h1 className='px-2'>{data.Marital}</h1>
      


                    {/* buttons */}
         <div className='flex justify-end w-full px-5  mt-[40px]  mb-[10px] items-center'>
             <button onClick={()=>deleteUser(data._id)} className='p-[3px] bg-[#1a456e]  text-white duration-300 transition-colors focus:outline-0 hover:text-[#1a456e]  hover:border-[1px] hover:bg-white hover:border-red-500 rounded-lg'>delete</button>
           </div>
       </div>
</div>
    </div>
  )
}

export default Details