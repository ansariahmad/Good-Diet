import React, { useState, useEffect} from "react";
import { useNavigate, Link, useLocation} from "react-router-dom";
import circleImage from "../components/Pics/avatar.jpg";
import logo from './Pics/GOODDIET Logo1.png'
import card1 from './Pics/burger-g298fcb83a_1920.jpg'
import Wlogo from './Pics/WhatsApp.png'
import Elogo from './Pics/Mail.png'
import Axios from 'axios'
import './userMainPage.css';

export default function userMainAbout() {
    const location = useLocation();
    const navigate = useNavigate();
    const [foodBurger, setFoodBurger] = useState([]);
    const [foodPizza, setFoodPizza] = useState([]);
    const [foodDesi, setFoodDesi] = useState([]);

    const viewFoodBurger = (event) => {
        Axios.post("https://goodfood-app-node.herokuapp.com/api/auth/getAllItemsBurger", {
        }).then((response) => {
            if (response.data === "Not-Found") {
                // alert("You do not have Burgers");
            }
            else{
                setFoodBurger(response.data);
                // console.log(foods);
                // console.log("Items Fetched");
            }
        });
    };

    const viewFoodPizza = (event) => {
        Axios.post("https://goodfood-app-node.herokuapp.com/api/auth/getAllItemsPizza", {
        }).then((response) => {
            if (response.data === "Not-Found") {
                // alert("You do not have PIZZA");
            }
            else{
                setFoodPizza(response.data);
                // console.log(foods);
                // console.log("Items Fetched");
            }
        });
    };

    const viewFoodDesi = (event) => {
        Axios.post("https://goodfood-app-node.herokuapp.com/api/auth/getAllItemsDesi", {
        }).then((response) => {
            if (response.data === "Not-Found") {
                // alert("You do not have Desi");
            }
            else{
                setFoodDesi(response.data);
                // console.log(foods);
                // console.log("Items Fetched");
            }
        });
    };

    useEffect(() => {
        viewFoodDesi();
        viewFoodPizza();
        viewFoodBurger();
    }, []);

    return (
        <>
            <div className="App">

                <div className="uMainHeader">
                    <img id="ulimg" src={logo} alt="logo" className="logo" />
                    <h1> Good Diet </h1>
                    <div className="ucircleImg">
                        <p id="uHi">Hi {location.state.username}</p>
                        <img id="ucimg" src={circleImage} alt="logo" className="loginLogo" />
                    </div>
                </div>
                <div className="uMainNavbar">
                    <Link id="ubtn_text" to="/UserMainPage" state={{ username: location.state.username, email:location.state.email,
                    dob: location.state.dob, phone:location.state.phone}}>
                        <button className="btn_uMainPage"
                        >HOME</button>
                    </Link>
                    
                    <Link id="ubtn_text" to="/UserInformation" state={{ username: location.state.username, email:location.state.email,
                    dob: location.state.dob, phone:location.state.phone }}>
                        <button className="btn_uMainPage"
                        >User Profile</button>
                    </Link>
                    <Link id="ubtn_text" to="/UserAboutPage" state={{ username: location.state.username, email:location.state.email,
                    dob: location.state.dob, phone:location.state.phone}}>
                        <button className="btn_uMainPage">ABOUT</button>
                    </Link>
                    <Link id="ubtn_text" to="/WelcomePage">
                        <button className="btn_uMainPageL">LOGOUT</button>
                    </Link>
                </div>



                <div className="ubgMain">
                    <div className="userMainPageContent">
                        <h7>We have a good Meal for you.</h7>
                        <input id="search" type="text" placeholder="Search" name="search" onChange={(e) => {
                        }} />
                        <button id="btn_usearch">Search</button>

                    </div>
                    <div className="TRH">
                        <h2>TOP RATED ITEMS</h2>
                    </div>
                    
                    <div class="grid-container">
                    
                        {foodBurger.map((val)=>{
                            
                            return (
                                <>
                            <div class="grid-item">
                                <button className="a-btn" onClick={()=>{
                                    navigate('/SingleItem', {
                                        state: {email:val.vendor_email, item_name:val.item_name, item_price:val.item_price,
                                            item_description:val.item_description, item_category:val.item_category,
                                            username:location.state.username, item_rating:val.item_rating, item_rating_clicks:val.item_rating_clicks,
                                            item_id:val.item_id}
                                    })
                                }}>
                                    <div class="flip-card">
                                        <div class="flip-card-inner">
                                            <div class="flip-card-front">
                                                <img src={card1} alt="card" className="card" />
                                            </div>
                                            <div class="flip-card-back">
                                                <h1>{val.item_name}</h1>
                                                <p><b>Forks & Knives</b><br></br>Mumtaz Market Gujranwala</p>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                    </>
                    )})}
                    </div>
                </div>
                
                <div class="grid-container">
                <h1 class="pizza" id="pizza">Pizza</h1>
                        {foodPizza.map((val)=>{
                            
                            return (
                                <>
                                
                            <div class="grid-item">
                                <button className="a-btn" onClick={()=>{
                                    navigate('/SingleItem', {
                                        state: {email:val.vendor_email, item_name:val.item_name, item_price:val.item_price,
                                            item_description:val.item_description, item_category:val.item_category,
                                            username:location.state.username, item_rating:val.item_rating, item_rating_clicks:val.item_rating_clicks,
                                            item_id:val.item_id}
                                    })
                                }}>
                                    <div class="flip-card">
                                        <div class="flip-card-inner">
                                            <div class="flip-card-front">
                                                <img src={card1} alt="card" className="card" />
                                            </div>
                                            <div class="flip-card-back">
                                                <h1>{val.item_name}</h1>
                                                <p><b>Forks & Knives</b><br></br>Mumtaz Market Gujranwala</p>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                    </>
                    )})}
                    </div>

                    <div class="grid-container">
                        {foodDesi.map((val)=>{

                            return (
                                <>
                            <div class="grid-item">
                                <button className="a-btn" onClick={()=>{
                                    navigate('/SingleItem', {
                                        state: {email:val.vendor_email, item_name:val.item_name, item_price:val.item_price,
                                            item_description:val.item_description, item_category:val.item_category,
                                            username:location.state.username, item_rating:val.item_rating, item_rating_clicks:val.item_rating_clicks,
                                            item_id:val.item_id}
                                    })
                                }}>
                                    <div class="flip-card">
                                        <div class="flip-card-inner">
                                            <div class="flip-card-front">
                                                <img src={card1} alt="card" className="card" />
                                            </div>
                                            <div class="flip-card-back">
                                                <h1>{val.item_name}</h1>
                                                <p><b>Forks & Knives</b><br></br>Mumtaz Market Gujranwala</p>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                    </>
                    )})}
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
                            {/* <li>Address</li>
                            <li>Price</li> */}
                        </ul>
                        <hr></hr>
                        <h3>Helpful links</h3>
                        <ul>
                            <li>Services</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Supports</li>
                            {/* <li>Price</li> */}
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
