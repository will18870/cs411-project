import Sidebar from "../../components/Dash/SideBar";
import MainBoard from "../../components/Dash/MainBoard";
import Topbar from '../../components/Dash/Topbar';

function Dashboard() {

  return (
    <div className=" bg-black ">
      <div className="flex bg-gradient-to-t from-neutral-50 from-60% to-orange-200 ml-72 bottom-0">

        <div className="fixed">
          <Sidebar />

        </div>
        <div className="ml-72">
        <Topbar/>
       
        </div > 
        <div className="flex justify-center">
        <p className='text-black pt-96 text-5xl font-bold truncate mt-80 z-50'>We Recommend for you </p></div>
        
            {/* <MainBoard/> */}
      </div>
      </div>


  );
}

export default Dashboard;
