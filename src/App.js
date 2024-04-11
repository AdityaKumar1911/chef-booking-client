import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbaar/Navbar";
import Home from "./components/Pages/Home";
import Footer from "./components/Footer/Footer";
import SignupForm from "./components/Form/SignupForm";
import LoginForm from "./components/Form/LoginForm";
import Booking from "./components/ChefBooking/Booking";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/SignupForm" element={<SignupForm />}></Route>
          <Route path="/LoginForm" element={<LoginForm/>}></Route>
          <Route path="/Booking" element={<Booking/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
