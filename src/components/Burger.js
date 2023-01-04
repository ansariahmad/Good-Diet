import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import circleImage from "../components/Pics/avatar.jpg";
import logo from './Pics/GOODDIET Logo1.png'
import card1 from './Pics/burger-g298fcb83a_1920.jpg'
import Wlogo from './Pics/WhatsApp.png'
import Elogo from './Pics/Mail.png'
import './Burger.css';
export default function userMainAbout() {

    return (
        <>
            <div className="App">

                <div className="uMainHeader">
                    <img id="ulimg" src={logo} alt="logo" className="logo" />
                    <h1> Good Diet </h1>
                    <div className="ucircleImg">
                        <p id="uHi">Hi Username</p>
                        <img id="ucimg" src={circleImage} alt="logo" className="loginLogo" />
                    </div>
                </div>
                <div className="uMainNavbar">
                    <Link id="ubtn_text" to="/UserMainPage">
                        <button className="btn_uMainPage">HOME</button>
                    </Link>
                    <select name="Category" id="select_Category">
                        <option className="opt_Category">CATEGORIES</option>
                    <option className="opt_Category"><Link to="">BURGER</Link></option>
                    <option className="opt_Category"><Link to="">PIZZA</Link></option>
                    <option className="opt_Category"><Link to="">DESI</Link></option>
                    <option className="opt_Category"><Link to="">CHINESE</Link></option>

                    </select>
                    <Link id="ubtn_text" to="">
                        <button className="btn_uMainPage">ALL ITEMS</button>
                    </Link>
                    <Link id="ubtn_text" to="/UserAboutPage">
                        <button className="btn_uMainPage">ABOUT</button>
                    </Link>
                    <Link id="ubtn_text" to="/WelcomePage">
                        <button className="btn_uMainPageL">LOGOUT</button>
                    </Link>
                </div>



                <div className="uatbgMain">
                    <div className="atSearchContainer">
                        <input id="atsearch" type="text" placeholder="Search" name="search" onChange={(e) => {
                        }} />
                        <button id="btn_atsearch">Search</button>
                    </div>
                    <div className="BTRH">
                        <h2>BURGERS</h2>
                    </div>
                    <div className="User-Card-Body1">
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src={card1} alt="card" className="card" />
                                </div>
                                <div class="flip-card-back">
                                    <h1>Mighty Burger</h1>
                                    <p><b>Forks & Knives</b><br></br>Mumtaz Market Gujranwala</p>
                                </div>
                            </div>
                        </div>
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src={card1} alt="card" className="card" />
                                </div>
                                <div class="flip-card-back">
                                    <h1>Mighty Burger</h1>
                                    <p><b>Forks & Knives</b><br></br>Mumtaz Market Gujranwala</p>
                                </div>
                            </div>
                        </div>
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src={card1} alt="card" className="card" />
                                </div>
                                <div class="flip-card-back">
                                    <h1>Mighty Burger</h1>
                                    <p><b>Forks & Knives</b><br></br>Mumtaz Market Gujranwala</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="User-Card-Body2">
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src={card1} alt="card" className="card" />
                                </div>
                                <div class="flip-card-back">
                                    <h1>Mighty Burger</h1>
                                    <p><b>Forks & Knives</b><br></br>Mumtaz Market Gujranwala</p>
                                </div>
                            </div>
                        </div>
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src={card1} alt="card" className="card" />
                                </div>
                                <div class="flip-card-back">
                                    <h1>Mighty Burger</h1>
                                    <p><b>Forks & Knives</b><br></br>Mumtaz Market Gujranwala</p>
                                </div>
                            </div>
                        </div>
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src={card1} alt="card" className="card" />
                                </div>
                                <div class="flip-card-back">
                                    <h1>Mighty Burger</h1>
                                    <p><b>Forks & Knives</b><br></br>Mumtaz Market Gujranwala</p>
                                </div>
                            </div>
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
