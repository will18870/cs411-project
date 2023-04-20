import Sidebar from "../../components/SideBar";
import ConcertCards from '../../components/ConcertCards';
function Dashboard() {

  return (
    <div className="bg-neutral-100 h-max">
      <Sidebar />
      <div className="truncate ml-80 text-black text-4xl font-bold pt-20 ">
        <p className='text-6xl '>We Recommend for you </p>
        <ConcertCards />
        <p className='mt-20'>Your Favorite Artists </p>
        <ConcertCards />
        <p className=' mt-20'>Concerts Near You </p>
        <ConcertCards />
      </div>
    </div >
  );
}

export default Dashboard;
