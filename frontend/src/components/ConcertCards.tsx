import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ConcertType } from "../Router/Types.types";
import ConcertCard from './ConcertCard';
import { ConcertSearch, getFavArtists } from "./apidata"

async function filterUniqueEvents(key: string): Promise<any[]> {
  const events = await ConcertSearch(key);
  // const uniqueEvents = events.filter((event: { name: any; }, index: any, self: any[]) =>
  //   index === self.findIndex((e: { name: any; }) => e.name === event.name)
  // );
  //
  // for (let i = 0; i < uniqueEvents.length - 1; i++) {
  //   if (uniqueEvents[i].name === uniqueEvents[i + 1].name) {
  //     uniqueEvents.splice(i, 1);
  //     i--;
  //   }
  // }
  //
  // console.log('eventList:1', uniqueEvents[1]);
  // console.log('eventList:6', uniqueEvents[6]);
  // return uniqueEvents;

  return events
}


function ConcertCards() {

    const [eventlist, setEventlist] = useState<any[]>([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getFavArtists()
            const artists = JSON.parse(data)
            window.console.log(artists.artists.length)

            while(!artists) {
                console.log("waiting")
                continue
            }

            // let result = []
            // for (let i = 0; i < artists.artists.length; i++) {
            //     let event = await ConcertSearch(artists.artists[i].artist)
            //     for (let j = 0; j < event.length; j++) {
            //         result.push(event[j])
            //     }
            // }
            // window.console.log(result)
            // setEventlist(result)

            const thing = await ConcertSearch(artists.artists[2].artist)
            setEventlist(thing)

            // const artists = await getFavArtists()
            // window.console.log(artists)
        }

        fetchData();
    }, []);

  //const eventlist = await filterUniqueEvents("classic");
  window.console.log(eventlist)
    if (eventlist.length == 0) {
        // Render a loading indicator or return null while the API call is being made
        return <div>Loading...</div>
    }

    return (
    <>
      <div className="flex felx-row mt-6 truncate  overflow-x-auto mr-8">
        {eventlist.map((concert: ConcertType) => (
          <ConcertCard
            key={concert.id}
            name={concert.name}
            id={concert.id}
            address={concert._embedded.venues[0].city.name}
            date={concert.dates.start.localDate}
            // price_min={concert.priceRanges[0].min}
            // price_max={concert.priceRanges[0].max}
            time={concert.dates.start.localTime}
            url={concert.url}
            image={concert.images[0].url}
            genre={concert.classifications[0].genre.name}
            subgenre={concert.subgenre}
            segment={concert.segment}
            type={concert.classifications[0].genre.type}
            status={concert.status}
            info={concert.info}
            seatmap={concert.seatmap}
            description={concert.info}
          />
        ))}
      </div>
    </>
  );
}

export default ConcertCards;