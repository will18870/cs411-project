import { useState, useEffect } from 'react';

function getjson(url: string) {
  const token = localStorage.getItem('spotify_access_token');
  const headers = { Authorization: `Bearer ${token}` };
  const apiurl = url;
  const [data, setData] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    fetch(apiurl, { headers })
      .then(response => response.json())
      .then(data => {
        setData(data);
        setIsLoading(false);
      })
      .catch(error => console.error(error));
  }, []);
  if (isLoading) {
    return null;
  }
  return data
}
function Userjson() {
  return getjson('https://api.spotify.com/v1/me');
}
function FavArtistjson() {
  const type = 'tracks';
  const time_range = 'medium_term';
  const limit = 10;
  const offset = 3;

  const apiUrl = `https://api.spotify.com/v1/me/top/${type}?time_range=${time_range}&limit=${limit}&offset=${offset}`;
  return getjson(apiUrl);
}

async function getFavArtists() {
  if (!localStorage.getItem('spotify_access_token')) {
    return null
  }
  const token = localStorage.getItem('spotify_access_token');
  const url = "http://localhost:5000/getTopArtists?token=" + token

  try {
    // Send the API request and handle the response
    const response = await fetch(url);
    if (!response.ok) {
      // 如果响应状态不是 200 OK，则抛出一个错误
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    const data = text ? JSON.parse(text) : ""
    return data;
  } catch (error) {
    console.error(error);
    window.console.log({ _embedded: { events: [] } })
    return { _embedded: { events: [] } };
  }
}

function GetArtistjson(id: string) {
  // const id = '2QcZxAgcs2I1q7CtCkl6MI'; 
  const apiUrl = `https://api.spotify.com/v1/artists/${id}`;
  return getjson(apiUrl);
  {/* <p>{artist.followers.total}</p> */ }
}
function GetGenrejson(id: string) {
  const apiUrl = `https://api.spotify.com/v1/artists/${id}/related-artists`;
  return getjson(apiUrl);
  {/* <p>{artist.followers.total}</p> */ }
}



interface Event {
  name: string;
  url: string;
  dates: {
    start: {
      dateTime: string;
    };
  };
  _embedded: {
    venues: {
      name: string;
    }[];
  };
}
interface SearchParams {
  apikey: string;
  postalCode?: string;
  keyword?: string;
}

async function ConcertSearch(key: string = "Boston") {
  // Set the API endpoint and parameters
  const url = "http://localhost:5000/getConcerts?term=" + key;
  let params: SearchParams = {
    apikey: "0txRTCElnYysjp6wGw85pTQwcXUPIXfv",
    keyword: key,
  };

  try {
    // Send the API request and handle the response
    const response = await fetch(url);
    if (!response.ok) {
      // 如果响应状态不是 200 OK，则抛出一个错误
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();
    const data = text ? JSON.parse(text) : { _embedded: { events: [] } };
    window.console.log(data)
    return data;
  } catch (error) {
    console.error(error);
    window.console.log({ _embedded: { events: [] } })
    return { _embedded: { events: [] } };
  }
}


export { GetArtistjson, FavArtistjson, Userjson, ConcertSearch, getFavArtists };