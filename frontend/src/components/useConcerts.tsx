import { useState, useEffect } from 'react';
import { ConcertSearch } from '../components/apidata';

function useConcerts(city = 'New York', postalCode = '10001') {
  const [concerts, setConcerts] = useState<any[]>([]); // Set the initial state as an empty array of type 'any[]'

  useEffect(() => {
    async function fetchConcerts() {
      try {
        const rawdata = await ConcertSearch(city, postalCode);
        console.log(rawdata);
        setConcerts(rawdata ?? []);
      } catch (error) {
        console.log(error);
      }
    }

    fetchConcerts();
  }, [city, postalCode]);

  return concerts;
}

export default useConcerts;
