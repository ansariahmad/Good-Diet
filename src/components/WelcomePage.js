import React, { useState } from "react";
import './WelcomePage.css';
import { useNavigate, Link } from "react-router-dom";
import logo from './Pics/GOODDIET Logo1.png'
// import WBG from './Pics/fast-food-dish-orange.jpg'
export default function WelcomePage() {
  return (
    <>
      <div className="App">
        <div className="Main">
          {/* <img id="Wbg" src={WBG} alt="Image" className="webbg" /> */}
          <img id="limg" src={logo} alt="logo" className="webLogo" />
          <div className="subMain">
            <span className="welcome1">Welcome to</span>
            <h2 className="welcome2">Good Diet</h2>
          </div>
          <div className="btn">
            <Link id="ulogin" to="/userLogin">
              <button className="btn_ulogin">Login as User</button>
            </Link>
            <Link id="vlogin" to="/vendorlogin">
              <button className="btn_vlogin">Login as Vendor</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}