import ConcertCards from "./ConcertCards"
import Footer from "./Footer"

export default function Recommend() {
    return (
        <div className="ml-56">
            <div className="truncate ml-16 text-black text-6xl font-bold pt-36 ">
                <p className='border-b-2 border-black mb-8'>We Recommend for you </p>
                <ConcertCards searchindex="Boston" />
                <p className='mt-40 border-b-2 border-black mb-8'>Your Favorite Artists </p>
                <ConcertCards searchindex="New York" />
                {/* <ConcertCards /> */}
                <p className='mt-40 border-b-2 border-black mb-8'>Concerts Near You </p>
                <ConcertCards searchindex="Ohio" />
                {/* <ConcertCards /> */}
            </div>
            <Footer />
        </div>
    )
}