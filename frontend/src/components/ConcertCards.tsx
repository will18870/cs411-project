import { ConcertType } from "../Router/Types.types";
import ConcertCard from './ConcertCard';
import { ConcertSearch } from "./apidata"
import { useEffect, useState } from "react";

interface index {
  searchindex: string;
}

function ConcertCards(props: index) {
  const { searchindex } = props;
  const [eventlist, setEventList] = useState<ConcertType[]>([]);

  useEffect(() => {
    async function fetchConcerts() {
      const data = await ConcertSearch(searchindex);
      setEventList(data ?? []);
    }
    fetchConcerts();
  }, [searchindex]);

  return (
    <>
      <div className="flex felx-row mt-6 truncate  overflow-x-auto mr-8">
        {eventlist.map((concert: ConcertType) => (
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