import Sidebar from "../../components/Dash/SideBar";
import GenreCardList from "../../components/Dash/GenreCardList";
import GenreCard from '../../components/Dash/GenreCard';

function SearchDash() {
    return (
        <div className="  max-h-max ml-72 bg-neutral-950">
            <div className="flex felx-row  ">
                <div className="fixed">
                    <Sidebar />
                </div>
                <div>
                    <div className="">
                        <div className="bg-black w-screen top-0 pt-4 pl-24 fixed">
                            <input
                                type="text"
                                placeholder="Search for songs, artists, or albums"
                                className="bg-white text-gray-800 rounded-full py-5 pl-4 w-1/3 mb-4"
                            />
                        </div>


                        <div className=" h-screen w-screen mt-48 bg-neutral-950">
                            <div className=" mt-8 h-screen">
                                <p className="font-bold text-4xl text-white ml-8">Explore All </p>
                                <div className="bg-neutral-950">
                                    <GenreCardList/>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchDash;
