import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return (
    <div className=' food-display mt-[30px]' id='food-display'>
      <h2 className=' text-[max(2vw,24px)] font-semibold'>Top dishes near you</h2>
      <div className="food-display-list grid grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] gap-[30px] mt-[30px] gap-y-[50px]">
        {
            food_list.map((item,index) => {
                if(category==='All' || category===item.category){

                    return (
                        <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                    )
                }
            })
        }
      </div>
    </div>
  )
}

export default FoodDisplay
