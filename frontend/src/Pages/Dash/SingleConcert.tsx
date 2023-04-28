
import Footer from '../../components/Footer';
import ConcertCards from '../../components/ConcertCards';
import { useParams } from "react-router-dom";
import { IdSearch } from '../../components/apidata';
import { useEffect, useState } from 'react';


export default function SingleConcert() {
    const { id } = useParams<{ id: string }>();
    // console.log(id);
    const [event, setevent] = useState<any>();
    useEffect(() => {
        async function fetchConcerts() {
            const data = await IdSearch(id ?? "");
            const sliced = data;
            setevent(sliced ?? []);
        }
        fetchConcerts();
    }, [id])

    const name = event?.name;
    const image = event?.images[0].url;
    const price = event?.priceRanges[0].min;
    const description = event?.info;
    const address = event?._embedded.venues[0].name;
    const date = event?.dates.start.localDate;
    const time = event?.dates.start.localTime;
    const url = event?.url;
    const genre = event?.genre;


    return (
        <div className="h-max bg-neutral-100 ml-56 ">

            <div className='ml-24  pt-24'>
                <div className="flex flex-row">
                    <img
                        src={image}
                        alt=""
                        className="object-cover xl:w-144 xl:h-144 lg:w-1/2 lg:h-1/2 md:h-64 md:w-64 
                            sm:w-64 sm:h-64 drop-shadow-2xl aspect-square rounded-xl bg-neutral-800 p-8"
                    />
                    <div className=' flex flex-col  border-slate-400  pl-16 lg:w-1/2 '>
                        <p className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-2xl 
                            font-semibold py-2 items-center  w-3/4 ">
                            {name}
                        </p>
                        <div className='flex ' >
                            <button className="mt-8 border-2 border-black rounded-xl p-3 mr-6 
                            font-bold hover:bg-red-500 hover:text-white w-24 
                            content-center " >FOLLOW</button>
                            <button className="mt-8 border-2 border-black rounded-xl p-3 
                            font-bold hover:bg-spotify hover:text-white  
                            content-center text-md"
                                onClick={() => window.open(url)} >Get Ticket</button>
                        </div>
                        <table className="py-8 sm:w-3/4 md:w-3/4 mt-8 text-lg">
                            <tbody className="">
                                <tr className="border-b border-neutral-300">
                                    <th className="text-left text-top pb-6 w-1/2 ">Date</th>
                                    <td className="">{date}</td>
                                </tr>
                                <tr className="border-b ">
                                    <th className="text-left py-6">Price</th>
                                    <td className="">${price}</td>
                                </tr>
                                <tr className="border-b">
                                    <th className="text-left py-6">Start</th>
                                    <td className="">{time}</td>
                                </tr>
                                <tr className="border-b">
                                    <th className="text-left py-6">Venue</th>
                                    <td className="">{address}</td>
                                </tr>
                                <tr className="border-b">
                                    <th className="text-left py-6">Genre</th>
                                    <td className="">{genre}</td>
                                </tr>
                                <tr className="border-b">
                                    <th className="text-left  py-6">Info</th>
                                    <td className="">{description ?? "Happy Weekend"}</td>
                                </tr>
                               
                            </tbody>
                        </table>

                    </div>

                </div>
            </div>
            <div className='ml-16'>
                <h2 className="mt-8 text-4xl font-semibold">Similiar Event</h2>
                <ConcertCards searchindex='Boston' num={4} />

            </div>
            <Footer />
        </div>
    );
}


