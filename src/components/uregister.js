import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../components/Pics/signup.png";
import './uregister.css';
import Axios from "axios";
import validator from "validator";

export default function ulogin() {
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


    const registerUser = (event) => {
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
        if (isTrue){
        Axios.post("https://goodfood-app-node.herokuapp.com/api/auth/checkLoginUser", {
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
                console.log(isTrue);
                validateUser();
            }
        });
    }
        event.preventDefault();
    };

    const validateUser = (event) =>{
        Axios.post("https://goodfood-app-node.herokuapp.com/api/auth/validateUser", {
                email : email,
            }).then((response) => {
                if (response.data === "error"){
                    setError("An error occurred. Check backend!")
                    isTrue = false;
                }
                else{
                    setOtp(response.data);
                    console.log(response.data);
                    navigate("/UserOTPVerification",
                    { state: { email: email, password: password, username: username, dob: dob, otp: response.data, phone: phone } });
                }
            });
    }

    return (
        <>
            <div className="App">
                <div className='uregisterForm'>
                    <div className="uregister">
                        <h1 className="uregisterTitle">Register User</h1>

                        <div className="signlogo">
                            <img src={logo} alt="logo" className="loginLogo" />
                        </div>

                        <div class="alert">
                            <span class="closebtn"></span>
                            {error}
                        </div>

                        <div className="user-SignUp-col">
                            <div className="user-SignUp-col1">
                                <label className="user-SignUp-label">Enter your name:</label>
                                <input className="us-inp" type="text" name="registerName" onChange={(e) => {
                                    setUsername(e.target.value);
                                }} />
                                <label className="user-SignUp-label">Enter your password:</label>
                                <input className="us-inp" type="password" name="registerPassword" onChange={(e) => {
                                    setPassword(e.target.value);
                                }} />
                                <label className="user-SignUp-label">Re-enter your password:</label>
                                <input className="us-inp" type="password" name="registerRePassword" onChange={(e) => {
                                    setRepeatPassword(e.target.value);
                                }} />
                            </div>

                            <div className="User-SignUp-col2">
                                <label className="user-SignUp-label">Enter your email:</label>
                                <input className="us-inp" type="email" name="registerEmail" onChange={(e) => {
                                    setEmail(e.target.value);
                                }} />
                                <label className="user-SignUp-label">Enter your Number:</label>
                                <input className="us-inp" type="text" pattern="[0-9]*" name="registerEmail" onChange={(e) => {
                                    setPhone(e.target.value);
                                }} />
                                <label className="user-SignUp-label">Enter your date of birth:</label>
                                <input className="us-inp" type="date" name="registerDOB" onChange={(e) => {
                                    setDob(e.target.value);
                                }} />
                                
                                    <button className="btn_uregister" onClick={registerUser}>Submit</button>
                                
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
