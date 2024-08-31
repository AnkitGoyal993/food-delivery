import React from 'react'
import { useContext } from 'react'
import {StoreContext} from "../../context/StoreContext.jsx"
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const {cartItems,food_list,removeFromCart,getTotalCartAmount} = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className='cart mt-[100px]'>
      <div className="cart_items">
        <div className="cart-items-title grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 text-[max(1.2vw,12px)]">
          <p>Items</p>
          <p>Title</p> 
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
      <br/>
      <hr className=' h-[1px] bg-[#e2e2e2]' />
      {food_list.map((item,index) => {
        if(cartItems[item._id]>0){
          return (
            <div>
              
            <div className='cart-items-title cart-items-item grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center  text-[max(1.2vw,12px)] my-[10px] text-black'>
              <img className='w-[50px]' src={item.image} alt="" />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p>${item.price*cartItems[item._id]}</p>
              <p onClick={()=>removeFromCart(item._id)} className=' cross cursor-pointer'>X</p>
            </div>
            <hr className=' h-[1px] bg-[#e2e2e2]'/>
            </div>
          )
        }
      })}
      </div>
      <div className="cart-bottom mt-[80px] flex flex-col-reverse md:flex-row justify-between gap-[max(12vw,20px)]">
        <div className="cart-total flex-1 flex flex-col gap-[20px]">
          <h2 className=' text-[max(1.4vw,12px)] font-medium'>Cart Totals</h2>
          <div>
            <div className="cart-total-details flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className=' my-[10px]'/>
            <div className="cart-total-details flex justify-between text-[#555]">
              <p>Devilery Fee</p>
              <p>${getTotalCartAmount() > 0 ?2:0}</p>
            </div>
            <hr className=' my-[10px]'/>
            <div className="cart-total-details flex justify-between text-[#555]">
              <p>Total</p>
              <p>${getTotalCartAmount()>0?getTotalCartAmount()+2:0}</p>
            </div>
          </div>
          <button onClick={()=>navigate('/order')} className='  text-white bg-[#ff6347] w-[max(15vw,200px)] py-[12px] rounded cursor-pointer ' >PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode md:flex-1 justify-start  ">
            <div>
              <p className='text-[#555]' >If your have any promo code, Enter it here</p>
            </div>
            <div className="cart-promocode-input mt-[10px] flex flex-col sm:flex-row justify-between items-center sm:bg-[#eaeaea] rounded ">
              <input className=' bg-transparent border-none outline-none pl-[10px] bg-[#eaeaea] w-full py-3 px-[5px] ' type="text" placeholder='promo code' />
              <button className=' mt-3 sm:mt-0 w-[50%] sm:w-[max(10vw,15px)] py-3 px-[8px] bg-black rounded text-white'>Submit</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
