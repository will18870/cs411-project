import { ConcertType } from "../Router/Types.types";
import ConcertCard from './ConcertCard';
import { ConcertSearch } from "./apidata"
import { useEffect, useState } from "react";

interface index {
  searchindex: string;
}

function ConcertCards(props: index) {
  const { searchindex } = props;
  const [eventlist, setEventList] = useState<any[]>([]);

  useEffect(() => {
    async function fetchConcerts() {
      const data = await ConcertSearch(searchindex);
      setEventList(data ?? []);
    }
    fetchConcerts();
  }, [searchindex]);

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
      xl:grid-cols-4 2xl:grid-cols-5 max:grid-cols-6 gap-6 mt-6 mr-8 ">
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