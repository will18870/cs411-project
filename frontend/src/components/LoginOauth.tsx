import axios from "axios";
export const handleSpotifyLogin = () => {
    const client_id = '18536c2c4edc44e5a39a3370deea262a';
    const redirect_uri = 'http://localhost:5173/Dash'; // Update the redirect URI here
    const scopes = ['user-read-private', 'user-read-email'];

    const authEndpoint = 'https://accounts.spotify.com/authorize';
    const queryParams = [
        `client_id=${client_id}`,
        `redirect_uri=${redirect_uri}`,
        `scope=${scopes.join('%20')}`,
        `response_type=token`,
    ];

    const url = `${authEndpoint}?${queryParams.join('&')}`;
    window.location.href = url;
    const hash = window.location.hash.substr(1);
    const params = new URLSearchParams(hash);
    const accessToken = params.get('access_token');
    if (accessToken) {
        localStorage.setItem('spotify_access_token', accessToken);
    }
};



export const handleGoogleLogin = () => {
    const client_id = '720139912748-v598kftrdonmlafi0365gitm8dqqiv75.apps.googleusercontent.com';
    const redirect_uri = 'http://localhost:5173/Login'; // Replace with your own redirect URI
    const scope = 'email profile openid'; // Add any additional scopes you need

    const authEndpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
    const queryParams = [
        `client_id=${client_id}`,
        `redirect_uri=${redirect_uri}`,
        `scope=${scope}`,
        `response_type=code`,
    ];
    const url = `${authEndpoint}?${queryParams.join('&')}`;

    window.location.href = url + '/Dash';
};

export const handleLinkedInLogin = async () => {
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

function setError(arg0: string) {
    throw new Error("Function not implemented.");
}
