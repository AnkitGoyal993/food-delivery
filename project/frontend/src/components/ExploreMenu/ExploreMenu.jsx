import React from 'react'
import { menu_list } from '../../assets/assets'
import "./ExploreMenu.css"
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu flex flex-col gap-[20px]' id='explore-menu'>
      <h1 className=' text-[#262626] text-[max(26px,2.3vw)] font-medium '>Explore Our menu</h1>
      <p className='explore-menu-text w-full text-[14px] lg:max-w-[60%] text-[#808080]'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your carvings and elevate your dining experience, One delicious meal at a time.</p>
      <div className="explore-menu-list flex justify-between items-center gap-[30px] text-center my-[20px] overflow-x-scroll" >
        {
            menu_list.map((item,index) => {
                return (
                    <div onClick={() => setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-meu-list-item">
                       <img className={category===item.menu_name? " w-[7.5vw] min-w-[80px] cursor-pointer rounded-full duration-200 border-[4px] border-[#ff6347] p-[2px]":" w-[7.5vw] min-w-[80px] cursor-pointer rounded-full duration-200"} src={item.menu_image} alt="" /> 
                       <p className=' mt-[10px] text-[#747474] text-[max(1.4vw,16px)] cursor-pointer'>{item.menu_name}</p>
                    </div>
                )
            })
        }
      </div>
      <hr className=' my-[10px] h-[2px] bg-[#e2e2e2] border-none' />
    </div>
  )
}

export default ExploreMenu
