import React, { useEffect, useState } from "react";
import { useNavigate, Link, useLocation} from "react-router-dom";
import circleImage from "../components/Pics/avatar.jpg";
import './vendorViewRes.css';
import Axios from 'axios';

export default function vendorViewRes() {
    const location = useLocation();
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const viewRestaurant = (event) => {
        
        Axios.post("https://goodfood-app-node.herokuapp.com/api/auth/viewRestaurant",
        {
            email: location.state.email,
        }).then((response) => {
            if (response.data === "Not-Found") {
                // alert("You do not have Burgers");
            }
            else{
                setData(response.data);
                // console.log(foods);
                // console.log("Items Fetched");
            }
        });
    };

    useEffect(() => {
        viewRestaurant();
    }, []);

    return (
        <>
            <div className="App"> 
                <div className="vbgViewRes"></div>
                <h2 className="vPageTitle">VIEW RESTAURENT</h2>
                <div className="vViewResHeader">
                    <h1> Good Diet </h1>
                    <div className="circleImgViewRes">
                        <p id="Hi">Hi {location.state.username}</p>
                        <img id="cimg" src={circleImage} alt="logo" className="loginLogo" />
                    </div>
                </div>
                <div className="vViewResNavbar">
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

                <div className="vendorViewResContent">
                    <h2>Your restaurent</h2>

                    <table>
                        {data.map((val)=>{
                            return (
                                <>
                                <tr>
                                    <th>Restaurant name</th>
                                    <td>{val.restaurant_name}</td>
                                </tr>
                                <tr>
                                    <th>Opening time</th>
                                    <td>{val.restaurant_open_time}</td>
                                </tr>
                        <tr>
                            <th>Closing time</th>
                            <td>{val.restaurant_close_time}</td>
                        </tr>
                        <tr>
                            <th>Phone no.</th>
                            <td>{val.restaurant_contact_no}</td>
                        </tr>
                        <tr>
                            <th>Address</th>
                            <td>Street # {val.restaurant_street}, {val.restaurant_sector}, {val.restaurant_city}</td>
                        </tr>
                                </>
                            );
                        })}
                        
                    </table>

                </div>

            </div>
        </>
    );
}
