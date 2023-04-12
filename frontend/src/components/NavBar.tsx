import React from "react";
import { Link } from "react-router-dom";

const HomeNavBar: React.FC = (): JSX.Element => {
  return (
    <div className="mt-0 transition-all  flex flex-row items-center bg-white border-solid  border-b-2 border-black">
      <p className="text-lg font-medium flex left mx-8 text-black py-4">Logo</p>
      <ul className="text-lg font-medium flex ml-auto mx-8 text-black py-4">
      <li className="mr-5">
          <Link to="/Dashboard">Dashboard</Link>
        </li>
        <li className="mr-5">
          <Link to="/Members">Members</Link>
        </li>
        <li className="mr-5">
          <Link to="/Spotify">Spotify</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomeNavBar;
