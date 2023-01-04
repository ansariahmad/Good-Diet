import React, { useState } from "react";
import { useNavigate, Link, useLocation} from "react-router-dom";
import circleImage from "../components/Pics/avatar.jpg";
import './vendorMainAbout.css';
import Axios from "axios";
export default function vendorMainAbout() {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <>
            <div className="App">
                <div className="vbgMain"></div>
                <h2 className="vPageTitle">ABOUT</h2>
                <div className="vMainHeader">
                    <h1> Good Diet </h1>
                    <div className="circleImg">
                        <p id="Hi">Hi {location.state.username}</p>
                        <img id="cimg" src={circleImage} alt="logo" className="loginLogo" />
                    </div>
                </div>
                <div className="vMainNavbar">
                <button className="btn_vMainPage"
                        onClick={() =>{
                            navigate('/vendorMainPage', { state: {email: location.state.email , password: location.state.password, username: location.state.username,
                                dob: location.state.dob, phone:location.state.phone} })
                        }}
                        >HOME</button>

                        <button className="btn_vMainPage"
                        onClick={() =>{
                            navigate('/vendorProfile', { state: {email: location.state.email , password: location.state.password, username: location.state.username,
                                dob: location.state.dob, phone:location.state.phone} })
                        }}
                        >PROFILE</button>

                        <button className="btn_vMainPage"
                        onClick={() =>{
                            navigate('/vendorAddRes', { state: {email: location.state.email , password: location.state.password, username: location.state.username,
                                dob: location.state.dob, phone:location.state.phone} })
                        }}
                        >ADD RESTAURENT</button>

                        <button className="btn_vMainPage"
                        onClick={() =>{
                            navigate('/vendorViewRes', { state: {email: location.state.email , password: location.state.password, username: location.state.username,
                                dob: location.state.dob, phone:location.state.phone} })
                        }}
                        >VIEW RESTAURENT</button>

                        <button className="btn_vMainPage"
                        onClick={() =>{
                            navigate('/addFoodItem', { state: {email: location.state.email , password: location.state.password, username: location.state.username,
                                dob: location.state.dob, phone:location.state.phone} })
                        }}
                        >ADD FOOD ITEM</button>

                        <button className="btn_vMainPage"
                        onClick={() =>{
                            navigate('/allFoodItems', { state: {email: location.state.email , password: location.state.password, username: location.state.username,
                                dob: location.state.dob, phone:location.state.phone} })
                        }}
                        >VIEW ALL ITEMS</button>

                        <button className="btn_vMainPage"
                        onClick={() =>{
                            navigate('/vendorMainAbout', { state: {email: location.state.email , password: location.state.password, username: location.state.username,
                                dob: location.state.dob, phone:location.state.phone} })
                        }}
                        >ABOUT</button>

                    <Link id="btn_text" to="/WelcomePage">
                        <button className="btn_vMainPage">LOGOUT</button>
                    </Link>
                    <div className="webContacts">
                        <p>gooddiet123@gmail.com</p>
                        <p>UAN 111-222-333</p>
                        <p>Gujranwala, Pakistan</p>

                    </div>
                </div>

                <div className="vendorMainAboutContent">
                    <h2>About this website</h2>
                    <p>This website helps you to find healty and good food.</p>

                </div>

            </div>
        </>
    );
}
