import React from "react";
import NavBar from "../components/NavBar";
// import Carousel from "../components/Carousel";
import Footer from "../components/Footer"
import ConcertCards from "../components/ConcertCards";
import Poster from "../components/Poster";

function Home() {
    return (
        <div className="flex flex-col justify-between relative font-bold">
            <NavBar />
            {/* <Carousel /> */}
            <Poster/>
            <ConcertCards />
            <Footer />
        </div>
    );
}

export default Home;
