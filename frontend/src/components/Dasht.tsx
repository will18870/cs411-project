import React, { useState } from "react";
import { ConcertSearch } from "../components/apidata";

function Dash() {
  const [concerts, setConcerts] = useState<any[]>([]);

  async function fetchConcerts() {
    try {
      const rawdata = await ConcertSearch("New York");
      console.log(rawdata);
      setConcerts(rawdata ?? []);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Concerts</h1>
      <button onClick={fetchConcerts}>Fetch concerts</button>
      {concerts.map((concert, index) => (
        <p key={index}>{concert.name}</p>
      ))}
    </div>
  );
}

export default Dash;
