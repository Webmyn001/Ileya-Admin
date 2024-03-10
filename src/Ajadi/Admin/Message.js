import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Button from './Button'
import {  Bars,Oval } from 'react-loader-spinner'
function Message() {

 const [Message, setMessage]= useState("")
 const [Loading, setLoading] =useState(false)

 const onChangeMessage =(e) => {
    setMessage(e.target.value)
 }

 const navigate = useNavigate()


 const saveForm = async (e) => {
e.preventDefault();
 axios.post("https://unusual-fawn-costume.cyclic.app/api/msg/add",{Message: Message})
.then((res)=>
{ 
console.log("saved succesfully")
Navigate("/");
window.location.reload() 
alert("Thank you! Response recieved,We will get back to you on Whatsapp.")

}).catch((err)=> {
  console.log(err)
  alert("Unable to submit form, kindly complete the form.")
})

}


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
    }, [saveForm])


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

 

  const info = "gotten message from back end"
  

  return (
    <div className='bg-[#f5f5f5]  text-[#1a456e]   w-full min-h-screen'>
            <h1 className='text-center font-semibold font-montserat bg-gradient-to-r text-white from-[#0b46a1]  to-[#24c4da] mt-2 py-[2px]'>Broadcast Message</h1>

     <div className='flex justify-center items-center flex-col '>
    
     <h3 className='pt-5'>Message</h3>
  <form onSubmit={saveForm} encType="multipart/form-data">
     <textarea placeholder='Send message to users ...'  value={Message} onChange={onChangeMessage} required
        className='w-[350px] h-[200px] border-b-[1px] rounded-md px-3 focus:outline-0 text-[16px] pb-[3.5px] mt-[10px] border-[#24c4da] text-[#404348] '>
    </textarea>

    <div className='flex justify-center items-center mb-2'>
        {Loading ? <div className='pt-5 pb-2'><Oval height="30" width="30" radius="4" color="#0b46a1" ariaLabel="loading"/> </div> : <Button name="Upload"/>}
     </div>
 </form>

     </div>

     <div className=' flex items-center justify-center mt-14 '>
         <button className='border-2 rounded-md w-[350px] h-fit border-b-black'>{Message}</button>
     </div>

       <div className='flex justify-center w-full px-5  mt-[20px]  mb-[10px] items-center'>
             <button onClick={()=>deleteUser(Message._id)} className='p-[3px] bg-[#1a456e]  text-white duration-300 transition-colors focus:outline-0 hover:text-[#1a456e]  hover:border-[1px] hover:bg-white hover:border-red-500 rounded-lg'>delete message</button>
       </div>
           

    </div>
  )
}

export default Message