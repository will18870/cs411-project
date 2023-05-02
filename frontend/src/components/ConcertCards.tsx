import { ConcertType } from "../Router/Types.types";
import ConcertCard from './ConcertCard';
import { ConcertSearch, getUserFavs } from "./apidata"
import { useEffect, useState } from "react";

interface index {
  searchindex: string;
  num: number;
  type: string;
}

function ConcertCards(props: index) {
  const {searchindex ,num , type} = props;
  const [eventlist, setEventList] = useState<any[]>([]);

  useEffect(() => {
    async function fetchConcerts() {

        if (type == "rec") {
            const data = await getUserFavs("genres")
            if (!data) {
                const data = await ConcertSearch("Boston", "keyword")
                const sliced = data?.slice(0, num);
                setEventList(sliced ?? []);
                return
            }

            const genres = JSON.parse(data)
            let result = []
            window.console.log(genres.genres.length)
            for (let i = 0; i < genres.genres.length; i++) {
                const event = await ConcertSearch(genres.genres[i].genre, "keyword")
                if (event)
                    result.push(...event)
            }

            if (result.length == 0) {

            }
            // window.console.log(result)
            setEventList(result)
            return
        }

        if (type == "artist") {
            const data = await getUserFavs("artists")
            if (!data) {
                const data = await ConcertSearch("Boston", "keyword")
                const sliced = data?.slice(0, num);
                setEventList(sliced ?? []);
                return
            }

            const artists = JSON.parse(data)
            let result = []
            window.console.log(artists.artists.length)
            for (let i = 0; i < artists.artists.length; i++) {
                const event = await ConcertSearch(artists.artists[i].artist, "keyword")
                if(event)
                    result.push(...event)
            }

            if (result.length == 0) {

            }
            // window.console.log(result)
            setEventList(result)
            return
        } else {

            const data = await ConcertSearch(searchindex, "keyword");
            const sliced = data?.slice(0, num);
            setEventList(sliced ?? []);
        }
    
    }
    fetchConcerts();
  }, [searchindex]);

  if (!eventlist) {
      return (<div>Loading...</div>)
  }

    if (eventlist.length == 0) {
        return (<div>No Concerts Found :(</div>)
    }

  return (
    <>
      <div className=" truncate grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4
      xl:grid-cols-6 2xl:grid-cols-8 max:grid-cols-8 gap-6 mt-6 mr-8 ">
        {eventlist.map((concert: any) => (
          <ConcertCard
            key={concert.id}
            name={concert.name}
            id={concert.id}
            address={concert._embedded.venues[0].name}
            date={concert.dates.start.localDate}
            price_min={concert.price_min}
            price_max={concert.price_max}
            time={concert.time}
            url={concert.url}
            image={concert.images[0].url}
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