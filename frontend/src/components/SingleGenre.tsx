import Sidebar from "./SideBar";
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import ConcertCards from './ConcertCards';

export default function SingleGenre() {
    const { title } = useParams();
    const myString: string = title ?? "happy";


    return (
        <div className="bg-neutral-100 h-max">
            <Sidebar />
            <div className="ml-72  ">
                <div className=" pt-36 select-none text-black truncate text-4xl font-bold pb-24 ">
                    <p className='text-9xl font-extrabold border-b-4 border-black'>{title} </p>
                    <p className='mt-16'>Most Popular</p>
                    <ConcertCards searchindex={myString} num={-1} />
                    <p className='mt-24'> Concerts Nearby</p>
                    <ConcertCards num={4} searchindex={"Boston"} />
                </div>
                <div className="text-neutral-900">
                    <Footer />
                </div>

            </div>
        </div>
    );
}
