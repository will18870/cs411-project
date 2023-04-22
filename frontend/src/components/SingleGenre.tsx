import Sidebar from "../SideBar";
import { GenreCardProps } from "../../Router/Types.types";
import Footer from '../Footer';
import ConcertCards from './ConcertCards';

interface SingleGenreProps extends GenreCardProps { }

export default function SingleGenre({ title, image, description, color }: SingleGenreProps) {
    return (

        <div className="bg-neutral-100 h-max">
            <Sidebar />
            <div className="ml-72 ">
                <div className="ml-16 pt-24 select-none text-black truncate  text-4xl font-bold ">
                    <p className='text-8xl font-extrabold'>Blue </p>
                      <p className='mt-24'>Most Popular</p>
                    <ConcertCards />
                    <p className='mt-24'> Concerts Nearby</p>
                    <ConcertCards />
                </div>
                <Footer />
            </div>
        </div>

    );
}
