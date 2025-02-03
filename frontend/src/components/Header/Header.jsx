import React from 'react';
import "./Header.css";
import { assets } from '../../assets/food images/asset';

function Header(){
  return (
    <div className='box'>
      {/* <img src={assets.headimg}></img> */}
        <div className='header'>
          <div className='header-content'>
            <h2>Order your favourite food here</h2>
            <p>Welcome to our restaurant! We offer a wide variety of delicious dishes made from the freshest ingredients. Our menu features something for everyone, from classic comfort foods to exotic international cuisine. Enjoy our cozy dining area, friendly staff, and top-notch service. Whether you're dining in or ordering takeout, we strive to provide an exceptional culinary experience. Come and taste the difference!</p>
            <button>View Menu</button>
            
          </div>
        </div>

    </div>
  )
}

export default Header;