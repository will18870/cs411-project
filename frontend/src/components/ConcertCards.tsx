import { ConcertType } from "../Router/Types.types";
import ConcertCard from './ConcertCard';
import { ConcertSearch } from "./apidata"
import { useEffect, useState } from "react";

interface index {
  searchindex: string;
  postalcode: string;
}

function ConcertCards(props: index) {
  const { searchindex,postalcode } = props;
  const [eventlist, setEventList] = useState<ConcertType[]>([]);

  useEffect(() => {
    async function fetchConcerts() {
      const data = await ConcertSearch(searchindex,postalcode );
      setEventList(data ?? []);
    }
    fetchConcerts();
  }, [searchindex]);

  return (
    <>
      <div className="flex felx-row mt-6 truncate  overflow-x-auto mr-8">
        {eventlist.map((data) => (
          <ConcertCard
            key={data.id}
            name={data.name}
            id={data.id}
            address={data._embedded.venues[0].name}
            date={data.dates.start.localDate}
            price_min={data.price_min}
            images = {data.images}
            price_max={data.price_max}
            time={data.time}
            url={data.url}
            genre={data.genre}
            subgenre={data.subgenre}
            segment={data.segment}
            type={data.type}
            status={data.status}
            info={data.info}
            seatmap={data.seatmap}
            description={data.description}
          />
        ))}
      </div>
    </>
  );
}

export default ConcertCards;