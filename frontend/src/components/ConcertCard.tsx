import logo from '../Resources/poster1.jpeg';
import { ConcertType } from '../Router/Types.types';


const ConcertCard: React.FC<ConcertType> = ({ title, image, date, location, ticketLink, description }) => {
  return (
    <div className="w-full lg:w-1/3 2xl:w-2/3 mb-6 mr-6 bg-slate-300 shadow-lg 
                    rounded-lg overflow-hidden opacity-30 hover:opacity-100 hover:rounded-b-lg aspect-square">
        <img className="2xl:w-full 2xl:h-48 object-cover p-6 opacity-100" src={logo} alt={title} />
        <div className="ml-8">
          <h2 className="font-bold text-xl mb-1">{title}</h2>
          <p className="text-sm ">{description}</p>
      </div>
    </div>
  );
};

export default ConcertCard;
