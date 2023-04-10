import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer"
import ConcertCards from "../components/ConcertCards";
import Poster from "../components/Poster";

function Home() {
    return (
        <div className="flex flex-col justify-between relative font-bold">
            <NavBar />
            <Poster/>
            <ConcertCards />
            <Footer />
        </div>
    );
}

export default Home;
