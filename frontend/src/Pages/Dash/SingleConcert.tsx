
import Footer from '../../components/Footer';
import ConcertCards from '../../components/ConcertCards';
import { useParams } from "react-router-dom";
import { IdSearch } from '../../components/apidata';
import { useEffect, useState } from 'react';


export default function SingleConcert() {
    const { id } = useParams<{ id: string }>();

    const [updating, setUpdating] = useState(false);
    const [event, setevent] = useState<any>();

    const handleClick = async () => {
        setUpdating(true);
        try {
            const response = await fetch(`http://localhost:3000/addConcert?id=` + localStorage.getItem('spotify_id') + '&concertid=' + id, {
                method: 'POST',
            });
            if (!response.ok) {
                throw new Error('Update failed');
            }
            // handle successful update
            console.log(response)
        } catch (error) {
            // handle error
        } finally {
            setUpdating(false);
        }
    };

    // console.log(id);
    useEffect(() => {
        async function fetchConcerts() {
            const data = await IdSearch(id ?? "");
            const sliced = data;
            setevent(sliced ?? []);
        }
        fetchConcerts();
    }, [id])

    const name = event?.name ?? "";
    const image = event?.images[0].url ?? "";
    const price = event?.priceRanges?.[0]?.min ?? " Price Not Found :(";
    const description = event?.info ?? "";
    const address = event?._embedded.venues[0].name ?? "";
    const date = event?.dates.start.localDate ?? "";
    const time = event?.dates.start.localTime ?? "";
    const url = event?.url ?? "";
    const genre = event?.genre ?? "";

    if (!event) {
        return (<div>Loading...</div>)
    }


    return (
        <div className="h-max bg-neutral-100 ml-56 ">

            <div className='ml-24  pt-24 truncate'>
                <div className="grid grid-cols-1 xl:grid-cols-2 ">
                    <div className=' w-full h-full ml-16'>
                    <img
                        src={image}
                        alt=""
                        className="object-cover w-3/4
                             drop-shadow-2xl aspect-square rounded-xl bg-neutral-800 p-8"
                    />
                    </div>
                   
                    <div className=' flex flex-col  border-slate-400  pl-16'>
                        <p className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-2xl 
                            font-semibold py-2 items-center  w-3/4 sm:pt-24 lg:pt-0">
                            {name}
                        </p>
                        <div className='flex ' >
                            <button className="mt-8 border-2 border-black rounded-xl p-3 mr-6 
                            font-bold hover:bg-red-500 hover:text-white w-24 
                            content-center " onClick={handleClick} disabled={updating}>FOLLOW</button>
                            <button className="mt-8 border-2 border-black rounded-xl p-3 
                            font-bold hover:bg-spotify hover:text-white  
                            content-center text-md"
                                onClick={() => window.open(url)} >Get Ticket</button>
                        </div>
                        <table className="py-8 w-full md:w-3/4 mt-8 text-lg truncate">
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
                <h2 className="mt-24 text-4xl font-semibold">Similiar Event</h2>
                <ConcertCards searchindex='Boston' num={4} type={''} />

            </div>
            <Footer />
        </div>
    );
}


