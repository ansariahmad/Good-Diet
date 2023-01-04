import React, { useState, useEffect} from "react";
import { useNavigate, Link, useLocation} from "react-router-dom";
import circleImage from "../components/Pics/avatar.jpg";
import logo from './Pics/GOODDIET Logo1.png';
import card1 from './Pics/burger-g298fcb83a_1920.jpg';
import Wlogo from './Pics/WhatsApp.png';
import Elogo from './Pics/Mail.png';
import star from './Pics/Star.png';
import star1 from './Pics/Star1.png';
import './singleitem.css';
import Axios from 'axios';


export default function userMainAbout() {
    const navigate = useNavigate();
    const location = useLocation();
    const [restaurantData, setRestaurantData] = useState([]);
    const [restaurantRating, setRestaurantRating] = useState("");

    const viewData = (event) => {
        Axios.post("https://goodfood-app-node.herokuapp.com/api/auth/getVendorDetails",
        {
            email: location.state.email,
        }).then((response) => {
            if (response.data === "Not-Found") {
                alert(location.state.email);
            }
            else{
                setRestaurantData(response.data);
                console.log("Items Fetched");
            }
        });
    };

    const handleChangeRating_5 = (event) => {
        setRestaurantRating(5);
    };
    const handleChangeRating_4 = (event) => {
        setRestaurantRating(4);
    };
    const handleChangeRating_3 = (event) => {
        setRestaurantRating(3);
    };
    const handleChangeRating_2 = (event) => {
        setRestaurantRating(2);
    };
    const handleChangeRating_1 = (event) => {
        setRestaurantRating(1);
    };

    const submitRating = (event) => {
        console.log(restaurantRating);
        Axios.post("https://goodfood-app-node.herokuapp.com/api/auth/giveRating",
        {
            item_id: location.state.item_id,
            rating: ((restaurantRating) + Number(location.state.item_rating)) / (Number(location.state.item_rating_clicks) + 1),
            item_rating_clicks: Number(location.state.item_rating_clicks) + 1,

        }).then((response) => {
            if (response.data === "Rating-Not-Added") {
                alert("Bhai rating main msla aa rha.");
            }
            else{
                alert(rating, restaurantRating);
            }
        });
        event.preventDefault();
    };

    useEffect(() => {
        viewData();
    }, []);

    return (
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



            <div className="SingleItemMain">
                <h2 id="heading">Item Information</h2>
                <div className="SingleItemContent1">
                    <div className="itemImg">
                        <img src={card1} alt="logo" className="loginLogo" />
                    </div>
                    <div className="itemInfo">
                        <h2>{location.state.item_name}</h2>
                        <h4>Rs. {location.state.item_price}</h4>
                        <p><br></br><b>Category:</b>{location.state.item_category}<br></br><b>Description:</b><br></br>{location.state.item_description}<br></br></p>
                    </div>
                </div>
                <h2 id="heading">Restaurant Information</h2>
                <div className="SingleItemContent2">
                    {
                        restaurantData.map((val) => {
                            return (
                                <div>
                                    <p><br></br><b>Name:</b>{val.restaurant_name}<br></br><b>Phone No.:</b>{val.restaurant_contact_no}<br></br>
                                    <b>Email:</b>{val.restaurant_email}<br></br>
                                    <b>Address:</b>Street# {val.restaurant_street}, {val.restaurant_sector}, {val.restaurant_city}<br></br><b>Status:</b><b id="open">OPEN</b></p>
                                </div>
                            );
                        }
                        )
                    }
                    {/* <p><br></br><b>Name:</b>name{}<br></br><b>Phone No.:</b>0300-5105301<br></br><b>Email:</b>forknknives@gmail.com<br></br><b>Address:</b>55JM+7FW, Service Rd, Civil Lines, Gujranwala, Punjab<br></br><b>Status:</b><b id="open">OPEN</b></p> */}
                
                </div>
                <h2 id="heading">Reviews & Ratings</h2>
                <div className="SingleItemContent3">
                    <div className="Show">
                        <img id="Star" src={star1} alt="Elogo" className="Star" />
                        <p><b>{location.state.item_rating}/5</b>({location.state.item_rating_clicks})</p>
                        <hr></hr>
                    </div>
                    <div className="Give">
                        <p><b>Want to give ratings?</b></p>
                        <div className="GiveButtons">
                            <button className="btn_star" title="5 Stars" onClick={handleChangeRating_5} >
                                <img id="bStar" src={star1} alt="Elogo" className="bStar" />
                            </button>
                            <button className="btn_star" title="4 Stars" onClick={handleChangeRating_4}>
                                <img id="bStar" src={star1} alt="Elogo" className="bStar" />

                            </button>
                            <button className="btn_star" title="3 Stars" onClick={handleChangeRating_3}>
                                <img id="bStar" src={star1} alt="Elogo" className="bStar" />

                            </button>
                            <button className="btn_star" title="2 Stars" onClick={handleChangeRating_2}>
                                <img id="bStar" src={star1} alt="Elogo" className="bStar" />

                            </button>
                            <button className="btn_star" title="1 Star" onClick={handleChangeRating_1}>
                                <img id="bStar" src={star1} alt="Elogo" className="bStar" />

                            </button>
                        </div>
                        <button className="btn_SubmitStar" onClick={submitRating}>
                            Submit
                        </button>

                    </div>
                </div>
                <div className="itemsContactInfo">
                    <div className="itemsfPersonal">
                        <hr></hr>
                        <h3>About Us</h3>
                        <p>W want to promote best restaurants and we want to help people to choose special food.</p>
                        <hr></hr>
                        <h3>Contact Us</h3>
                        <div className="itemsWhatsapp">
                            <img id="itemsWimg" src={Wlogo} alt="Wlogo" className="WLogo" />
                            <p><b>Faizan Abbas---</b>+92312-1798739<br></br><b>M.Adil Yousuf---</b>+92334-8103737<br></br><b>Ahmad Talha---</b>+92305-4703859</p>
                        </div>
                        <div className="itemsEmail">
                            <img id="itemsEimg" src={Elogo} alt="Elogo" className="ELogo" />
                            <p><b>Faizan Abbas---</b>faizan.abbas.fsc@gmail.com<br></br><b>M.Adil Yousuf---</b>aadilyusuf99@gmail.com<br></br><b>Ahmad Talha---</b>ahmadtalha963@gmail.com</p>
                        </div>
                        <hr></hr>

                    </div>
                    <div className="itemsfinfo">
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

                    <div className="itemsfFounder">
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
        </div>
    );
}
