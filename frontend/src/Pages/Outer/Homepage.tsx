import HomeNavBar from "../../components/NavBar";
import Footer from "../../components/Footer"
import spo from '../../Resources/tst1.png';
import { Carousel } from 'antd';

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
        <div className="flex flex-col justify-between relative font-bold">
            <HomeNavBar />


            <div className="flex flex-col">

                <div className='flex flex-row'>
                    <div className="h-screen/1.5  bg-white xl:h-1/3 flex justify-start items-center">
                        <div className="text-black flex-row pb-36 ">
                            <p className="pt-48 text-left pl-36  text-8xl font-medium font-'Molengo' ">
                                Explore local concerts with a Spotify twist
                            </p>
                            <p className="pt-8 font-normal text-2xl text-left w-2/3 pl-36  ">
                                Experience the local music scene like never before
                                Find concerts effortlessly
                            </p>
                            <button className=" text-2xl font-normal ml-48 border mt-8 bg-spotify py-4 px-8 rounded-xl justify-end">Get Start Now</button>
                        </div>
                    </div>
                    <img src={spo} alt="" className='w-1/2' />
                </div>



                <div className=" bg-white mb-4">
                    <div className="text-black justify-center align-middle">
                        <p className="pt-36 text-center mx-auto text-6xl font-medium w-1/2 ">
                            Find your perfect concert with ease, powered by Spotify
                        </p>
                        <p className="pt-6  font-normal text-xl text-center w-1/3 mx-auto">
                            From jazz bars to rock arenas, our platform connects you with the hottest live
                            music events in your city. Discover new artists and never miss a beat with our
                            friendly interface. With our help, you can experience the local music scene
                            like never before
                        </p>
                    </div>
                    <Carousel afterChange={onChange} className="mt-16 mx-48 rounded-xl">
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



                <div className="bg-white flex items-center mb-96 mt-2">
                    <div className="text-black flex-row ">
                        <p className="pt-24  text-6xl font-medium text-left w-1/2 pl-36  ">
                            Discover your perfect concert
                        </p>
                        <p className="pt-6 font-normal  text-xl text-left w-1/2 pl-36  ">
                            Get personalized concert suggestions based on your preferences and listening history,
                            powered by Spotify's machine learning algorithms.
                            Let us do the work for you and say goodbye to the hassle of searching for the perfect show.
                        </p>
                    </div>
                </div>

                <div className="flex flex-row-reverse mb-96">
                    <div className='w-1/2'>
                        <div className='flex flex-row-reverse'>
                            <div className='pl-24'>
                                <p className="pt-48 text-black text-5xl font-medium ">
                                    Stay organized
                                </p>
                                <p className="pt-6 font-normal text-xl w-2/3">
                                    Sync your concert schedule with ease using our calendar integration feature.
                                    Never miss a beat or double-book again.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="h-screen/1.5 bg-white flex justify-start items-center mb-96 t-64">
                    <div className="text-black text-5xl font-medium flex-row ">
                        <p className="pt-48 text-left w-1/2 pl-36  ">
                            Get to know your favorite artists
                        </p>
                        <p className="pt-6 pb-36 font-normal  text-xl text-left w-1/2 pl-36  ">
                            Learn more about your favorite artists, view their upcoming shows,
                            and even follow them on social media with our artist profiles feature.
                            Stay up-to-date with the latest news and events from the artists you love.
                        </p>
                    </div>
                </div>

            </div>


            <Footer />
        </div>
    );
}

export default Home;
