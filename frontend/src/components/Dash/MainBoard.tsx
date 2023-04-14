import ConcertCards from './ConcertCards';
export default function MainBoard() {
    return (
        <main className="flex-1 mt-16 h-max ml-8 ">
            <p className='text-white sm:pl-6 lg:pl-6  2xl:pl-12 pt-12 text-5xl font-bold truncate'>We Recommend for you </p>
            <div>
                <ConcertCards />
            </div>
            <p className='text-white sm:pl-6 lg:pl-6  2xl:pl-12 pt-12 text-3xl font-bold truncate'>Your Favorite Artists </p>
            <div>
                <ConcertCards />
            </div>
            <p className='text-white sm:pl-6 lg:pl-6  2xl:pl-12 pt-12 text-3xl font-bold truncate'>Concerts Near You </p>
            <div>
                <ConcertCards />
            </div>

        </main>
    )
}
