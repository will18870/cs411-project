import logo from '../Resources/poster1.jpeg';
import { ConcertType } from '../Router/Types.types';
import { useNavigate } from 'react-router-dom';


function ConcertCard(props: any) {

  const { name, id, address, date, image } = props;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/Dash/Concert/${props.id}`);
  };

  return (
    <div className="h-full mx-3 bg-neutral-700 shadow-lg
                    rounded-lg  opacity-100 hover:shadow-2xl
                    hover:rounded-b-lg  border-1 border-neutral-100 text-white border-opacity-90 hover:backdrop-blur-sm
                    " onClick={handleClick} >
      <img className="top-0 h-2/3 w-full  object-cover 
            rounded-md justify-center" src={image} alt={"alt"} />
      <div className='hover:bg-neutral-300  '>
        <div className=" mt-3 mx-4 text-2xl font-medium align-middle ">
          <h2 className="font-bold text-3xl truncate">{name}</h2>
          <p className="mt-2">{address}</p>
          <p className="mt-2 mb-16">{date}</p>
        </div>
      </div>

    </div>
  );
};

export default ConcertCard;
