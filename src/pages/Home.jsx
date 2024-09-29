import React from "react";
import NavBar from "../components/NavBar";
import Details from "../components/Details";
import VideoComponent from "../components/VideoComponent";
import WhyChoose from "../components/WhyChoose";
import SquatCompo from "../components/SquatCompo";
import ClientSay from "../components/ClientSay";
import ThingsYouNeed from "../components/ThingsYouNeed";
import Revolutionize from "../components/Revolutionize";
import Footer from "../components/Footer";

const Home = () => {
  
  return (
    <>
      <div className="flex flex-col">
        <NavBar />
        <VideoComponent />
        <Details />
        <WhyChoose />
        <SquatCompo />
        <ClientSay />
        <ThingsYouNeed />
        <Revolutionize/>
        <Footer/>
      </div>
    </>
  );
};

export default Home;
