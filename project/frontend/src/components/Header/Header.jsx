import React from 'react'
import { assets } from '../../assets/assets'
import './Header.css'

const Header = () => {
  return (
    <div className ="header h-[34vw] my-[30px] mx-auto bg-no-repeat bg-contain relative">
      <div className="header-contents absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw]  ">
        <h2 className=' font-medium text-white text-[max(4.5vw,22px)]'>Order your favourite food here</h2>
        <p className=' text-white text-[1vw]'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.Our mission is to satisfy your cravings and elevate your dining experience.one delicious at a time</p>
        <button className=' text-[#747474] font-medium py-[1vw] px-[2.3vw] bg-white text-[max(1vw,13px)] rounded-full ' >View Menu</button>
      </div>
    </div>
  )
}

export default Header
