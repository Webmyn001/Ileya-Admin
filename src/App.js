import React from 'react'
import {BrowserRouter as Router , Route, Routes, } from "react-router-dom";
import Contact from './Ajadi/Client/Contact'
import Home from './Ajadi/Client/Home'
import Footer from './Ajadi/Client/Footer/Footer'
import Navbar from './Ajadi/Admin/header/Navbar'
import Admin from './Ajadi/Admin/Admin';
import Details from './Ajadi/Admin/Details';
import IDcardAdmin from './Ajadi/Client/IDcardAdmin';
import Message from './Ajadi/Admin/Message';




function App() {

 
  return (
    <div className='font-josefins bg-[#f5f5f5]'>
       <Router>
            <Navbar/>
       
         <Routes>
               {/* Admin */}
               <Route path = "/" exact element= {<Admin/>}></Route>
               <Route path = "/details/:id" exact element= {<Details/>}></Route>
               <Route path = "/message" exact element= {<Message/>}></Route>


              







               
         </Routes>
       <Footer/>
         </Router> 

    </div>
  )
}

export default App