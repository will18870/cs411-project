import Sidebar from "./SideBar";
import Footer from './Footer';
import ConcertCards from './ConcertCards';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {ConcertSearch} from './apidata';
const result = await ConcertSearch("Classic");
// const eventName = result._embedded.events[0].name;
const eventName = "test"

export default function SingleGenre() {
    const { title } = useParams();
    
    console.log(eventName);
    return (
        <div className="bg-neutral-100 h-max">
            <Sidebar />
            <div className="ml-72 ">
                <div className=" pt-36 select-none text-black truncate text-4xl font-bold ">
                    <p className='text-9xl font-extrabold border-b-4 border-black'>{title} </p>
                    <p className='mt-16'>Most Popular</p>
                    {/* <ConcertCards /> */}
                    {/* <p>{conlist[0]}</p> */}
                    <p className='mt-24'> Concerts Nearby</p>
                    {/* <ConcertCards /> */}
                </div>
                <Footer />
            </div>
        </div>

    );
}
