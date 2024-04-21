import React from 'react'
import './Loginpopup.css'
import { useState } from 'react'
import { assets } from '../../assets/assets'

const Loginpopup = ({setShowLogin}) => {

    const[currState,setCurrState] = useState("Login")

  return (
    <div className='LoginPopup'>
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>{setShowLogin(false)}} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">

            {currState === "Login" ? <></> : 
            <input type="text" placeholder='Your Name' required/>}
            <input type="email" placeholder='Your Email' required/>
            <input type="password" placeholder='Password' required/>
        </div>
        <button>{currState === "Login" ? "Create Account" : "Login"}</button>

        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>Agree Terms and Conditions</p>
        </div>

        {
            currState === "Login" ? <p>Create a New Account? <span onClick={()=>setCurrState("Sign Up")}> Click here</span> </p> :
            <p>Already have an Account <span onClick={()=>setCurrState("Login")} > Login here</span> </p>

        }

        
        
      </form>
    </div>
  )
}

export default Loginpopup
