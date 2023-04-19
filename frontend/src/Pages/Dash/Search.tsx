import Sidebar from "../../components/Dash/SideBar";
import GenreCardList from "../../components/Dash/GenreCardList";
import Topbar from '../../components/Dash/Topbar';

function SearchDash() {
    return (
        <div className="max-h-max ml-72 w-screen">
            <div className="flex felx-row  ">
                <div className="fixed">
                    <Sidebar />
                </div>
                <div>
                    <div className="">
                        <Topbar/>
                            <div className="h-screen w-screen bg-neutral-50">
                                <p className="font-bold text-4xl text-black ml-8 mt-16">Explore All </p>
                                <div className="">
                                    <GenreCardList />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchDash;
