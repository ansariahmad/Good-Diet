import React, { useState } from "react";
import { useNavigate, Link, useLocation} from "react-router-dom";
import circleImage from "../components/Pics/avatar.jpg";
import './vendorProfile.css';
export default function vendorMainPage() {

    const navigate = useNavigate();
    const location = useLocation();
    return (
        <>
            <div className="App">
                <div className="vbgMainProfile"></div>
                <h2 className="vMainProfileTitle">PROFILE</h2>
                <div className="vMainProfileHeader">
                    <h1> Good Diet </h1>
                    <div className="circleImgProfile">
                        <p id="Hi">Hi {location.state.username}</p>
                        <img id="vpi" src={circleImage} alt="logo" className="loginLogo" />
                    </div>
                </div>
                <div className="vMainProfileNavbar">
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

                <div className="vendorProfileContent">
                    <h5>Your cridentials</h5>
                    <table>
                        <tr>
                            <th>Name</th>
                            <td>{location.state.username}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{location.state.email}</td>
                        </tr>
                        <tr>
                            <th>Phone Number</th>
                            <td>{location.state.phone}</td>
                        </tr>
                        <tr>
                            <th>Date of Birth</th>
                            <td>{location.state.dob}</td>
                        </tr>
                    </table>

                        <button className="btn_vUpdate"
                        onClick={() =>{
                            navigate('/vendorUpdatePage', { state: {email: location.state.email , password: location.state.password, username: location.state.username,
                                dob: location.state.dob, phone:location.state.phone} })
                        }}
                        >Update
                        </button>

                </div>

            </div>
        </>
    );
}
