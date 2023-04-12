import spo from '../../Resources/spo-logo.png';
export default function Content() {
  return (

    <div className="flex flex-col">

      <div className='flex flex-row'>
        <div className="h-screen/1.5 bg-white flex justify-start items-center">
          <div className="text-black  font-medium flex-row pb-36 ">
            <p className="pt-36 text-left w-2/3 pl-36  text-4xl ">
              Explore local concerts with a Spotify twist
            </p>
            <p className="pt-6  font-normal  text-sm text-left w-2/3 pl-36  ">
              Experience the local music scene like never before
              Find concerts effortlessly
            </p>
            <button className=" text-sm ml-48 border mt-3 bg-spotify p-2 rounded-xl">Get Start Now</button>
          </div>
        </div>
        <img src={spo} alt="" className=' w-1/2' />
      </div>



      <div className="h-screen/1.5  bg-white ">
        <div className="text-black text-3xl font-medium   ">
          <p className="pt-48  text-center w-1/2 mx-auto">
            Find your perfect concert with ease, powered by Spotify
          </p>
          <p className="pt-6  font-normal text-sm text-center w-1/2 mx-auto">
            From jazz bars to rock arenas, our platform connects you with the hottest live
            music events in your city. Discover new artists and never miss a beat with our
            user-friendly interface. With our help, you can experience the local music scene
            like never before
          </p>
        </div>
      </div>



      <div className="bg-white flex  items-center">
        <div className="text-black text-2xl font-medium flex-row ">
          <p className="pt-48 text-left w-2/3 pl-36  ">
            Discover your perfect concert
          </p>
          <p className="pt-6  font-normal  text-sm text-left w-1/2 pl-36  ">
            Get personalized concert suggestions based on your preferences and listening history,
            powered by Spotify's machine learning algorithms.
            Let us do the work for you and say goodbye to the hassle of searching for the perfect show.
          </p>
        </div>
      </div>

      <div className="flex flex-row-reverse">
        <div className='w-1/2'>
          <div className='flex flex-row-reverse'>
            <div className='pl-36'>
              <p className="pt-48 text-black text-2xl font-medium ">
                Stay organized
              </p>
              <p className="pt-6 font-normal text-sm w-2/3">
                Sync your concert schedule with ease using our calendar integration feature.
                Never miss a beat or double-book again.
              </p>
            </div>
          </div>
        </div>
      </div>




      <div className="h-screen/1.5 bg-white flex justify-start items-center">
        <div className="text-black text-2xl font-medium flex-row ">
          <p className="pt-48 text-left w-1/2 pl-36  ">
            Get to know your favorite artists
          </p>
          <p className="pt-6 pb-36 font-normal  text-sm text-left w-1/2 pl-36  ">
            Learn more about your favorite artists, view their upcoming shows,
            and even follow them on social media with our artist profiles feature.
            Stay up-to-date with the latest news and events from the artists you love.
          </p>
        </div>
      </div>


      <div className="h-screen/1.5 bg-[#1ED760] flex justify-center items-center">
        <div className="w-3/4">
          <p className=" py-12 font-normal text-xl text-center">
            By connecting users with their local music scene, our platform brings together
            live music lovers, artists, and event organizers towards a shared goal:
            to promote and celebrate the love of music. With our personalized
            recommendations and convenient ticket purchasing, we've made it easier
            for users to discover and attend the perfect concerts. And by offering
            a space for user reviews and artist profiles, we've created a community
            that fosters the growth of local music scenes. Join us and experience
            the power of shared passion for live music.
          </p>
        </div>
      </div>

    </div>
  );
}
