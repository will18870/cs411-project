import HomeNavBar from "../../components/NavBar";
import Footer from "../../components/Footer"
import spo from '../../Resources/tst1.png';
import { Carousel } from 'antd';
import { handleSpotifyLogin } from "../../components/LoginOauth";

function Home() {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };
    const contentStyle: React.CSSProperties = {
        margin: 0,
        height: '400px',
        color: '#fff',
        lineHeight: '400px',
        textAlign: 'center',
        background: '#364d79',
    };
    return (
        <div className="flex flex-col justify-between relative font-medium bg-neutral-50 text-black lg:text-lg xl:text-2xl">
            <HomeNavBar />

            <div className="flex flex-col">

                <div className='flex flex-row'>
                    <div className="h-screen/1.5 xl:h-1/3 flex justify-start items-center">
                        <div className=" flex-row pb-36 pl-24 pr-12 ">
                            <p className="pt-48 text-left  sm:text-5xl lg:text-7xl xl:text-9xl  ">
                                Explore local concerts with a Spotify twist
                            </p>
                            <p className="pt-8   text-left w-2/3 ">
                                Experience the local music scene like never before
                                Find concerts effortlessly
                            </p>
                            <button className="border mt-8
                             bg-spotify py-4 px-8 rounded-xl justify-end" onClick={() => { console.log(handleSpotifyLogin); handleSpotifyLogin(); }} >Get Start Now</button>
                        </div>
                    </div>
                    <img src={spo} alt="" className='w-1/2' />
                </div>

                <div className="  mb-4">
                    <div className=" justify-center align-middle">
                        <p className="pt-16 lg:pt-48 text-center mx-auto sm:text-4xl lg:text-5xl xl:text-5xl w-1/2 lg:w-1/3 ">
                            Find your perfect concert with ease, powered by Spotify
                        </p>
                        <p className="pt-6 text-center w-1/2 mx-auto sm:font-medium">
                            From jazz bars to rock arenas, our platform connects you with the hottest live
                            music events in your city. Discover new artists and never miss a beat with our
                            friendly interface. With our help, you can experience the local music scene
                            like never before
                        </p>
                    </div>
                    <Carousel afterChange={onChange} className="mt-6 mx-48 rounded-xl">
                        <div>
                            <h3 style={contentStyle}>1</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>2</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>3</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>4</h3>
                        </div>
                    </Carousel>
                </div>



                <div className=" flex items-center mb-72 mt-2">
                    <div className=" flex-row sm:pl-24 lg:pl-48 sm:w-1/2 lg:w-2/5">
                        <p className="pt-24   sm:text-4xl lg:text-6xl  text-left   ">
                            Discover your perfect concert
                        </p>
                        <p className="pt-6   text-left   sm:font-medium ">
                            Get personalized concert suggestions based on your preferences and listening history,
                            powered by Spotify's machine learning algorithms.
                            Let us do the work for you and say goodbye to the hassle of searching for the perfect show.
                        </p>
                    </div>
                </div>

                <div className="flex flex-row-reverse mb-72">
                    <div className='w-1/2'>
                        <div className='flex flex-row-reverse'>
                            <div className='pl-24'>
                                <p className="  sm:text-4xl lg:text-6xl  ">
                                    Stay organized
                                </p>
                                <p className="pt-6  w-2/3 sm:font-medium">
                                    Sync your concert schedule with ease using our calendar integration feature.
                                    Never miss a beat or double-book again.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-screen/1.5 flex justify-start items-center mb-48 ">
                    <div className=" flex-row sm:w-2/3 md:w-1/2 xl:w-1/3 sm:pl-24  lg:pl-48">
                        <p className="pt-24 text-left sm:text-4xl lg:text-6xl   ">
                            Get to know your favorite artists
                        </p>
                        <p className="pt-6 pb-4 text-left  ">
                            Learn more about your favorite artists, view their upcoming shows,
                            and even follow them on social media with our artist profiles feature.
                            Stay up-to-date with the latest news and events from the artists you love.
                        </p>
                    </div>
                </div>

            </div>
            <div className="ml-16">
                <Footer />
            </div>

        </div>
    );
}

export default Home;
