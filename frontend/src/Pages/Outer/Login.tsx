import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { handleSpotifyLogin } from '../../components/LoginOauth';

const Login = () => {
  const [error, setError] = useState<string | null>(null);  

  return (
    <div className="flex items-center justify-end h-screen pr-32 bg-gray-50">
      <div className="w-1/2 max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Login</h2>
          <Link to="/" className="text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 17l-5-5m0 0l5-5m-5 5h12"
              />
            </svg>
          </Link>
        </div>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className='flex flex-col '>
        <button
          // onClick={handleGoogleLogin}
          className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg
           hover:bg-red-700 transition-colors duration-300 mb-4"
        >
          Login with Google
        </button>
        <button
          onClick={handleSpotifyLogin}
          className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg 
          hover:bg-red-700 transition-colors duration-300 mb-4"

        >
          Login with Spotify
        </button>
        {/* <button
          onClick={handleLinkedInLogin}
          className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300 mb-4"
        >
          Login with linkedIn
        </button> */}
        </div>
       
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-gray-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;