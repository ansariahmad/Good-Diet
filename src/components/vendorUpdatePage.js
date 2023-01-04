import React, { useState } from "react";
import { useNavigate, Link, useLocation} from "react-router-dom";
import logo from "../components/Pics/signup.png";
import './vendorUpdatePage.css';
import Axios from "axios";
export default function vendorUpdatePage() {

    const disable={
        pointerEvents:"none"
    }

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [error, setError] = useState("");
    const [dob, setDob] = useState("");
    var isTrue = true;
    const location = useLocation();
    const navigate = useNavigate();

    const updateVendor = (event) => {
        if (
            password === "" ||
            username === "" ||
            dob === ""
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
            Axios.post("https://goodfood-app-node.herokuapp.com/api/auth/vendorUpdate", {
                username: username,
                email: location.state.email,
                password: password,
                dob: dob,
            }).then((response) => {            
                if (response.data === "Registered") {
                    navigate("/vendorMainPage",
                    { state: { email: location.state.email , password: password, username: username, dob: dob, phone:location.state.phone } });
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
                        <h1 className="vUpdateTitle">Update Vendor Cridentials</h1>
                        <div className="vupdatelogo">
                            <img src={logo} alt="logo" className="vsignLogo" />
                        </div>

                        <div class="alert">
                            <span class="closebtn"></span>
                            {error}
                        </div>
                        
                        <div className="col">
                            <div className="col1">
                                <label className="label">Enter your name:</label>
                                <input className="ul-inp" type="text" name="registerName" onChange={(e) => {
                                    setUsername(e.target.value);
                                }} />
                                <label className="label">Enter your password:</label>
                                <input className="ul-inp" type="password" name="registerPassword" onChange={(e) => {
                                    setPassword(e.target.value);
                                }} />
                                <label className="label">Re-enter your password:</label>
                                <input className="ul-inp" type="password" name="registerRePassword" onChange={(e) => {
                                    setRepeatPassword(e.target.value);
                                }} />
                            </div>

                            <div className="col2">
                                <label className="label">Enter your email:</label>
                                <input className="ul-inp" type="email" name="registerEmail" placeholder={location.state.email} style={disable}/>
                                <label className="label">Enter your date of birth:</label>
                                <input className="ul-inp" type="date" name="registerDOB" onChange={(e) => {
                                    setDob(e.target.value);
                                }} />

                                    <button className="btn_uregister" onClick={updateVendor}>UPDATE</button>
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
