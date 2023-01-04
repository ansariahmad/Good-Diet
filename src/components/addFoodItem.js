import React, { useState } from "react";
import { useNavigate, Link, useLocation} from "react-router-dom";
import logo from "../components/Pics/fast-food.png";
import './addFoodItem.css';
import Axios from 'axios';
export default function addFoodItem() {

    const navigate = useNavigate();
    const location = useLocation();

    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [itemCategory, setItemCategory] = useState("");
    // const [picture, setPicture] = useState(null);

    const addFoodItem = (event) => {
        Axios.post("https://goodfood-app-node.herokuapp.com/api/auth/addFoodItem", {
            itemName: itemName,
            itemPrice: itemPrice,
            itemDescription: itemDescription,
            itemCategory: itemCategory,
            // picture: picture,
            email: location.state.email,
        }).then((response) => {
            if (response.data === "No-Restaurant") {
                alert("You do not have a restaurant. Please create one first.");
            }
            else if (response.data === "Added") {
                
                navigate("/vendorMainPage",
                { state: { email: location.state.email , password: location.state.password, username: location.state.username, dob: location.state.dob, phone:location.state.phone } });
            }
        });
        event.preventDefault();
    };

    

    return (
        <>
            <div className="App">
                <div className='addFoodItemForm'>
                    <div className="addFood">
                        <h1 className="addFoodTitle">Add Food Item</h1>
                        <h2>{location.state.username}</h2>
                        <div className="addFoodlogo">
                            <img src={logo} alt="logo" className="vsignLogo" />
                        </div>

                        <div className="col">
                            <div className="col1">
                                <label className="label">Enter item name:</label>
                                <input className="ul-inp" type="text" name="foodItemName" onChange={(e) => {
                                    setItemName(e.target.value);
                                }}/>
                                <label className="label">Enter item price:</label>
                                <input className="ul-inp" type="text" name="foodItemPrice" onChange={(e) => {
                                    setItemPrice(e.target.value);
                                }} />
                                <label className="label">Enter item description:</label>
                                <input className="ul-inp" type="text" name="foodItemDesc" onChange={(e) => {
                                    setItemDescription(e.target.value);
                                }} />
                            </div>

                            <div className="col2">
                                <label className="label">Select its category:</label>
                                <select name="itemCategory" id="itemCategory" onChange={(e) => {
                                    setItemCategory(e.target.value);
                                }}>
                                    <option value="burger">Burger</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="desi">Desi</option>
                                    <option value="chinese">Chinese</option>
                                </select>
                                {/* <label className="label">Upload item image:</label>
                                <input className="ul-inp" type="file" name="fileName" onChange={(e) => {
                                    setPicture(e.target.files[0]);
                                }} /> */}
                                
                                    <button className="btn_uregister" onClick={addFoodItem}>SUBMIT</button>
                                
                            </div>
                        </div>


                        {/* <label className="label">Register yourself as a user.</label>
                        <Link id="signup-text" to="/userRegister">
                            <button className="btn_usignup">REGISTER</button>
                        </Link> */}
                    </div>

                </div>
            </div>
        </>
    );
}
