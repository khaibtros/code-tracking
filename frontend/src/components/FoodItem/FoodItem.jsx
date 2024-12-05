import React, { useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/frontend_assets/assets'

const FoodItem = ({id,name,description,price,image}) => {

    const [itemCount,setItemCount] = useState(0);

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img src={image} alt="" className="food-item-image" />
            {!itemCount 
                ? <img class="add" onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_white} alt="" />
                : <div className='food-item-counter'>
                    <img onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon_red} alt="" />
                    <p>{itemCount}</p>
                    <img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt="" />
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>

    </div>
  )
}

export default FoodItem