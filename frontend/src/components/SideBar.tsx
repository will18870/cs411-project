import { Link } from "react-router-dom";
function Sidebar() {
    return (
        <div className="fixed w-72 h-full bg-gray-100 shadow pt-10">
            <nav className="mt-8">
                <ul className=" text-gray-500 text-2xl font-medium select-none my-8">
                    <li className=" hover:shadow-md hover:bg-gray-300 py-2 tracking-wide">
                        <Link to="/" className="pl-12 ">Home</Link>
                    </li>
                    <li className=" hover:shadow-md hover:bg-gray-300 py-2 tracking-wide">
                        <Link to="./SearchDash" className="pl-12 ">Search</Link>
                    </li>
                    <li className=" hover:shadow-md hover:bg-gray-300 py-2 tracking-wide">
                        <Link to="./Favourite" className="pl-12 ">Favourite</Link>
                    </li>
                    
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;