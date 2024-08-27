import React, { useState } from 'react'
import { assets } from '../../assets/assets'

function Navbar() {
    const [menu,setMenu] = useState('home');
  return (
    <div className='navbar py-5 flex justify-between items-center'>
      <img src={assets.logo} alt="" className='logo w-[150px]' />
      <ul className='navbar-menu flex list-none gap-5 text-[#49557e] text-[18px]'>
        <li onClick={()=>setMenu("home")} className={menu === "home"?" cursor-pointer pb-[2px] border-b-2 border-b-[#ff6349]":" cursor-pointer"}>home</li>
        <li onClick={()=>setMenu("menu")} className={menu === "menu"?" cursor-pointer pb-[2px] border-b-2 border-b-[#ff6349]":" cursor-pointer"}>menu</li>
        <li onClick={()=>setMenu("mobile-app")} className={menu === "mobile-app"?" cursor-pointer pb-[2px] border-b-2 border-b-[#ff6349]":" cursor-pointer"}>mobile-app</li>
        <li onClick={()=>setMenu("contact-us")}  className={menu === "contact-us"?" cursor-pointer pb-[2px] border-b-2 border-b-[#ff6349]":" cursor-pointer"}>contact-us</li>
      </ul>
      <div className="navbar-right flex items-center gap-10">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon relative">
            <img src={assets.basket_icon} alt="" />
            <div className="dot absolute min-w-[10px] min-h-[10px] bg-[#ff6347] rounded-md -top-2 -right-2"></div>
        </div>
        <button className=' bg-transparent text-[16px] text-[#49557e] border border-[#ff6347] py-[10px] px-[30px] rounded-[50px] transition duration-300 cursor-pointer hover:bg-[#ffbcb0] '>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
