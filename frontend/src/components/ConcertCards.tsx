import { Concerts } from "../datas/concert1.data";
import { ConcertType } from "../Router/Types.types";
import ConcertCard from './ConcertCard';

const ConcertCards = () => {
  return (
    <>
      <div className="flex flex-row pt-8  truncate">
        {Concerts.map((concert: ConcertType) => (
          <ConcertCard
            key={concert.title}
            title={concert.title}
            image={concert.image}
            date={concert.date}
            location={concert.location}
            ticketLink={concert.ticketLink}
            description={concert.description} id={0} genre={""} />
        ))}
      </div>
    </>
  );
}

export default ConcertCards;