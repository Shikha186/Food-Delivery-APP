import React from 'react';
import "./FoodItems.css";
import { assets } from '../../assets/food images/asset';
import { FaRupeeSign } from "react-icons/fa";


function FoodItems({id,name,image,price,description}){
  return (
    <div className='food-item'>
        <div className="food-item-image-container">
            <img  className="food-item-img" src={image} alt={name}/>

        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img  id="r" src={assets.rating} alt="rating"/>
            </div>
            <p className='description'>{description}</p>
            <p className='price'><FaRupeeSign  className='rupee'/>{price}</p>
        </div>
    </div>
  )
}
export default FoodItems;
