import { Link } from "react-router-dom";
function Sidebar() {
    return (

        <div className="fixed top-0 left-0 w-60 h-full bg-white shadow pt-10">
            <nav>
                <ul className="block py-24 pl-12 text-gray-900 text-2xl font-semibold select-none">
                    <li>
                        <Link to="/" className="hover:text-white hover:shadow-md">Home</Link>
                    </li>
                    <li className=" hover:shadow-md hover:bg-gray-300 py-2 tracking-wide">
                        <Link to="/Search" className="">Search</Link>
                    </li>
                    <li className=" hover:shadow-md hover:bg-gray-300 py-2 tracking-wide">
                        <Link to="/CategoryPage" className="">Favourite</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;