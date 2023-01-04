import React, { useState } from "react";
import { useNavigate, Link, useLocation} from "react-router-dom";
import circleImage from "../components/Pics/avatar.jpg";
import './vendorMainPage.css';
export default function vendorMainPage() {

    const location = useLocation();
    const navigate = useNavigate();
    return (
        <>
            <div className="App">
                <div className="vbgMain"></div>
                <h2 className="vPageTitle">HOME</h2>
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

                <div className="vendorHomeContent">
                    <h5>1. How to add restaurent</h5>
                    <p>The most important thing you need to know about writing a restaurant review is that honesty goes a long way. Even if you are reviewing your own restaurant, and your goal is to attract customers, be honest and only speak highly of the things you really do well.</p>
                    <h5>2. How to add restaurent</h5>
                    <p>The most important thing you need to know about writing a restaurant review is that honesty goes a long way. Even if you are reviewing your own restaurant, and your goal is to attract customers, be honest and only speak highly of the things you really do well.</p>
                </div>

            </div>
        </>
    );
}
