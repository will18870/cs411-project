import Sidebar from "../../components/Dash/SideBar";
import MainBoard from "../../components/Dash/MainBoard";
import Topbar from '../../components/Dash/Topbar';

function Dashboard() {

  return (
    <div className=" bg-black fixed  ">
      <div className="bg-neutral-100">
      <div className="flex">
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

    </div>

  );
}

export default Dashboard;
