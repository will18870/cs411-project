import ConcertCard from "./ConcertCard";

export default function ConcertCards() {
  return (
    <>
      <div className="flex-1 pl-2  pr-20 pt-10 bg-black">
        <div className="flex items-baseline">
          <p className="font-semibold text-2xl  pr-1 text-white">Find concert at</p>
          <p className="text-gray-500 text-2xl">02215</p>
        </div>

        <div className="flex flex-wrap justify-center mt-6 ">
          <ConcertCard />
          <ConcertCard />
          <ConcertCard />
          <ConcertCard />
          <ConcertCard />
          <ConcertCard />
          <ConcertCard />
          <ConcertCard />
        </div>

        <div className="flex justify-center  mb-12">
          <button className="py-2 px-8 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300 ease-in-out">Load More</button>
        </div>
      </div>
    </>
  );
}
