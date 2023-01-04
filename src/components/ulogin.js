import React, { useState } from "react";
import { useNavigate, Link, useLocation} from "react-router-dom";
import logo from "../components/Pics/login.png";
import './ulogin.css'
import Axios from "axios";
import validator from "validator";


export default function ulogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    var isTrue = true;

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
            Axios.post("https://goodfood-app-node.herokuapp.com/api/auth/userLogin", {
                email: email,
                password: password,
            }).then((response) => {            
                if (response.data === "Not-Found") {
                    setError("Email Not Registered");
                }
                else if (
                    email === response.data[0].user_email &&
                    password === response.data[0].user_password
                ) {
                    // alert("Logged In Successfully");
                    // setDob(response.data[0].vendor_dob);
                    // setUsername(response.data[0].vendor_name);
                    
                    console.log(response.data[0].user_name);
                    console.log(response.data[0].user_dob);
                    navigate("/UserMainPage",
                    { state: { email: email , password: password, username: response.data[0].user_name, dob: response.data[0].user_dob, phone:response.data[0].user_phone } });
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
                <div className='uloginForm'>
                    <div className="ulogin">
                        <h1 id="hiul">Hello User!</h1>
                        <div className="userlogo">
                            <img src={logo} alt="logo" className="loginLogo" />
                        </div>

                        <div class="alert">
                            <span class="closebtn"></span>
                            {error}
                        </div>

                        <label className="label">Enter your email:</label>
                        <input className="ul-inp" type="text" name="loginEmail" onChange={(e) => {
                            setEmail(e.target.value);
                        }} />
                        <label className="label">Enter your Password:</label>
                        <input className="ul-inp" type="password" name="loginPassword" onChange={(e) => {
                            setPassword(e.target.value);
                        }} />
                        
                            <button className="btn_uslogin" onClick={loginVendor}>LOGIN</button>
                        
                        <label className="label">Register yourself as a user.</label>
                        <Link id="signup-text" to="/userRegister">
                            <button className="btn_usignup">REGISTER</button>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
}
