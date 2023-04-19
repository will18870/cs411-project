import Sidebar from "../../components/Dash/SideBar";
import Topbar from '../../components/Dash/Topbar';
import { Genre } from '../../datas/Genre.data';
import { GenreCardProps } from "../../Router/Types";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CategoryPage from "../Dash/CategoryPage";

const GenreCard: React.FC<GenreCardProps> = ({ title, image, description, color }) => {
    const col = "red-500";
    return (
      <div className="rounded-xl shadow-lg bg-red-200 w-72 h-72 m-4 ">
        <h2 className="text-4xl font-bold mt-8 ml-6 text-white">{title}</h2>
        {/* <p className="text-sm">{description}</p> */}
      </div>
    );
  };

export default function SearchDash() {
    return (
        <div className=" bg-black ">
            <div className="bg-neutral-100">
                <div className="">
                    <div className="fixed">
                        <Sidebar />
                    </div>
                    <div className="ml-72 bg-neutral-100">
                        <div className="">
                            <div className="pb-8">
                                <Topbar />
                            </div>

                            <div className="">
                                <p className='text-black text-4xl font-bold truncate ml-12 mt-20'>Explore All</p>

                                <div className="pl-8">
                                    <div className="pt-8 flex flex-wrap truncate">
                                        {Genre.map((genre: GenreCardProps) => (
                                            <Link to={`/genre/${genre.title.toLowerCase()}`} key={genre.title}>
                                                <GenreCard
                                                    title={genre.title}
                                                    image={genre.image}
                                                    description={genre.description}
                                                    color={genre.color}
                                                />
                                            </Link>
                                        ))}
                                    </div>

                                    <Routes>
                                        {Genre.map((genre: GenreCardProps) => (
                                            <Route
                                                key={genre.title}
                                                path={`/genre/${genre.title.toLowerCase()}`}
                                                element={
                                                    <div>
                                                        <h1>{genre.title} Category Page</h1>
                                                        <p>{genre.description}</p>
                                                        {/* add your category page content here */}
                                                    </div>
                                                }
                                            />
                                        ))}
                                    </Routes>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
