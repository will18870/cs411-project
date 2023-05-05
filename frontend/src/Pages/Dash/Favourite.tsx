import DashTopbar from "../../components/Topbar"
import Footer from "../../components/Footer"
import ConcertCards from '../../components/ConcertCards';
export default function Favourite() {
    return (
        <div className="ml-64 bg-neutral-100 min-h-screen">
            <DashTopbar />
            <div className="ml-16 mt-12 ">
                <p className="font-semibold text-5xl text-black ">Favourite</p>
                <ConcertCards searchindex="kpop" num={1} type="db" />
            </div>
            <div className="bottom-component mt-auto">
                <Footer />
            </div>

        </div>
    )
}