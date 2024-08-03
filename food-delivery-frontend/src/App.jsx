import React from 'react'
import NavBar from './components/Nav Bar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'
import { useState,useEffect } from 'react'
import axios from 'axios'
const App = () => {
  const [showLogin,setShowLogin]=useState(false);
  const [User,setUser]=useState([])
  useEffect(()=>{
    async function getUsers() {
      try{
        const users=await axios.get("http://127.0.0.1:8000/base/user/")
        console.log(users.data)
        setUser([users.data])
      }catch(error){
        console.log(error)
      }
      finally{
        console.log("done")
      }
    }
    getUsers()
  },[])
  return (
    <>
      {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <NavBar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App



