import React from "react";
import "./ExploreMenu.css";
import { menu_head } from "../../assets/food images/asset";

function ExploreMenu({category,setCategory}) {
    return(
        <div  className="explore-menu">
            <div className="explore-menu-content">
                <h2>Explore our menu</h2>
                <p className="explore-menu-text">Our menu features a wide variety of delicious dishes made from the freshest ingredients. From classic comfort foods to exotic international cuisine, we have something for everyone.</p>
            </div>
            <div className="menu-list">
                {menu_head.map((menu,index)=>(
                    <div onClick={() =>setCategory(prev=>prev===menu.menu_name?"All":menu.menu_name)}  key={index} className="explore-menu-list-item">
                        <img  className={category===menu.menu_name?"active":""} src={menu.menu_img} alt={menu.menu_name}/>
                        <p>{menu.menu_name}</p>
                    </div>
                ))}
            </div>
            <hr/>
        </div>
    );
}
export default ExploreMenu;