import { ConcertType } from '../Router/Types.types';
import { useNavigate } from 'react-router-dom';


function ConcertCard(props: any) {

  const { name, address, date, images } = props;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/Dash/Concert/${props.id}`);
  };

  return (
    <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8 mr-8 bg-white shadow-lg 
                    rounded-lg overflow-hidden opacity-100 hover:opacity-75 hover:shadow-2xl
                    hover:rounded-b-lg aspect-square border-2 border-black
                    " onClick={handleClick} >
      <div className='h-1/2 lg:w-full object-contain items-center'>
        <img className=""
          src={images[0].url} alt={"alt"} />

      </div>
      <div className=" mx-4 mt-4 truncate">
        <h2 className="font-bold text-3xl mb- pt-3  truncate">{name}</h2>
        <p className="text-2xl font-medium ">{address}</p>
        <p className="text-xl font-medium ">{date}</p>
      </div>
    </div>
  );
};

export default ConcertCard;
