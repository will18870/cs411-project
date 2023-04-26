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
    <div className=" mx-8 grid grid-row-3  bg-white shadow-lg
                    rounded-lg  opacity-100 hover:opacity-75 hover:shadow-2xl
                    hover:rounded-b-lg  border-2 border-black
                    " onClick={handleClick} >
        <div className="h-128 w-128 ">
            <img className="object-contain " src={image} alt={"alt"} />
        </div>

      <div className=" mt-4  mx-4 text-xl font-medium truncate">
        <h2 className="font-bold text-2xl mb- pt-3 truncate">{name}</h2>
        <p className="">{address}</p>
        <p className="">{date}</p>
      </div>
    </div>
  );
};

export default ConcertCard;
