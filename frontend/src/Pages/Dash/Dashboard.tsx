import Sidebar from "../../components/SideBar";
import Dash from '../../Router/DashPages';
import React, { useState, useEffect } from "react";

interface Artist {
  id: string;
  name: string;
  image: string;
}

function Dashboard() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    const getArtists = async () => {
      const response = await fetch('https://api.spotify.com/v1/me/top/artists', {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      const data = await response.json();

      setArtists(data.items);
    };

    if (accessToken) {
      getArtists();
    }
  }, [accessToken]);

  const refreshArtists = async () => {
    const response = await fetch('https://api.spotify.com/v1/me/top/artists', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    const data = await response.json();

    setArtists(data.items);
  }

  return (
    <div className="h-max">
      <Sidebar />
      <div>
        <ul>
          {artists.map((artist) => (
            <li key={artist.id}>{artist.name}</li>
          ))}
        </ul>
        <button onClick={refreshArtists}>Refresh</button>
        <Dash />
      </div>
    </div>
  );
}

export default Dashboard;
