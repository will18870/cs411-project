import Sidebar from '../../components/SideBar';
import Genre from '../../datas/Genredata.json';
import { GenreCardProps } from "../../Router/Types.types";
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import DashTopbar from '../../components/Topbar';

const GenreCard: React.FC<GenreCardProps> = ({ title }) => {
    return (
        <div className="rounded-xl shadow-lg bg-spotify aspect-square hover:bg-cyan-500">
            <p className="text-3xl font-semibold ml-5 pt-4 text-black placeholder-black">{title}</p>
        </div>
    );
};

export default function SearchDash() {

    return (
        <div className='bg-neutral-100'>
            <Sidebar />
            <div className="ml-56">
                <DashTopbar />

                <div className="ml-16">
                    <p className='text-neutral-900 text-4xl font-bold truncate pt-12 border-b-4 border-neutral-900 pb-2'>Explore All</p>

                    <div className=" pt-12 pr-8">
                        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 truncate" >
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
