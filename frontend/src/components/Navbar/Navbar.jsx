import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'

const Navbar = () => {


    // Now we making use of underline to set menu States
    // Now we will ad  Dynamic Class Name
    // For active classname we will add css

    const[menu,setMenu] = useState('contact-us')
  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo} alt="" />

      <ul className="navbar-menu">
        <li onClick= {()=>{setMenu("home")}}className={menu === "home" ? "active":""}>Home</li>
        <li onClick= {()=>{setMenu("menu")}}className={menu === "menu" ? "active":""}>Menu</li>
        <li onClick= {()=>{setMenu("mobile-app")}}className={menu === "mobile-app" ? "active":""}>Mobile-App</li>
        <li onClick= {()=>{setMenu("contact-us")}}className={menu === "contact-us" ? "active":""}>Contact us</li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
        </div>
        <button>Signin</button>
      </div>
    </div>
  )
}

export default Navbar
