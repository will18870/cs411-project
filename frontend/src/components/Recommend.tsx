import ConcertCards from "./ConcertCards"
import Footer from "./Footer"

export default function Recommend() {
    return (
        <div className="ml-56 bg-neutral-100">
            <div className="truncate ml-16 text-neutral-900 text-6xl font-bold pt-36 ">
                <p className='border-b-2 border-neutral-900  mb-8'>We Recommend for you </p>
                <ConcertCards searchindex="BlackPink" num={8}  />
                <p className='mt-40 border-b-2 border-white mb-8'>Your Favorite Artists </p>
                <ConcertCards searchindex="New York" num={6}/>
                {/* <ConcertCards /> */}
                <p className='mt-40 border-b-2 border-white mb-8'>Concerts Near You </p>
                <ConcertCards searchindex="Boston" num={8} />
                {/* <ConcertCards /> */}
            </div>
            <div className="text-neutral-900 ml-8">
            <Footer />
            </div>
            
        </div>
    )
}