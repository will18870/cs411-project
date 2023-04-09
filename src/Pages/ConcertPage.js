import React from "react";
import NavBar from "../components/NavBar";
import ConcertCards from "../components/ConcertCards";
import Footer from "../components/Footer"

function ConcertPage() {
    return (
        <div className={"conwrap"}>
            <NavBar/>
            <ConcertCards />
            <Footer/>
        </div>
    );
}

export default ConcertPage;
