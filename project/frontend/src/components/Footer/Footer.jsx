import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer mt-[100px] text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-[20px] py-[20px] px-[8vw] pt-[80px] ' id='footer'>
      <div className="footer-content w-full flex flex-col gap-[35px] md:grid grid-cols-[2fr_1fr_1fr] md:gap-[80px] ">
        <div className="footer-content-left flex flex-col items-start gap-5">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias dolorem laboriosam maxime distinctio et! Impedit non nihil dicta labore suscipit officia blanditiis similique distinctio, architecto eveniet, reiciendis, magnam sed deserunt.</p>
            <div className="footer-social-icon flex   ">
                <img className=" w-10 mr-[15px]"  src={assets.facebook_icon} alt="" />
                <img className=" w-10 mr-[15px]"  src={assets.twitter_icon} alt="" />
                <img  className=" w-10 mr-[15px]" src={assets.linkedin_icon} alt="" />
            </div >
        </div>
        <div className="footer-content-center flex flex-col items-start gap-5">
            <h2 className=' text-white text-[max(26px,2vw)] font-medium '>COMANY</h2>
            <ul>
                <li className=' list-none mb-3' >Home</li>
                <li className=' list-none mb-3' >About us</li>
                <li className=' list-none mb-3' >Delivery</li>
                <li className=' list-none mb-3' >Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right flex flex-col items-start gap-5">
            <h2 className=' text-white text-[max(26px,2vw)] font-medium '>GET IN TOUCH</h2>
            <ul>
                <li className=' list-none mb-3' >+1-212-456-7890</li>
                <li className=' list-none mb-3' >contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr className=' w-full h-[2px] my-[20px] bg-gray-400 border-none ' />
      <p className=' text-center'>Copyright 2024 &#169; Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
