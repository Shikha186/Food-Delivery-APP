import React from 'react';
import "./FoodDisplay.css";
import { StoreContext } from '../../context/StoreContext.';
import { useContext } from 'react';
import FoodItems from '../FoodItems/FoodItems';

function FoodDisplay({category}) {
    const{food_list}=useContext(StoreContext);
  return (
    <div  className='food-display'  id="food-display">
        <h2>Top Dishes For You</h2>
        <div className="food-display-list">
            {food_list.map((item,index)=> {
              if(category==="All" || category===item.category){
                return<FoodItems  key={index} id={item._id} name={item.name} image={item.image} price={item.price} description={item.description}></FoodItems>
              }
                
            })}
        </div>
    </div>
  )
}
export default FoodDisplay;
