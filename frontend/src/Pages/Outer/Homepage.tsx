import React from "react";
import HomeNavBar from "../../components/Outer/NavBar";
import Footer from "../../components/Outer/Footer"
import ConcertCards from "../../components/Dash/ConcertCards";
import Poster from "../../components/Outer/HomepageContent";

function Home() {
    return (
        <div className="flex flex-col justify-between relative font-bold">
            <HomeNavBar />
            <Poster/>
            <ConcertCards/>
            <Footer />
        </div>
    );
}

export default Home;
