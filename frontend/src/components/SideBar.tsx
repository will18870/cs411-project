import { Link } from "react-router-dom";
interface Props { }

const Status: React.FC<Props> = () => {
    const isLoggedIn = localStorage.getItem('access_token') !== null;


  return (
    <div className="pl-8">
      {isLoggedIn ? (
        <p>Logged</p>
      ) : (
        <p>No</p>
      )}
    </div>
  );
};
  
function Sidebar() {
    return (
        <div className="fixed w-56 h-full shadow  pt-8 border-r-2 border-black">
            <nav className="mt-36 ">
                <ul className="text-xl font-medium select-none">
                    <li className=" hover:shadow-md hover:bg-spotify py-4 tracking-wide">
                        <Link to="/Dash" className="pl-20 ">Homepage</Link>
                    </li>
                    <li className=" hover:shadow-md hover:bg-spotify py-4 tracking-wide">
                        <Link to="../Dash/SearchDash" className="pl-20 ">Search</Link>
                    </li>
                    <li className=" hover:shadow-md hover:bg-spotify py-4 tracking-wide">
                        <Link to="../Dash/Favourite" className="pl-20 ">Favourite</Link>
                    </li>
                    <li>
                        <Status />
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;