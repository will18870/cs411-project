import logo from '../../Resources/poster1.jpeg';
import { Concert } from "../../types/ConcertCard.types";

const Newcard: React.FC<Concert> = ({ title, image, date, location, ticketLink, description }) => {
  return (
    <div className="w-full lg:w-1/3 2xl:w-2/3 mb-6 lg:pl-6 2xl:pl-12 sm:pl-6 ">
      <div className="shadow-lg rounded-lg overflow-hidden">
        <img className="2xl:w-full 2xl:h-48   object-cover" src={logo} alt={title} />
        <div className="p-4 bg-white bg-opacity-40 hover:opacity-70 hover:rounded-b-lg">
          <h2 className="text-gray-300 font-bold text-xl mb-1">{title}</h2>
          <p className="text-gray-300 text-sm ">{description}</p>
          <div className="flex justify-end mt-4">
            <a
              href={ticketLink}
              className="text-blue-500 font-bold text-sm hover:text-blue-700"
            >
              Get Tickets
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newcard;
