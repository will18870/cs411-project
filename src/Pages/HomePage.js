import React from "react";
import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer"
import ConcertCards from "../components/ConcertCards";

function HomePage() {
    return (
        <div className={"home"}>
            <NavBar/>
            <Carousel/>
            <ConcertCards/>
            <Footer/>
        </div>
    );
}

export default HomePage;
