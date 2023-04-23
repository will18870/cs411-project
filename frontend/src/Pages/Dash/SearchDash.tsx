import Sidebar from '../../components/SideBar';
import DashTopbar from '../../components/Topbar';
import { Genre } from '../../datas/Genre.data';
import { GenreCardProps } from "../../Router/Types.types";
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

const GenreCard: React.FC<GenreCardProps> = ({ title }) => {
    return (
        <div className="rounded-xl shadow-lg bg-red-200 aspect-square ">
            <p className="text-4xl font-bold ml-4 pt-6 text-white">{title}</p>
        </div>
    );
};

export default function SearchDash() {

    return (
        <div className=''>
            <Sidebar />
            <div className="pb-8 ml-72">
                <DashTopbar />

                <div className="">
                    <p className='text-black text-4xl font-bold truncate ml-6 mt-20'>Explore All</p>

                    <div className="pl-6 pt-8 ">
                        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 xl:grid-cols-6 truncate" >
                            {Genre.map((genre: GenreCardProps) => (
                                <Link to={`/Dash/genre/${genre.title.toLowerCase()}`} key={genre.title}>

                                    <GenreCard
                                        title={genre.title}
                                        image={genre.image}
                                        description={genre.description}
                                        color={genre.color}
                                    />
                                </Link>
                            ))}
                        </div>

                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}
