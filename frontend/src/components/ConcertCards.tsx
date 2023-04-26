import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ConcertType } from "../Router/Types.types";
import ConcertCard from './ConcertCard';
import { ConcertSearch, getFavArtists } from "./apidata"
function ConcertCards() {

    const [eventlist, setEventlist] = useState<any[]>([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getFavArtists()
            if (!data) {
                const thing = await ConcertSearch("Boston")
                setEventlist(thing)
                return
            }


            const artists = JSON.parse(data)

            window.console.log(artists.artists[2].artist)

            // while(!artists) {
            //     console.log("waiting")
            //     continue
            // }

            let result = []
            window.console.log(artists.artists.length)
            for (let i = 0; i < artists.artists.length; i++) {
                const event = await ConcertSearch(artists.artists[i].artist)
                if(event)
                    result.push(...event)
            }

            if (result.length == 0) {
                const thing = await ConcertSearch("Boston")
                result.push(...thing)
            }
            // window.console.log(result)
            setEventlist(result)

            // const other = await ConcertSearch("Boston")
            // const thing = await ConcertSearch(artists.artists[0].artist)
            // window.console.log(thing)
            // setEventlist(thing.concat(other))

            // const artists = await getFavArtists()
            // window.console.log(artists)

            // const promises = artists.artists.map(async (artist) => {
            //     return await ConcertSearch(artist.artist);
            // });
            //
            // const eventLists = await Promise.all(promises);
            //
            // const result = eventLists.flat();
            // setEventlist(result);
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
              price_min={"test"}
              price_max={"test"}
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