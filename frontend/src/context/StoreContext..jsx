import { createContext } from "react";
import { food_list } from "../assets/food images/asset";

export const StoreContext=createContext(null);
const StoreContextProvider=(props)=>{
    const contextValue={
        food_list,

    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
        
    )

}
export default StoreContextProvider;
    


const getTotalCartAmount=()=>
    {
        let totalAmount=0;
        
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo=food_list.find((product)=>product._id===item)
                totalAmount+=itemInfo.price* cartItems[item];
            }
           
        }
        return totalAmount;
    }
    const contextValue={
        getTotalCartAmount
    }
    
    