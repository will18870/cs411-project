import React from "react";
import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer"
import ConcertCards from "../components/ConcertCards";
import New from "../components/new"; // this is the new component
import Newnew from "../components/newnew";

function HomePage() {
    return (
        <div class="flex flex-col justify-between relative ">
            <NavBar />
            {/* <Carousel /> */}
            <Newnew />
            {/* <New /> */}
            <ConcertCards />
            <Footer />
        </div>


    );
}

export default HomePage;
