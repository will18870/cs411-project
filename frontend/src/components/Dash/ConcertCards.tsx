import { Concerts } from "../../datas/concert1.data";
import { Concert } from "../../types/ConcertCard.types";
import Newcard from './NewCCard';


export default function ConcertCards() {
  return (
    <>
      <div className="flex flex-row pt-8  truncate">

        {Concerts.map((concert: Concert) => (
          <Newcard
            key={concert.title}
            title={concert.title}
            image={concert.image}
            date={concert.date}
            location={concert.location}
            ticketLink={concert.ticketLink}
            description={concert.description}
          />
        ))}
      </div>
    </>
  );
}
