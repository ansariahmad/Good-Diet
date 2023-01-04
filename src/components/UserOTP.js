import React, { useState } from "react";
import { useNavigate, Link, useLocation} from "react-router-dom";
import otplogo from "../components/Pics/OTP.png";
import './UserOTP.css'
import Axios from "axios";

export default function ulogin() {
    const location = useLocation();
    const [userOtp, setUserOtp] = useState(location.state.otp);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    var isTrue = true;

    const registerUser = (event) => {

        if (userOtp == location.state.otp){
            isTrue = true
        }
        else{
            alert(location.state.email);
            setError("Wrong Otp");
            isTrue = false;
        }
        if (isTrue){
        Axios.post("https://goodfood-app-node.herokuapp.com/api/auth/userRegister", {
            username: location.state.username,
            email: location.state.email,
            password: location.state.password,
            dob: location.state.dob,
            phone: location.state.phone
        }).then((response) => {            
            if (response.data === "Registered") {
                navigate("/userLogin");
            }
        });
    }
        event.preventDefault();
    }

    const otpAgain = (event) => {
        console.log(location.state?.otp);
            Axios.post("https://goodfood-app-node.herokuapp.com/api/auth/validateUser", {
                email : location.state.email,
            }).then((response) => {
                if (response.data === "error"){
                    setError("An error occurred. Check backend!")
                    isTrue = false;
                }
                else{
                    setOtp(response.data);
                }
            });
        event.preventDefault();
    }
    return (
        <>
            <div className="App">
                <div className='uotpForm'>
                    <div className="uotp">
                        {/* <h1 id="hiu">Hello User!</h1> */}
                        <div className="otplogo">
                            <img src={otplogo} alt="logo" className="otpLogo" />
                        </div>
                        <label className="otplabel">Enter OTP just received:</label>
                        <input className="otp-inp" type="text" pattern="[0-9]*" name="loginEmail" onChange={(e) => {
                            setUserOtp(e.target.value);
                        }} />
                        
                            <button className="btn_uotp" onClick={registerUser}>SUBMIT</button>
                        
                        <label className="otplabel2">Want to get OTP Again? <br></br>Click here</label>
                        
                            <button className="btn_uotp" onClick={otpAgain}>Get OTP Again</button>
                        
                    </div>

                </div>
            </div>
        </>
    );
}
