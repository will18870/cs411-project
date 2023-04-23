import Sidebar from "./SideBar";
import Footer from './Footer';
import ConcertCards from './ConcertCards';
import { useParams } from 'react-router-dom';

export default function SingleGenre() {
    const { title } = useParams();

    return (
        <div className="bg-neutral-100 h-max">
            <Sidebar />
            <div className="ml-72 ">
                <div className=" pt-36 select-none text-black truncate text-4xl font-bold ">
                    <p className='text-9xl font-extrabold border-b-4 border-black'>{title} </p>
                    <p className='mt-16'>Most Popular</p>
                    <ConcertCards />
                    <p className='mt-24'> Concerts Nearby</p>
                    <ConcertCards />
                </div>
                <Footer />
            </div>
        </div>

    );
}
