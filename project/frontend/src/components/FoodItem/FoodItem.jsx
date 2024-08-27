import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './FoodItem.css'
import { StoreContext } from '../../context/StoreContext'
const FoodItem = ({id,name,price,description,image}) => { 
    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)
  return (
    <div className='food-item w-full m-auto rounded-[15px]   shadow-[0px_0px_10px_#00000015] duration-300 '>
        <div className="food-item-img-container relative ">
            <img className='food-item-image   w-full rounded-t-2xl ' src={image} alt="" />
            {
                !cartItems[id] ? <img className='add absolute w-[35px] bottom-[15px] right-[15px] cursor-pointer rounded-full' onClick={() => addToCart(id)} src={assets.add_icon_white}/>:<div className='food-item-counter absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white'>
                    <img className='w-[30px]' onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img className='w-[30px]' onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>
            }
        </div>
        <div className="food-item-info p-[20px]">
            <div className="food-item-name-rating flex justify-between items-center mb-[10px]">
                <p className='font-medium text-[20px]'>{name}</p>
                <img className=' w-[70px]' src={assets.rating_starts} alt="" />
            </div>
            <p className='food-item-desc text-[#676767] text-[12px]'>{description}</p>
            <p className="food-item-price text-[#ff6347] text-[22px] font-medium my-[10px]">${price}</p>
        </div>
      
    </div>
  )
}

export default FoodItem
