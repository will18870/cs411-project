import { useLocation } from "react-router-dom";
import { routes } from "../Router/Dash";
import SideBar from "../components/SideBar";
import MainBoard from "../components/MainBoard";

function Dashboard() {
  const location = useLocation();

  // Find the route with the matching path
  const route = routes.find((r) => r.path === location.pathname);

  // Render the component for the matching route, or render a default component
  const Component = route ? route.component : MainBoard;

  return (
    <div className="flex bg-gradient-to-t from-neutral-950 from-60% to-orange-800">
      <SideBar />
      <div className="">
        <Component />
      </div>
    </div>
  );
}

export default Dashboard;
