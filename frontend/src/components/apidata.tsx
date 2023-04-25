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
    return <p>Loading...</p>;
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
function GetArtistjson(id: string) {
  // const id = '2QcZxAgcs2I1q7CtCkl6MI'; 
  const apiUrl = `https://api.spotify.com/v1/artists/${id}`;
  return getjson(apiUrl);
  {/* <p>{artist.followers.total}</p> */ }
}
function GetGenrejson(id: string) {
  const apiUrl = `https://api.spotify.com/v1/artists/${id}/related-artists`;
  return getjson(apiUrl);
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

async function ConcertSearch(key: string ) {
  // Set the API endpoint and parameters
  const url = "https://app.ticketmaster.com/discovery/v2/events.json";
  let params: SearchParams = {
    apikey: "YgunowPBFuli9SnzQBiGkRGCD9Yf2RLM",
    keyword: key,
  };

  try {
    const response = await fetch(`${url}?${new URLSearchParams({ ...params })}`);
    console.log(`${url}?${new URLSearchParams({ ...params })}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();
    const data = text ? JSON.parse(text) : { _embedded: { events: [] } };
    let list = data._embedded.events;
    let eventlist = [];
    let seen = new Set();
    for (let i = 0; i < list.length; i++) {
      if (!seen.has(list[i].name)) {
        seen.add(list[i].name);
        eventlist.push(list[i]);
      }
    }
    return eventlist.slice(0, 3);
  } catch (error) {
    console.error(error);
    // return { _embedded: { events: [] } };
  }
}


export { GetArtistjson, FavArtistjson, Userjson, ConcertSearch };