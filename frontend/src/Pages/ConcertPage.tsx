import React from "react";
import NavBar from "../components/NavBar";
import ConcertCards from "../components/ConcertCards";
import Footer from "../components/Footer";

const ConcertPage: React.FC = (): JSX.Element => {
  return (
    <div className={"conwrap"}>
      <NavBar /> 
      <ConcertCards />
      <Footer /> 
    </div>
  );
};

export default ConcertPage;
