import React from "react";
import HomeNavBar from "../components/NavBar";
import Footer from "../components/Footer"
import ConcertCards from "../components/ConcertCards";
import Poster from "../components/Poster";

function Home() {
    return (
        <div className="flex flex-col justify-between relative font-bold">
            <HomeNavBar />
            <Poster/>
            {/* <ConcertCards /> */}
            <Footer />
        </div>
    );
}

export default Home;
