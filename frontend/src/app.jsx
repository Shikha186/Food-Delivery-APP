import React from 'react';

import { Route, Routes } from 'react-router-dom';
import './app.css';
import Navbar from './components/NavBar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import { PlaceOrder } from './pages/PlaceOrder/PlaceOrder';


export function App() {
   

  return (
    <>
        <div className="app">
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Cart" element={<Cart/>}></Route>
            <Route path="/PlaceOrder" element={<PlaceOrder/>}></Route>
          </Routes>
          {/* {showLogin?<logInPopup/>:<></>}
          <div className='app'>
            <Navbar setShowLogin={setShowLogin} />
            <p>hii</p>
          </div> */}
        </div>
    </>
  )
}

