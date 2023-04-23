import Concertdata from "../datas/Concertdata.json";
import { ConcertType } from "../Router/Types.types";
import ConcertCard from './ConcertCard';


function ConcertCards() {
  const concertsData= Concertdata.concerts;
  return (
    <>
      <div className="flex flex-row pt-8  truncate">
        {concertsData.map((concert: ConcertType) => (
          <ConcertCard
            key={concert.title}
            title={concert.title}
            image={concert.image}
            date={concert.date}
            address={concert.address}
            url={concert.url}
            description={concert.description} 
            id={concert.id} 
            genre={concert.genre}
            artist={concert.artist}
            color={concert.color}
            time={concert.time}
            price={concert.price}
            />
        ))}
      </div>
    </>
  );
}

export default ConcertCards;