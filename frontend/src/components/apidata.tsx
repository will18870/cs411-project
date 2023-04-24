import { useState, useEffect } from 'react';
const token = localStorage.getItem('spotify_access_token');
const headers = { Authorization: `Bearer ${token}` };

const User = () => {
  const apiUrl = 'https://api.spotify.com/v1/me';
  const [data, setData] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(apiUrl, { headers })
      .then(response => response.json())
      .then(data => {
        setData(data);
        setIsLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  const userInfoList = Object.entries(data).map(([key, value]) => (
    <li key={key}>
      {JSON.stringify(value)}
    </li>
  ));

  return (
    <div>
      <ul>{data.display_name}</ul>
      {/* <ul>{userInfoList}</ul> */}
    </div>
  );
};

const FavArtist = () => {
  const type = 'tracks';
  const time_range = 'medium_term';
  const limit = 10;
  const offset = 3;

  const apiUrl = `https://api.spotify.com/v1/me/top/${type}?time_range=${time_range}&limit=${limit}&offset=${offset}`;
  const [Artist, setArtist] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(apiUrl, { headers })
      .then(response => response.json())
      .then(data => {
        setArtist(data);
        setIsLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>{Artist.limit}</p>
    </div>
  );
}

const GetArtist = () => {
  const id = '0TnOYISbd1XYRBk9myaseg';
  const apiUrl = `https://api.spotify.com/v1/artists/${id}`;
  
  const [artist, setArtist] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(apiUrl, { headers })
      .then(response => response.json())
      .then(data => {
        setArtist(data);
        setIsLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {artist.followers &&
        <div>
          <p>{artist.followers.total}</p>
        </div>
      }
    </div>
  );
};

export default FavArtist;
export { User, FavArtist, GetArtist };
