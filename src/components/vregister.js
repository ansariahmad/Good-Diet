import React, { useState } from "react";
import { useNavigate, Link, useLocation} from "react-router-dom";
import logo from "../components/Pics/signup.png";
import './vregister.css';
import validator from "validator";
import Axios from 'axios';

export default function vregister() {

    // User input
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    const [dob, setDob] = useState("");
    const [otp, setOtp] = useState("");
    // flags
    var isTrue = false;
    const [show, setShow] = useState(true);
    // navigation
    const navigate = useNavigate();


    const registerVendor = (event) => {
        if (validator.isEmail(email)) {
            isTrue = true;
        } else {
            setError("Please, enter valid Email!")
            isTrue = false;
        }
        if (
            email === "" ||
            password === "" ||
            username === "" ||
            dob === "" ||
            phone === ""
        ) {
            setError("Please fill out all the fields");
            isTrue = false;
        } 
        else if (password != repeatPassword){
            setError("Passwords do not match.")
            isTrue = false;
        }
        else{
            isTrue = true;
        }

        Axios.post("https://goodfood-app-node.herokuapp.com/api/auth/checkLogin", {
            email: email,
        }).then((response) => {            
            if (response.data === "Found") {
                setError("Email already exists");
                console.log(isTrue);
                isTrue = false;
                console.log(isTrue);
            }
            else{
                isTrue = true;
            }
        });

        if (isTrue){
            console.log(isTrue);
            Axios.post("http://localhost:3001/api/auth/validateUser", {
                email : email,
            }).then((response) => {
                if (response.data === "error"){
                    setError("An error occurred. Check backend!")
                    isTrue = false;
                }
                else{
                    setOtp(response.data);
                    console.log(response.data);
                    navigate("/VendorOTPVerification",
                    { state: { email: email, password: password, username: username, dob: dob, otp: response.data, phone: phone } });
                }
            });
        
    }
        event.preventDefault();
    };
    return (
        <>
            <div className="App">
                <div className='vregisterForm'>
                    <div className="vregister">
                        <h1 className="vregisterTitle">Register Vendor</h1>

                        <div className="vsignlogo">
                            <img src={logo} alt="logo" className="vsignLogo" />
                        </div>
                        <div class="alert">
                            <span class="closebtn"></span>
                            {error}
                        </div>

                        <div className="vrcol">
                            <div className="vcol1">
                                <label className="vslabel">Enter your name:</label>
                                <input className="vs-inp" type="text" name="registerName" onChange={(e) => {
                                    setUsername(e.target.value);
                                }} />
                                <label className="vslabel">Enter your password:</label>
                                <input className="vs-inp" type="password" name="registerPassword" onChange={(e) => {
                                    setPassword(e.target.value);
                                }} />
                                    

                                
                                <label className="vslabel">Re-enter your password:</label>
                                <input className="vs-inp" type="password" name="registerRePassword" onChange={(e) => {
                                    setRepeatPassword(e.target.value);
                                }} />
                            </div>

                            <div className="vcol2">
                                <label className="vslabel">Enter your email:</label>
                                <input className="vs-inp" type="email" name="registerEmail" onChange={(e) => {
                                    setEmail(e.target.value);
                                }} />
                                <label className="vslabel">Enter your Number:</label>
                                <input className="vs-inp" type="text" pattern="[0-9]*" name="registerPhone" onChange={(e) => {
                                    setPhone(e.target.value);
                                }} />
                                <label className="vslabel">Enter your date of birth:</label>
                                <input className="vs-inp" type="date" name="registerDOB" onChange={(e) => {
                                    setDob(e.target.value);
                                }} />
                                    <button className="btn_vregister" onClick={registerVendor}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
