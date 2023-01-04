import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../components/Pics/login.png";
import './vlogin.css'
import Axios from 'axios';
import validator from "validator";

export default function ulogin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    var isTrue = true;
    const navigate = useNavigate();


    const loginVendor = (event) => {
        if (email === "" || password === "") {
            setError("Please fill out all the fields");
            isTrue = false;
        }
        else if (validator.isEmail(email)) {
            // true condition
        }
        else{
            setError("Please Enter valid Email!.")
            isTrue = false;
        }
        if (isTrue){
            Axios.post("https://goodfood-app-node.herokuapp.com/api/auth/vendorLogin", {
                email: email,
                password: password,
            }).then((response) => {            
                if (response.data === "Not-Found") {
                    setError("Email Not Registered");
                }
                else if (
                    email === response.data[0].vendor_email &&
                    password === response.data[0].vendor_password
                ) {
                    // alert("Logged In Successfully");
                    // setDob(response.data[0].vendor_dob);
                    // setUsername(response.data[0].vendor_name);
                    alert(response.data[0].vendor_name);
                    console.log(response.data[0].vendor_name);
                    console.log(response.data[0].vendor_dob);
                    navigate("/vendorMainPage",
                    { state: { email: email , password: password, username: response.data[0].vendor_name, dob: response.data[0].vendor_dob, phone:response.data[0].vendor_phone } });
                }
                else{
                    setError("Invalid Credentials");
                }
            });
        }
        event.preventDefault();
    };

    return (
        <>
            <div className="App">
                <div className='vloginForm'>
                    <div className="login">
                    <h1 id="hiv">Hello Vendor!</h1>

                        <div className="venlogo">
                            <img src={logo} alt="logo" className="loginLogo" />
                        </div>

                        <div class="alert">
                            <span class="closebtn"></span>
                            {error}
                        </div>

                        <label className="label">Enter your email:</label>
                        <input className="vl-inp" type="text" name="loginEmail" onChange={(e) => {
                            setEmail(e.target.value);
                        }} />
                        <label className="label">Enter your Password:</label>
                        <input className="vl-inp" type="password" name="loginPassword" onChange={(e) => {
                            setPassword(e.target.value);
                        }} />
                            <button className="btn_vnlogin" onClick={loginVendor}>LOGIN</button>
                        <label className="label">Register yourself as a vendor.</label>
                        <Link id="signup-text" to="/vendorRegister">
                            <button className="btn_vsignup">REGISTER</button>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
}
