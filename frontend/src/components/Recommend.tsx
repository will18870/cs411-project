import ConcertCards from "./ConcertCards"
import Footer from "./Footer"

export default function Recommend() {
    return (
        <div className="ml-56 bg-gradient-to-t from-black to-neutral-800">
            <div className="truncate ml-16 text-neutral-100 text-6xl font-bold pt-36 ">
                <p className='border-b-1 border-neutral-100  mb-8'>We Recommend for you </p>
                <ConcertCards searchindex="BlackPink" />
                <p className='mt-40 border-b-2 border-white mb-8'>Your Favorite Artists </p>
                <ConcertCards searchindex="New York" />
                {/* <ConcertCards /> */}
                <p className='mt-40 border-b-2 border-white mb-8'>Concerts Near You </p>
                <ConcertCards searchindex="Boston" />
                {/* <ConcertCards /> */}
            </div>
            <Footer />
        </div>
    )
}