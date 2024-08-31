import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className=' place-order flex justify-between items-start gap-[50px] mt-[100px]'>
      <div className="place-order-left w-full max-w-[max(30%,500px)]">
        <p className="title font-semibold text-[30px] mb-[50px]">Delivery Information</p>
        <div className="multi-fields flex gap-[10px]">
          <input className=' w-full mb-[15px] p-[10px] border border-[#c5c5c5] rounded outline-[#ff6347] ' type="text" placeholder='First Name' />
          <input className=' w-full mb-[15px] p-[10px] border border-[#c5c5c5] rounded outline-[#ff6347] ' type="text" placeholder='Last Name' />
        </div>
        <input className=' w-full mb-[15px] p-[10px] border border-[#c5c5c5] rounded outline-[#ff6347] ' type="email" placeholder='Your Email address' />
        <input className=' w-full mb-[15px] p-[10px] border border-[#c5c5c5] rounded outline-[#ff6347] ' type="text" placeholder='Street' />
        <div className="multi-fields flex gap-[10px]">
          <input className=' w-full mb-[15px] p-[10px] border border-[#c5c5c5] rounded outline-[#ff6347] ' type="text" placeholder='City' />
          <input className=' w-full mb-[15px] p-[10px] border border-[#c5c5c5] rounded outline-[#ff6347] ' type="text" placeholder='State' />
        </div>
        <div className="multi-fields flex gap-[10px]">
          <input className=' w-full mb-[15px] p-[10px] border border-[#c5c5c5] rounded outline-[#ff6347] ' type="text" placeholder='Zip Code' />
          <input className=' w-full mb-[15px] p-[10px] border border-[#c5c5c5] rounded outline-[#ff6347] ' type="text" placeholder='Country' />
        </div>
        <input className=' w-full mb-[15px] p-[10px] border border-[#c5c5c5] rounded outline-[#ff6347] ' type="text" placeholder='phone' />
      </div>
      <div className="place-order-right w-full max-w-[max(40%,500px)]">
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
          <button  className='  text-white bg-[#ff6347] w-[max(15vw,200px)] py-[12px] rounded cursor-pointer mt-[30px] ' >PROCEED TO PAYMENT</button>
        </div>
      </div>
      
    </form>
  )
}

export default PlaceOrder
