import React, { useState, useEffect } from "react";
import { Navigation } from "./components/loggedout/navigation";
import { Header } from "./components/loggedout/header";
import { Features } from "./components/loggedout/features";
import { Gallery } from "./components/loggedout/gallery";
import { Testimonials } from "./components/loggedout/testimonials";
import { Team } from "./components/loggedout/Team";
import { Contact } from "./components/loggedout/contact";
import { About } from "./components/loggedout/about";
import { Services } from "./components/loggedout/services";
import SignupScreen from "./components/loggedout/Signup";
import LoginScreen from "./components/loggedout/Login";
import Chat from "./components/loggedIn/Chats";
import Event from "./components/loggedIn/CreateEvent";
import CreateTeam from "./components/loggedIn/CreateEvent";
import Home from "./components/loggedIn/Home";
import Project from "./components/loggedIn/Projects";
import Navbar from "./components/loggedIn/Navigation";
import { HeaderNav } from "./components/loggedIn/HeaderNav";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginScreen/>} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route exact path="/home" element= { <div> <Navbar /> <Home /> </div> } />
        <Route path="/team" element={<div> <Navbar />  <CreateTeam /> </div>} />
        <Route path="/project" element={<div> <Navbar /> <Project /> </div> } />
        <Route path="/event" element={ <div> <Navbar /> <Event /> </div> } />
        <Route path="/chats" element={ <div> <Navbar /> <hr/>  <hr/>  <hr/>  <hr style={{backgroundColor:"white"}}/> <Chat /> </div> } />


        <Route
          path="/*"
          element={
            <div>
              <Navigation />
              <Header data={landingPageData.Header} />
              <Features data={landingPageData.Features} />
              <About data={landingPageData.About} />
              <Services data={landingPageData.Services} />
              <Gallery data={landingPageData.Gallery} />
              <Testimonials data={landingPageData.Testimonials} />
              <Team data={landingPageData.Team} />
              <Contact data={landingPageData.Contact} />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
