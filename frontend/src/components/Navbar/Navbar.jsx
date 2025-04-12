import "./Navbar.css";
import { assets } from "../../assets/food images/asset.js";
import { FcSearch } from "react-icons/fc";
import { PiHandbagFill } from "react-icons/pi";
import {useState} from "react";
import { Link } from "react-router-dom";

function Navbar({setShowLogin}){

    const[menu,setmenu]=useState("Home")
    return(
        <>
            <div className="navbar">
                <Link to="/"><img src={assets.logo} alt="logo" className="logo"></img></Link>
               
               <ul className="nav-menu">
                <Link to="/"><li onClick={()=> setmenu("Home")}  className={menu==="Home"? "active":""} >Home</li></Link>
                <Link to="/"><li onClick={()=> setmenu("Menu")} className={menu==="Menu"? "active":""}>Menu</li></Link>
                
                <li onClick={()=> setmenu("Mobile-app")} className={menu==="Mobile-app"? "active":""}>Mobile-app</li>
                <li onClick={()=> setmenu("Contact us")} className={menu==="Contact us"? "active":""}>Contact us</li>  
               </ul>
               <div className="nav-right">
                <div className="search">
                    <div className="search-i"><FcSearch /></div>
                    <div className="search-box">
                        <input type="text" placeholder="Search for food items"></input>
                    </div>
                </div>
                <Link to="/Cart" className="cart-i"><PiHandbagFill /></Link>
                <button onClick={()=> setShowLogin(true)}>Sign in</button>

               </div>
            </div>
        </>
    )
}
export default Navbar;