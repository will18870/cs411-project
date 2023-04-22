import Sidebar from "../../components/SideBar";
import Dash from '../../Router/DashPages';

function Dashboard() {
  return (
    <div className="h-max">
      <Sidebar />
      <div>
        <Dash />
      </div>
    </div >
  );
}

export default Dashboard