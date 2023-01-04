import React, { useState } from "react";
import { useNavigate, Link, useLocation} from "react-router-dom";
import circleImage from "../components/Pics/avatar.jpg";
import logo from './Pics/GOODDIET Logo1.png'
import card1 from './Pics/burger-g298fcb83a_1920.jpg'
import Wlogo from './Pics/WhatsApp.png'
import Elogo from './Pics/Mail.png'
import './UserAbout.css';
export default function userMainAbout() {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <>
            <div className="App">

                <div className="uMainHeader">
                    <img id="ulimg" src={logo} alt="logo" className="logo" />
                    <h1> Good Diet </h1>
                    <div className="ucircleImg">
                    <Link id="ubtntext" to="/UserInformation"><p id="uHi">Hi {location.state.username}</p></Link>
                        <img id="ucimg" src={circleImage} alt="logo" className="loginLogo" />
                    </div>
                </div>
                <div className="uMainNavbar">
                    <Link id="ubtn_text" to="/UserMainPage" state={{ username: location.state.username, email:location.state.email,
                    dob: location.state.dob, phone:location.state.phone}}>
                        <button className="btn_uMainPage">HOME</button>
                    </Link>

                    <Link id="ubtn_text" to="/UserInformation" state={{ username: location.state.username, email:location.state.email,
                    dob: location.state.dob, phone:location.state.phone}}>
                        <button className="btn_uMainPage">User Profile</button>
                    </Link>
                    <Link id="ubtn_text" to="/UserAboutPage" state={{ username: location.state.username, email:location.state.email,
                    dob: location.state.dob, phone:location.state.phone}}>
                        <button className="btn_uMainPage">ABOUT</button>
                    </Link>
                    <Link id="ubtn_text" to="/WelcomePage">
                        <button className="btn_uMainPageL">LOGOUT</button>
                    </Link>
                </div>



                <div className="uaubgMain">
                    <div className="uabout">
                        <div className="uaboutcontent">
                            <h2><u>About Us</u></h2>
                            <p>Welcome to our food suggestion website! We are a team of foodies and cooking enthusiasts who have a passion for discovering new and delicious recipes. Our goal is to provide a one-stop destination for anyone looking for meal ideas or inspiration in the kitchen.<br></br><br></br>

                                On our website, you'll find a wide variety of recipe suggestions organized by category, including vegetarian, vegan, gluten-free, and more. We also have a section dedicated to international cuisines, so you can explore the flavors of the world from the comfort of your own home.<br></br><br></br>

                                In addition to recipe ideas, we also offer cooking tips, product recommendations, and other resources to help you become a better home cook. Our team is constantly searching for the latest and greatest in the world of food, and we can't wait to share it all with you.<br></br><br></br>

                                <b>Thank you for visiting our website. We hope you find something that inspires you in the kitchen!</b></p>

                        </div>
                    </div>

                </div>

                <div className="ContactInfo">
                    <div className="fPersonal">
                        <hr></hr>
                        <h3>About Us</h3>
                        <p>W want to promote best restaurants and we want to help people to choose special food.</p>
                        <hr></hr>
                        <h3>Contact Us</h3>
                        <div className="Whatsapp">
                            <img id="Wimg" src={Wlogo} alt="Wlogo" className="WLogo" />
                            <p><b>Faizan Abbas---</b>+92312-1798739<br></br><b>M.Adil Yousuf---</b>+92334-8103737<br></br><b>Ahmad Talha---</b>+92305-4703859</p>
                        </div>
                        <div className="Email">
                            <img id="Eimg" src={Elogo} alt="Elogo" className="ELogo" />
                            <p><b>Faizan Abbas---</b>faizan.abbas.fsc@gmail.com<br></br><b>M.Adil Yousuf---</b>aadilyusuf99@gmail.com<br></br><b>Ahmad Talha---</b>ahmadtalha963@gmail.com</p>
                        </div>
                        <hr></hr>

                    </div>
                    <div className="finfo">
                        <hr></hr>
                        <h3>Information</h3>
                        <ul>
                            <li>Restaurants</li>
                            <li>Foods</li>
                            <li>Ratings</li>
                        </ul>
                        <hr></hr>
                        <h3>Helpful links</h3>
                        <ul>
                            <li>Services</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Supports</li>
                        </ul>
                        <hr></hr>

                    </div>

                    <div className="fFounder">
                        <hr></hr>
                        <h3>Founders Name</h3>
                        <p><b>Adil Yousuf</b><br></br><b>Faizan Abbas</b><br></br><b>Ahmad Talha</b></p>

                        <hr></hr>
                        <h3>Founders Registration numbers</h3>
                        <p>2020CS402<br></br>2020CS409<br></br>2020CS420<br></br><br></br></p>
                        <hr></hr>

                    </div>
                </div>




            </div>
        </>
    );
}
