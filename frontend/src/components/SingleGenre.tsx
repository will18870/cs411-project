import Sidebar from "./SideBar";
import Footer from './Footer';
import ConcertCards from './ConcertCards';
import { useParams } from 'react-router-dom';

export default function SingleGenre() {
    const { title } = useParams();
    const upperCaseTitle = (title ?? '').charAt(0).toUpperCase() + (title ?? '').slice(1);

    return (
        <div className="bg-neutral-100 h-max">
            <Sidebar />
            <div className="ml-72 ">
                <div className="ml-16 pt-24 select-none text-black truncate text-4xl font-bold ">
                    <p className='text-8xl font-extrabold'>{upperCaseTitle} </p>
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
