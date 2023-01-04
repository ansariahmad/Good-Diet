import React, { useState } from "react";
import { useNavigate, Link, useLocation} from "react-router-dom";
import circleImage from "../components/Pics/avatar.jpg";
import './vendorAddRes.css';
import Axios from "axios";
export default function vendorMainPage() {
    const [restaurantName, setRestaurantName] = useState("");
    const [restaurantStreet, setRestaurantStreet] = useState("");
    const [restaurantPhone, setRestaurantPhone] = useState("");
    const [restaurantEmail, setRestaurantEmail] = useState("");
    const [restaurantCity, setRestaurantCity] = useState("");
    const [restaurantSector, setRestaurantSector] = useState("");
    const [restaurantOpenTime, setRestaurantOpenTime] = useState("");
    const [restaurantCloseTime, setRestaurantCloseTime] = useState("");
    const [err, setError] = useState("");
    var isTrue = false;
    const navigate = useNavigate();
    const location = useLocation();

    const addRestaurant = (event) => {
        if (restaurantCity === "" ||
            restaurantEmail === "" ||
            restaurantName === "" ||
            restaurantPhone === "" ||
            restaurantSector === "" ||
            restaurantStreet === "" ||
            restaurantOpenTime === "" ||
            restaurantCloseTime === "" ){
                alert("Fill all the fields");
            }
            else{
                isTrue = true;
            }

        if (isTrue){
        Axios.post("https://goodfood-app-node.herokuapp.com/api/auth/vendorAddRes", {
            restaurantName: restaurantName,
            restaurantStreet: restaurantStreet,
            restaurantPhone: restaurantPhone,
            restaurantEmail: restaurantEmail,
            restaurantCity: restaurantCity,
            restaurantSector: restaurantSector,
            restaurantOpenTime: restaurantOpenTime,
            restaurantCloseTime: restaurantCloseTime,
            email: location.state.email,
        }).then((response) => {
            if (response.data === "Restaurant Exists") {
                alert("Restaurant already Exists");
            }
            else{
                alert("Restaurant Registered Successfully");
                navigate("/vendorAddRes",
                { state: { email: location.state.email , password: location.state.password, username: location.state.username, dob: location.state.dob, phone:location.state.phone } });
            }
        });
    }
        event.preventDefault();
    };

    return (
        <>
            <div className="App"> 
                <div className="vbgMainAddRes"></div>
                <h2 className="vMainAddResTitle">ADD RESTAURENT</h2>
                <div className="vMainAddResHeader">
                    <div className="circleImgAddRes">
                        <p id="Hi">Hi {location.state.username}</p>
                        <img id="var" src={circleImage} alt="logo" />
                    </div>
                </div>
                <div className="vMainAddResNavbar">
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
                <h1> Good Diet </h1>
                
                <div className="vendorAddResContent">
                    <div className="col">
                        <div className="col1">
                            <label className="label">Enter restaurant name:</label>
                            <input className="ul-inp" type="text" name="restaurantName" onChange={(e) => {
                                setRestaurantName(e.target.value)
                            }} />
                            <label className="label">Enter opening time:</label>
                            <input className="ul-inp" type="text" name="restaurantOpenTime" onChange={(e) => {
                                setRestaurantOpenTime(e.target.value)
                            }} />
                            <label className="label">Enter closing time:</label>
                            <input className="ul-inp" type="text" name="restaurantCloseTime" onChange={(e) => {
                                setRestaurantCloseTime(e.target.value)
                            }} />
                            <label className="label">Enter Email:</label>
                            <input className="ul-inp" type="email" name="restaurantContact" onChange={(e) => {
                                setRestaurantEmail(e.target.value)
                            }} />
                        </div>

                        <div className="col2">
                            <label className="label">Enter street address:</label>
                            <input className="ul-inp" type="text" name="restaurantStreetAdd" onChange={(e) => {
                                setRestaurantStreet(e.target.value)
                            }} />
                            <label className="label">Enter sector name:</label>
                            <input className="ul-inp" type="text" name="restaurantSectorAdd" onChange={(e) => {
                                setRestaurantSector(e.target.value)
                            }} />
                            <label className="label">Enter restaurant city:</label>
                            <input className="ul-inp" type="text" name="restaurantCityAdd" onChange={(e) => {
                                setRestaurantCity(e.target.value)
                            }} />
                            <label className="label">Enter restaurant phone no.:</label>
                            <input className="ul-inp" type="number" name="restaurantPhoneAdd" onChange={(e) => {
                                setRestaurantPhone(e.target.value)
                            }} />
                                <button className="btn_saveRes" onClick={addRestaurant}>Submit</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
