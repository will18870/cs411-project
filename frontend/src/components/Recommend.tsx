import ConcertCards from "./ConcertCards"
export default function Recommend() {
    return (
        <div>
            <div className="truncate ml-80 text-black text-4xl font-bold pt-20 ">
                <p className='text-6xl '>We Recommend for you </p>
                <ConcertCards />
                <p className='mt-20'>Your Favorite Artists </p>
                <ConcertCards />
                <p className=' mt-20'>Concerts Near You </p>
                <ConcertCards />
            </div>
        </div>
    )
}