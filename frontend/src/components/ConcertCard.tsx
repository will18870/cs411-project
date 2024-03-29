
import { useNavigate } from 'react-router-dom';


function ConcertCard(props: any) {

  const { name, id, date, image } = props;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/Dash/Concert/${props.id}`);
  };

  return (
    <div className="h-full  bg-neutral-800 shadow-lg
                    rounded-xl  opacity-100 hover:shadow-2xl
                    hover:rounded-b-lg  border-1 border-neutral-100
                     text-white border-opacity-90 hover:backdrop-blur-sm hover:bg-neutral-700
                    " onClick={handleClick} >
      <div className='p-4 h-3/4  w-full'>
        <img className="top-0 h-full w-full object-cover  rounded-xl
             justify-center" src={image} alt={"alt"} />
      </div>


      <div className=" pb-16 mx-4 text-lg font-medium align-middle text-neutral-100 hover:text-white">
        <h2 className="font-bold text-2xl truncate mt-4">{name}</h2>
        <p className="mt-3 ">{date}</p>
        {/* <p className="mt-2 ">{id}</p> */}
      </div>

    </div>
  );
};

export default ConcertCard;
