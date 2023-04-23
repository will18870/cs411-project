import React from "react";
import { Link } from "react-router-dom";
import { handleSpotifyLogin } from "../components/LoginOauth";


interface Props { }

const Status: React.FC<Props> = () => {
  const isLoggedIn = localStorage.getItem('spotify_access_token') !== null;

  return (
    <div className="pl-8">
      {isLoggedIn ? (
        <p>Logged</p>
      ) : (
        <p>No</p>
      )}
    </div>
  );
};

const HomeNavBar: React.FC = (): JSX.Element => {
  return (
    <div className="mt-0 transition-all  flex flex-row items-center bg-white border-solid  border-b-2 border-black">
      <p className="text-lg font-medium flex left mx-8 text-black py-4">Logo</p>
      <ul className="text-lg font-medium flex ml-auto mx-8 text-black py-4">
        <li className="mr-5">
          <Link to="/Dash">Dashboard</Link>
        </li>
        <li className="mr-5">
          <Link to="/Members">Members</Link>
        </li>
        <li className="mr-5">
          <Link to="/Spotify" onClick={handleSpotifyLogin} >Spotify</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Status />
        </li>
      </ul>
    </div>
  );
};

export default HomeNavBar;
