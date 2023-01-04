// import './App.css';
import './components/ulogin';
import WelcomePage from './components/WelcomePage';
import UserLogin from './components/ulogin';
import VendorLogin from './components/vlogin';
import UserRegister from './components/uregister';
import VendorRegister from './components/vregister';
import VendorMainPage from './components/vendorMainPage';
import VendorProfile from './components/vendorProfile';
import VendorAddRes from './components/vendorAddRes';
import VendorViewRes from './components/vendorViewRes';
import VendorMainAbout from './components/vendorMainAbout';
import VendorLogout from './components/WelcomePage';
import VendorUpdate from './components/vendorUpdatePage';
import AddFoodItem from './components/addFoodItem';
import UserMainPage from './components/userMainPage';
import VendorAllItems from './components/allFoodItems';
import UserAllItems from './components/UserAllItems';
import UserOTP from './components/UserOTP';
import VendorOTP from './components/VendorOTP';
import UserAbout from './components/UserAbout';
import Burgers from './components/Burger';
import SingleItem from './components/singleitem';
import UserInformation from './components/UserInformation';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<WelcomePage />}></Route>
        <Route path='/userLogin' element={<UserLogin />}></Route>
        <Route path='/vendorLogin' element={<VendorLogin />}></Route>
        <Route path='/userRegister' element={<UserRegister />}></Route>
        <Route path='/vendorRegister' element={<VendorRegister />}></Route>
        <Route path='/vendorMainPage' element={<VendorMainPage />}></Route>
        <Route path='/vendorProfile' element={<VendorProfile />}></Route>
        <Route path='/vendorAddRes' element={<VendorAddRes />}></Route>
        <Route path='/vendorViewRes' element={<VendorViewRes />}></Route>
        <Route path='/vendorMainAbout' element={<VendorMainAbout />}></Route>
        <Route path='/allFoodItems' element={<VendorAllItems />}></Route>
        <Route path='/WelcomePage' element={<VendorLogout/>}></Route>
        <Route path='/vendorUpdatePage' element={<VendorUpdate/>}></Route>
        <Route path='/addFoodItem' element={<AddFoodItem/>}></Route>
        <Route path='/UserMainPage' element={<UserMainPage/>}></Route>
        <Route path='/UserAllFoodItems' element={<UserAllItems/>}></Route>
        <Route path='/UserOTPVerification' element={<UserOTP/>}></Route>
        <Route path='/VendorOTPVerification' element={<VendorOTP/>}></Route>
        <Route path='/UserAboutPage' element={<UserAbout/>}></Route>
        <Route path='/Burger' element={<Burgers/>}></Route>
        <Route path='/SingleItem' element={<SingleItem/>}></Route>
        <Route path='/UserInformation' element={<UserInformation/>}></Route>
      </Routes>
    </Router>
  
    </>
  );
}

export default App;
