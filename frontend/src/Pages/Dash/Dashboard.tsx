import Sidebar from "../../components/Dash/SideBar";
import MainBoard from "../../components/Dash/MainBoard";
import Topbar from '../../components/Dash/Topbar';

export default function Dashboard() {
  return (
    <div className=" bg-white ">
      <div className="flex ml-60 bottom-0">
        <div className="fixed">
          <Sidebar />
        </div>
        <div className="">
          <Topbar />
        </div>
        {/* MainBoard */}
      </div>
      <div className="z-30 ml-72 mt-24">
        <p className='text-black text-5xl font-bold'>We Recommend for you</p>

      </div>
    </div>
  );
}
