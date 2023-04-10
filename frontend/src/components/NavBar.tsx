import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = (): JSX.Element => {
  return (
    <div className="mt-0 transition-all  flex flex-row items-center bg-black">
      <div className="p-5 bg-blend-color-dodge text-white">Logo</div>
      <ul className="text-lg font-medium flex mx-8 text-white">
        <li className="mr-5">
          <Link to="/">Home</Link>
        </li>
        <li className="mr-5">
          <Link to="/Concert">Concerts</Link>
        </li>
      </ul>
      <ul className="text-lg font-medium flex ml-auto mx-8 text-white">
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

export default NavBar;
