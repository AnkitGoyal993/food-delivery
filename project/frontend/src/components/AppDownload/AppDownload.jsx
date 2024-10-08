import React from 'react'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download w-full m-auto text-center   mt-[100px] text-[max(3vw,20px)]   font-medium ' id='app-download'>
      <p>For Better Experience Download <br /> Tomato App</p>
      <div className="app-download-platforms flex justify-center gap-[max(2vw,10px)] mt-[40px] ">
        <img className=' w-[max(30vw,120px)] max-w-[180px] duration-500 cursor-pointer transform hover:scale-105  ' src={assets.play_store} alt="" />
        <img className=' w-[max(30vw,120px)] max-w-[180px] duration-500 cursor-pointer transform hover:scale-105  ' src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
