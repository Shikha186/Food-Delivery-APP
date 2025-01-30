import {useState} from 'preact/devtools'
import React from 'react'
//import {assets} from '../../assets/assets'
import {jsxDEV as _jsxDEV, Fragment as _Fragment} from "preact/jsx-dev-runtime";
const LogInPopUp = ({setShowLogin}) => {
    const[CurrState,setCurrState]=useState("Sign Up")

    
  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
            <div className='login-popup-title'>
                <h2>{CurrState}</h2>
                <img onClick={()=>setShowLogin(false)} src='assets.cross_icon'></img>
            </div>
           <div className='login-popup-inputs'>
            {CurrState==="Login"?<></>:<input type='text' placeholder='Your name' required></input>}
            
            <input type='email' placeholder='Your email' required></input>
            <input type='password' placeholder='Password' required></input>
           </div>
           <div>
            <button> {CurrState==="Sign Up"?"Create accouunt":"Login"}</button>
          <div className='login-pop-up-condition'>
            <label>
                <input type='checkbox' required></input>
                By continuing,i agree to the terms of use & privacy policy. 
            </label>
{CurrState==='Sign Up'?<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>:
<p>Create a new account?<span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>}
          </div>
           </div>
        </form>
      
    </div>
  )
}

export default LogInPopUp
