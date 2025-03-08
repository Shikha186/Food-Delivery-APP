import React from 'react';
import "./FoodItems.css";
import { assets } from '../../assets/food images/asset';
import { FaRupeeSign } from "react-icons/fa";
import { useState } from 'react';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext.';


function FoodItems({id,name,image,price,description}){
  
  const{cartItems,addToCart,removeFromCart}=useContext(StoreContext);
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
            <div>
              {!cartItems[id]?<button className="b" onClick={()=>addToCart(id)}>Add</button>:
                <div className="add-button-container">
                  <button className="add-button" onClick={()=>removeFromCart(id)}>-</button>
                  <p className="item-count">{cartItems[id]}</p>
                  <button className="add-button" onClick={()=>addToCart(id)}>+</button>
                </div>}
        </div>
        </div>
    </div>
  )
}
export default FoodItems;
