import { Link } from "react-router-dom";
function Sidebar() {
    return (
<<<<<<< HEAD
        <div className="fixed top-0 left-0 w-72 h-full bg-gray-100 shadow pt-10">
            <nav className="mt-8">
                <ul className=" text-gray-500 text-2xl font-medium select-none my-8">
                    <li className=" hover:shadow-md hover:bg-gray-300 py-2 tracking-wide">
                        <Link to="/" className="pl-12 ">Home</Link>
=======
        <div className="fixed top-0 left-0 w-72 h-full bg-white shadow pt-10">
            <nav>
                <ul className="block py-24 pl-24 text-gray-900 text-2xl font-semibold select-none">
                    <li>
                        <Link to="/" className="hover:text-white hover:shadow-md">Home</Link>
>>>>>>> 2cf548e243cb1ea12b9be0dccd1ef3da3bf2dc91
                    </li>
                    <li className=" hover:shadow-md hover:bg-gray-300 py-2 tracking-wide">
                        <Link to="/Search" className="pl-12 ">Search</Link>
                    </li>
                    <li className=" hover:shadow-md hover:bg-gray-300 py-2 tracking-wide">
                        <Link to="/CategoryPage" className="pl-12 ">Favourite</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;