import Sidebar from '../../components/SideBar';
import Genre from '../../datas/Genredata.json';
import { GenreCardProps } from "../../Router/Types.types";
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import DashTopbar from '../../components/Topbar';

const GenreCard: React.FC<GenreCardProps> = ({ title }) => {
    return (
        <div className="rounded-xl shadow-lg bg-spotify aspect-square ">
            <p className="text-4xl font-bold ml-4 pt-6 text-black placeholder-black">{title}</p>
        </div>
    );
};

export default function SearchDash() {

    return (
        <div className='bg-neutral-800'>
            <Sidebar />
            <div className="ml-56">
                <DashTopbar />

                <div className="ml-16">
                    <p className='text-white text-8xl font-bold truncate pt-24 border-b-4 border-white'>Explore All</p>

                    <div className=" pt-12 pr-8">
                        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 truncate" >
                            {Genre.map((genre: GenreCardProps) => (
                                <Link to={`/Dash/genre/${genre.title}`} key={genre.title}>
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
                    
                </div>
                <Footer />
            </div>
        </div>
    );
}
