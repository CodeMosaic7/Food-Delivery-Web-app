import React, { useState } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';
import {assets} from '../../assets/assets'
const NavBar = ({setShowLogin}) => {
  const[menu,setMenu]=useState("HOME")
  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
      <ul className="navbar-menu">
        {/* className will depend on the current status of the listitem when clicked*/}
        <Link to='/'><li onClick={()=>setMenu("HOME")} className={menu==="HOME"?"ACTIVE":""}>HOME</li></Link>
        <li onClick={()=>setMenu("MENU")}className={menu==="MENU"?"ACTIVE":""}>MENU</li>
        <li onClick={()=>setMenu("MOBILE-APP")}className={menu==="MOBILE-APP"?"ACTIVE":""}>MOBILE-APP</li>
        <li onClick={()=>setMenu("CONTACT-US")}className={menu==="CONTACT-US"?"ACTIVE":""}>CONTACT-US</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className='navbar-search-icon'>
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className='dot'></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>SIGN IN</button>
      </div>

    </div>
  )
}

export default NavBar
