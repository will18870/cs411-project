import logo from '../Resources/poster1.jpeg';
import { ConcertType } from '../Router/Types.types';
import { useNavigate } from 'react-router-dom';

function ConcertCard(props: ConcertType) {

  const { title, description, id ,price,address,date} = props;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/Dash/Concert/${id}`);
  };

  return (
    <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8 mr-8 bg-white shadow-lg 
                    rounded-lg overflow-hidden opacity-100 hover:opacity-75 hover:shadow-2xl
                    hover:rounded-b-lg aspect-square border-2 border-black
                    " onClick={handleClick} >
      <img className="2xl:w-full 2xl:h-48 object-cover  opacity-100" src={logo} alt={title} />
      <div className=" w-1/2 ml-4">
        <h2 className="font-bold text-2xl mb- pt-3">{title}</h2>
        <p className="text-sm font-medium flex flex-wrap">{address}</p>
        <p className="text-sm font-medium flex flex-wrap">{date}</p>
      </div>
    </div>
  );
};

export default ConcertCard;
