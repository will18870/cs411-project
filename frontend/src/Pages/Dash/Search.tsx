import Sidebar from "../../components/Dash/SideBar";
import GenreCardList from "../../components/Dash/GenreCardList";
import Topbar from '../../components/Dash/Topbar';

function SearchDash() {
    return (
<<<<<<< HEAD
        <div className="max-h-max ml-72 w-screen">
=======
        <div className="  max-h-max ml-72 bg-neutral-50">
>>>>>>> 2cf548e243cb1ea12b9be0dccd1ef3da3bf2dc91
            <div className="flex felx-row  ">
                <div className="fixed">
                    <Sidebar />
                </div>
                <div>
                    <div className="">
<<<<<<< HEAD
                        <Topbar/>
                            <div className="h-screen w-screen">
                                <p className="font-bold text-4xl text-black ml-8 mt-16">Explore All </p>
                                <div className="">
                                    <GenreCardList />
=======
                        <div className="bg-white w-screen top-0 pt-4 pl-24 fixed">
                            <input
                                type="text"
                                placeholder="Search for songs, artists, or albums"
                                className="bg-white text-gray-100 rounded-full py-5 pl-4 w-1/3 mb-4 border"
                            /> 
                        </div>


                        <div className=" h-screen w-screen mt-48 bg-neutral-50">
                            <div className=" mt-8 h-screen">
                                <p className="font-bold text-4xl text-black ml-8">Explore All </p>
                                <div className="bg-neutral-50">
                                    <GenreCardList/>
                                </div>


>>>>>>> 2cf548e243cb1ea12b9be0dccd1ef3da3bf2dc91
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchDash;
