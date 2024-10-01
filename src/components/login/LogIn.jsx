import React, { useState } from 'react'
import './LogIn.css'
import { assets } from '../../assets/assets'

const LogIn = ({setShowLogin}) => {

    const[currState,setCurrState]=useState("LogIn")

  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="LogIn"?<></>:<input type="text" placeholder='Your Name' required />}
                <input type="email" placeholder='Your Email' required />
                <input type="password" placeholder='Enter Password' required />
            </div>
            <button>{currState==="SignUp"?"Create account":"LogIn"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing, I agree to the terms of use & Privacy Policy.</p>
            </div>
            {currState==="LogIn"
            ?<p>Create a New account? <span onClick={()=>setCurrState("SignUp")}>Click Here</span></p>
            :<p>Already have an account? <span onClick={()=>setCurrState("LogIn")}>LogIn Here</span></p>
            }
            
            
        </form>
    </div>
  )
}

export default LogIn