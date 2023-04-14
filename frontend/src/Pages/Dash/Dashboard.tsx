import Sidebar from "../../components/Dash/SideBar";
import MainBoard from "../../components/Dash/MainBoard";

function Dashboard() {

  return (
    <div className=" bg-black ">
      <div className="flex bg-gradient-to-t from-neutral-50 from-60% to-orange-200 ml-72 bottom-0">
        <div className="fixed">
          <Sidebar />
        </div>
        <MainBoard />

      </div>
    </div>

  );
}

export default Dashboard;
