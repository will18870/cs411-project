import { Link } from "react-router-dom";

function Sidebar() {
  const sayhi =()=>{ 
    localStorage.removeItem('spotify_access_token');
    console.log("hi")};
  
  return (
    <div className="fixed w-64 h-full shadow pt-8  bg-neutral-100">
      <nav className="mt-36 ">
        <ul className="text-2xl font-semibold text-neutral-900">
          <li className="hover:shadow-md hover:bg-spotify py-4 tracking-wide">
            <Link to="/Dash" className="pl-20 ">Homepage</Link>
          </li>
          <li className="hover:shadow-md hover:bg-spotify py-4 tracking-wide">
            <Link to="../Dash/SearchDash" className="pl-20 ">Search</Link>
          </li>
          <li className="hover:shadow-md hover:bg-spotify py-4 tracking-wide">
            <Link to="../Dash/Favourite" className="pl-20 ">Favourite</Link>
          </li>
          <li className=" py-4 hover:shadow-md hover:bg-red-500 tracking-wide">
            <Link to="/" className="pl-20 " onClick={sayhi}>Log Out</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
