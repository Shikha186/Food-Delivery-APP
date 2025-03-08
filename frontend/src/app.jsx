import React from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './app.css';
import Navbar from './components/NavBar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder  from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LogInPopUp from './components/logInPopUp/logInPopUp';


export function App() {
  const [showLogin,setShowLogin]=useState(false);
   
  return (
    <>
    {showLogin?<LogInPopUp  setShowLogin={setShowLogin}/>:<></>}
        <div className="app">
          <Navbar setShowLogin={setShowLogin}></Navbar>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Cart" element={<Cart/>}></Route>
            <Route path="/PlaceOrder" element={<PlaceOrder/>}></Route>
          </Routes>
          
        </div>
        <Footer></Footer>

    </>
  )
}

