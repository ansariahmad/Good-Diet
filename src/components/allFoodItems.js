import React, { useState, useEffect} from "react";
import { useNavigate, Link, useLocation} from "react-router-dom";
import circleImage from "../components/Pics/avatar.jpg";
import './allFoodItems.css';
import Axios from 'axios';

export default function vendorMainAbout() {
    const navigate = useNavigate();
    const location = useLocation();
    const [foods, setFoods] = useState([]);
    
    const viewAllItems = (event) => {
        Axios.post("https://goodfood-app-node.herokuapp.com/api/auth/viewFoodItem", {
            email: location.state.email,
        }).then((response) => {
            console.log(response);
            if(response.data === "No-Restaurant"){
                console.log("No Restaurant");
            }
            else if (response.data === "No-Items"){
                console.log("No Items");
            }
            else{
                setFoods(response.data);
            }
        });
        // event.preventDefault();
    }

    useEffect(() => {
        viewAllItems();
    }, []);

    return (
        <>
            <div className="App">
                <div className="vbgMainAllItems"></div>
                <h2 className="vPageTitle">VIEW ALL ITEMS</h2>
                <div className="vMainHeader">
                    <h1> Good Diet </h1>
                    <div className="circleImg">
                        <p id="Hi">Hi {location.state.username}</p>
                        <img id="cimg" src={circleImage} alt="logo" className="loginLogo" />
                    </div>
                </div>
                <div className="vAllItemsNavbar">
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

                <div className="vendorAllItemsContent">
                    <h2>Your all items</h2>
                    <p>This website helps you to find healty and good food.</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Item name</th>
                                <th>Item Price</th>
                                <th>Item Description</th>
                                <th>Item Category</th>
                                <th>Item Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                                {foods.map((val)=> {
                                    return (
                                        <tr>
                                            <td>{val.item_name}</td>
                                            <td>{val.item_price}</td>
                                            <td>{val.item_description}</td>
                                            <td>{val.item_category}</td>
                                            <td>{val.item_rating}</td>
                                            {/* <td><img key={val.id} src={val.picture} alt={val.username} /></td> */}
                                        </tr>    
                                    );
                                })}
                        </tbody>
                    </table>

                </div>

            </div>
        </>
    );
}
