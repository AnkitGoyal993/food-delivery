import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './LoginPopup.css'

const LoginPopup = ({setShowLogin}) => {
    const [currState,setCurrState] = useState("Sign Up")
  return (
    <div className='login-popup fixed  z-[1] w-full h-full bg-[#00000090] grid'>
      <form className='login-popup-container place-self-center w-[max(23vw,330px)] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] text-[14px] rounded-lg' >
        <div className="login-popup-title flex justify-between items-center text-black">
            <h2 className=' text-[max(2vw,22px)] '>{currState}</h2>
            <img className=' w-4 cursor-pointer' onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs flex flex-col gap-5">
            {
                currState==='Login'?<></>:<><input className=' outline-none border border-[#c9c9c9] p-[10px] rounded'  type="text" placeholder='Your name' required /></>
            }
             
            <input className=' outline-none border border-[#c9c9c9] p-[10px] rounded' type="email" placeholder='Your email' required />
            <input className=' outline-none border border-[#c9c9c9] p-[10px] rounded' type="password" placeholder='Password' required />
        </div>
        <button className=' border-none p-[10px] rounded text-white bg-[#ff6347] text-[15px] ' >{currState==='Sign Up'?"Create account":"Login"}</button>
        <div className="login-popup-condition flex items-start gap-[8px] -mt-4 ">
            <input className='mt-[5px]' type="checkbox" required />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {
            currState==='Login'?
            <p>Create a new account? <span className=' text-[#ff6347] font-medium cursor-pointer' onClick={() => setCurrState("Sign Up")}>Click here</span></p>
            :
        <p>Already have an account? <span className=' text-[#ff6347] font-medium cursor-pointer' onClick={() => setCurrState("Login")}>Login here</  span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopup
