
import { ConcertType } from "../Router/Types.types";
import ConcertCard from './ConcertCard';
import { ConcertSearch } from "./apidata"


async function filterUniqueEvents(key: string): Promise<any[]> {
  const events = await ConcertSearch(key);
  const uniqueEvents = events.filter((event: { name: any; }, index: any, self: any[]) =>
    index === self.findIndex((e: { name: any; }) => e.name === event.name)
  );
 
  for (let i = 0; i < uniqueEvents.length - 1; i++) {
    if (uniqueEvents[i].name === uniqueEvents[i + 1].name) {
      uniqueEvents.splice(i, 1);
      i--;
    }
  }

  console.log('eventList:1', uniqueEvents[1]);
  console.log('eventList:6', uniqueEvents[6]);
  return uniqueEvents;
}


async function ConcertCards() {
  const eventlist = await filterUniqueEvents("classic");
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