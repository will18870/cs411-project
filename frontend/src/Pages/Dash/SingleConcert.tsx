
import Footer from '../../components/Footer';
import ConcertCards from '../../components/ConcertCards';
import { useParams } from "react-router-dom";
import { IdSearch } from '../../components/apidata';
import { useEffect, useState } from 'react';
import { ConcertType } from '../../Router/Types.types';


export default function SingleConcert() {
    const { id } = useParams<{ id: string }>();
    // console.log(id);
    const [event, setevent] = useState<any>();
    useEffect(() => {
        async function fetchConcerts() {
            const data = await IdSearch(id??"");
            const sliced = data;
            setevent(sliced ?? []);
        }
        fetchConcerts();
    },[id])

    // const {name, image, description, address, time, url, genre } = event || {};
    // console.log(name);
    const name = event?.name;
    const image = event?.images[0].url;
    const description = event?.info;
    const address = event?._embedded.venues[0].name;
    const time = event?.dates.start.localDate;
    const url = event?.url;
    const genre = event?.genre;


    return (
        <div className="h-max bg-neutral-100">
            <div className="ml-56 ">
                <div className='ml-16'>
                    <div className="flex flex-col md:flex-row pt-24 select-none bg-gradient-to-tr">
                        <img
                            src={image}
                            alt=""
                            className="object-cover xl:w-144 xl:h-144 lg:w-64 lg:h-64 md:h-64 md:w-64 sm:w-48 sm:h-48 drop-shadow-2xl aspect-square rounded-xl"
                        />
                        <div className="flex flex-col mt-auto md:pl-4 ">
                            <h1 className="text-xl font-bold">{genre}</h1>
                            <p className="xl:text-8xl lg:text-6xl md:text-4xl sm:text-2xl font-extrabold py-2 truncate">
                                {name}
                            </p>
                            <h1 className="text-2xl font-extrabold">
                                {name}
                            </h1>
                            <button className="mt-4 border-2 border-black rounded-xl p-3 font-extrabold hover:bg-spotify hover:text-white w-24 content-center" >FOLLOW</button>
                        </div>
                    </div>

                    <div className='flex flex-row w-2/3 '>
                        <div>
                            <p className="mt-8 text-4xl font-semibold">About</p>
                            <p className="mt-4 pr-12">
                                {description}
                            </p>
                            <h2 className="mt-8 text-4xl font-semibold">Address</h2>
                            <p className="mt-2">
                                {address}
                            </p>
                            <h2 className="mt-8 text-4xl font-semibold">Time</h2>
                            <p className="mt-2">{time}
                            </p>
                            <button className="mt-4 border-2 border-black rounded-xl p-3 font-extrabold
                             hover:bg-spotify hover:text-white"  onClick={() => window.open(url)} >Buy Ticket</button>
                        </div>
                        <div className='mr-auto'>
                            <p className='mt-8 text-4xl font-semibold'>Tags</p>
                            <button className='mt-4 border-2 border-black rounded-xl 
                            p-3 font-extrabold hover:bg-spotify hover:text-white'> Comedy </button>
                        </div>
                    </div>
                    <div>
                        <h2 className="mt-8 text-4xl font-semibold">Similiar Event</h2>
                        <ConcertCards searchindex='Boston' num={4}/>

                    </div>

                </div>
                <Footer />
            </div>
        </div>
    );
}