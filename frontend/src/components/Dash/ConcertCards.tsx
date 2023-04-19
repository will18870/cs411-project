import { Concerts } from "../../datas/concert.data";
import { ConcertType } from "../../Router/Types";
import Newcard from './NewCCard';

const ConcertCards = () => {
  return (
    <>
      <div className="flex flex-row pt-8  truncate">

        {Concerts.map((concert: ConcertType) => (
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

export default ConcertCards;