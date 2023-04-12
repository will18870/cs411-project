import { Link } from "react-router-dom";
function Sidebar() {
    return (
        <div className="fixed top-0 left-0 w-72 h-full bg-black shadow pt-10">
            <nav>
                <ul className="block py-24 pl-24 text-gray-500 text-2xl font-semibold select-none">
                    <li>
                        <Link to="/" className="hover:text-white hover:shadow-md">Home</Link>
                    </li>
                    <li className="py-6">
                        <Link to="/Search" className="hover:text-white hover:shadow-md">Search</Link>
                    </li>
                    <li>
                        <Link to="/" className="hover:text-white hover:shadow-md">Favourite</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;

