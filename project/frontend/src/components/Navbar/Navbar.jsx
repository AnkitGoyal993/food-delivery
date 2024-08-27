import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom'
function Navbar({setShowLogin}) {
    const [menu,setMenu] = useState('home');
  return (
    <div className='navbar  py-5 flex justify-between items-center'>
      <img  src={assets.logo} alt="" className='logo w-[120px] md:w-[150px]' />
      <ul className='navbar-menu none hidden  lg:flex md:gap-8 ld:text-[19px] list-none gap-5 text-[#49557e] text-[18px]'>
        <Link to='/' onClick={()=>setMenu("home")} className={menu === "home"?" cursor-pointer pb-[2px] border-b-2 border-b-[#ff6349]":" cursor-pointer"}>home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu === "menu"?" cursor-pointer pb-[2px] border-b-2 border-b-[#ff6349]":" cursor-pointer"}>menu</a>
        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu === "mobile-app"?" cursor-pointer pb-[2px] border-b-2 border-b-[#ff6349]":" cursor-pointer"}>mobile-app</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")}  className={menu === "contact-us"?" cursor-pointer pb-[2px] border-b-2 border-b-[#ff6349]":" cursor-pointer"}>contact-us</a>
      </ul>
      <div className="navbar-right flex items-center gap-5 md:gap-10">
        <img className=' w-5 lg:w-6' src={assets.search_icon} alt="" />
        <div className="navbar-search-icon relative">
            <img className=' w-5 lg:w-6' src={assets.basket_icon} alt="" />
            <div className="dot absolute min-w-[10px] min-h-[10px] bg-[#ff6347] rounded-md -top-2 -right-2"></div>
        </div>
        <button onClick={() => setShowLogin(true)} className=' bg-transparent text-[15px] md:text-[16px] text-[#49557e] border border-[#ff6347] py-[7px] px-5 md:py-[10px] md:px-[30px] rounded-[50px] transition duration-300 cursor-pointer hover:bg-[#ffbcb0] '>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
