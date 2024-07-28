import React, { useState } from 'react'
import './NavBar.css'
import {assets} from '../../assets/assets'
const NavBar = () => {
  const[menu,setMenu]=useState("HOME")
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className='logo' />
      <ul className="navbar-menu">
        {/* className will depend on the current status of the listitem when clicked*/}
        <li onClick={()=>setMenu("HOME")} className={menu==="HOME"?"ACTIVE":""}>HOME</li>
        <li onClick={()=>setMenu("MENU")}className={menu==="MENU"?"ACTIVE":""}>MENU</li>
        <li onClick={()=>setMenu("MOBILE-APP")}className={menu==="MOBILE-APP"?"ACTIVE":""}>MOBILE-APP</li>
        <li onClick={()=>setMenu("CONTACT-US")}className={menu==="CONTACT-US"?"ACTIVE":""}>CONTACT-US</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="" />
          <div className='dot'></div>
        </div>
        <button>SIGN IN</button>
      </div>

    </div>
  )
}

export default NavBar
