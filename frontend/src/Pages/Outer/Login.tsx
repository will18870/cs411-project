import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [error, setError] = useState<string | null>(null);

  const handleGoogleLogin = async () => {
    const clientId = '720139912748-v598kftrdonmlafi0365gitm8dqqiv75.apps.googleusercontent.com';
    const redirectUri = 'https://localhost:5173';

    try {
      const { data } = await axios.get(`https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email&access_type=offline&include_granted_scopes=true&response_type=code&redirect_uri=${redirectUri}&client_id=${clientId}`);
      window.location.href = data;
    } catch (error) {
      console.error(error);
      setError("Failed to login with Google");
    }
  };

  const handleSpotifyLogin = async () => {
    const clientId = 'fcecfcf66e8a457f9dd8e8c25f4b8b21';
    const redirectUri = 'https://localhost:5173';

    try {
      const { data } = await axios.get(`https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=user-read-private%20user-read-email&show_dialog=true`);
      window.location.href = data;
    } catch (error) {
      console.error(error);
      setError("Failed to login with Spotify");
    }
  };

  const handleLinkedInLogin = async () => {
    const clientId = '78tujv13mp98dq';
    const redirectUri = 'https://localhost:5173';

    try {
      const { data } = await axios.get(`https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=987654321&scope=r_liteprofile%20r_emailaddress%20w_member_social`);
      window.location.href = data;
    } catch (error) {
      console.error(error);
      setError("Failed to login with LinkedIn");
    }
  };

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
          onClick={handleGoogleLogin}
          className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300 mb-4"
        >
          Login with Google
        </button>
        <button
          onClick={handleSpotifyLogin}
          className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300 mb-4"
        >
          Login with Spotify
        </button>
        <button
          onClick={handleLinkedInLogin}
          className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300 mb-4"
        >
          Login with linkedIn
        </button>
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