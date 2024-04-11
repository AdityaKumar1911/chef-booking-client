import React from 'react';
import Slider from '../Slider/Slider';
// import BrowseChefs from './BrowseChefs';
import '../Pages/Home.css'
import Dishhes from '../Dishhes/Dishhes';
import ChefList from '../ChefList/ChefList';
import AddChefForm from '../AddChefForm/AddChefForm';

const Home = () => {
  return (
    <div className="container-flued  ">
      {/* <h1>Welcome to Chef Booking System</h1>
      <p>Find and book the best chefs for your events!</p> */}
      <Slider/>
      <Dishhes/>
      <AddChefForm/>
      <ChefList/>
      {/* <BrowseChefs/> */}
    </div>
  );
};

export default Home;
