import { useState } from 'react'
import React from 'react'
import './logInPopUp.css'
import { RxCross2 } from "react-icons/rx";
//import {assets} from '../../assets/assets'
import {jsxDEV as _jsxDEV, Fragment as _Fragment} from "preact/jsx-dev-runtime";
const LogInPopUp = ({setShowLogin}) => {
    const[CurrState,setCurrState]=useState("Sign Up")

    
  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
            <div className='login-popup-title'>
                <h2>{CurrState}</h2>
                <div onClick={()=>setShowLogin(false)} className='cross' ><RxCross2 /></div>
            </div>
           <div className='login-popup-inputs'>
            {CurrState==="Login"?<></>:<input type='text' placeholder='Your name' required></input>}
            
            <input type='email' placeholder='Your email' required></input>
            <input type='password' placeholder='Password' required></input>
           </div>
           <div className='create-acc'>
            <button> {CurrState==="Sign Up"?"Create account":"Login"}</button>
            <div className='login-pop-up-condition'>
              <label>
                <input type='checkbox' required></input>
                By continuing,i agree to the terms of use & privacy policy. 
              </label>
              {CurrState==='Sign Up'?<p>Already have an account? <span onClick={()=>setCurrState("Login")} className='log'>Login here</span></p>:
              <p>Create a new account?<span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>}
            </div>
           </div>
        </form>
      
    </div>
  )
}

export default LogInPopUp
