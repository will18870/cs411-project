// declare const require: any;
import logo from '../Resources/poster1.jpeg';

// export default function ConcertCard() {
//   return (
//     <>
//       <div className=" h-96 w-72 mx-4 border-2 border-gray-200  flex flex-col mb-10 bg-white">
//         <img className="w-full h-52 object-cover mb-4 " src={String(logo)} alt="Concert Image" />
//         <p className="text-xl font-medium pl-4">This is a card!</p>
//       </div>
//     </>
//   );
// }

interface Concert {
  title: string;
  image: string;
  date: string;
  location: string;
  ticketLink: string;
  description: string;
}

const ConcertCard: React.FC<Concert> = ({ title, image, date, location, ticketLink, description }) => {
  return (
    <div className="max-w-md mx-auto mb-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden ">
        <img className="w-full h-56 object-cover" src={logo} alt={title} />
        <div className="p-4">
          <h2 className="text-gray-900 font-bold text-xl mb-2">{title}</h2>
          <p className="text-gray-600 text-sm">{date}</p>
          <p className="text-gray-600 text-sm">{location}</p>
          <p className="text-gray-600 text-sm mt-2">{description}</p>
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

export default ConcertCard;
