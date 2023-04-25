import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';import { ConcertType } from "../Router/Types.types";
import ConcertCard from './ConcertCard';
import { ConcertSearch } from "./apidata"

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
            const events = await ConcertSearch();
            setEventlist(events);
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
        {eventlist._embedded.events.map((concert: ConcertType) => (
          <ConcertCard
            key={concert.id}
            name={concert.name}
            id={concert.id}
            address={concert.address}
            date={concert.date}
            price_min={concert.price_min}
            price_max={concert.price_max}
            time={concert.time}
            url={concert.url}
            image={concert.image}
            genre={concert.genre}
            subgenre={concert.subgenre}
            segment={concert.segment}
            type={concert.type}
            status={concert.status}
            info={concert.info}
            seatmap={concert.seatmap}
            description={concert.description}
          />
        ))}
      </div>
    </>
  );
}

export default ConcertCards;