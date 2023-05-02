import axios from "axios";


export const handleSpotifyLogin = async () => {
  localStorage.removeItem('spotify_access_token');
  const client_id = '8368d220a5bd459db1f24d384a859cf7';
  const redirect_uri = 'http://localhost:5173/callback';
  const scopes = ['user-read-private', 'user-read-email',
    'user-top-read', 'user-read-playback-position',
    'user-read-recently-played'];
  const authEndpoint = 'https://accounts.spotify.com/authorize';
  const RESPONSE_TYPE = 'token';

  const url = `${authEndpoint}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${RESPONSE_TYPE}&scope=${scopes.join('%20')}`;
  // const urla = "http://localhost:5173/Dash"
  window.location.href = url;
  
  const hash = window.location.hash.substring(1);
  const params = new URLSearchParams(hash);
  const accessToken = params.get('access_token');
  const refreshToken = params.get('refresh_token');

  if (accessToken) {
    localStorage.setItem('spotify_access_token', accessToken);
    console.log('Access token stored in local storage.');
  } else {
    console.log('Access token not found.');
  }

  if (refreshToken) {
    localStorage.setItem('spotify_refresh_token', refreshToken);
    console.log('Refresh token stored in local storage.');
  } else {
    console.log('Refresh token not found.');
  }

  const expiresAt = parseInt(params.get('expires_in')!, 10) * 1000 + new Date().getTime();
  if (expiresAt <= new Date().getTime()) {
    const refreshToken = localStorage.getItem('spotify_refresh_token');
    const response = await axios.post('https://accounts.spotify.com/api/token', {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: client_id,
    });

    localStorage.setItem('spotify_access_token', response.data.access_token);
    localStorage.setItem('spotify_refresh_token', response.data.refresh_token);
    console.log('New access token and refresh token stored in local storage.');
  }
};

