import { Link } from "react-router-dom";
function Sidebar() {
    return (
        <div className="fixed w-56 h-full shadow pt-10 border-r-2 border-black">
            <nav className="mt-16 ">
                <ul className="text-xl font-medium select-none">
                    <li className=" hover:shadow-md hover:bg-spotify py-4 tracking-wide">
                        <Link to="/" className="pl-20 ">Home</Link>
                    </li>
                    <li className=" hover:shadow-md hover:bg-spotify py-4 tracking-wide">
                        <Link to="/Dash" className="pl-20 ">Homepage</Link>
                    </li>
                    <li className=" hover:shadow-md hover:bg-spotify py-4 tracking-wide">
                        <Link to="../Dash/SearchDash" className="pl-20 ">Search</Link>
                    </li>
                    <li className=" hover:shadow-md hover:bg-spotify py-4 tracking-wide">
                        <Link to="../Dash/Favourite" className="pl-20 ">Favourite</Link>
                    </li>
                    
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;