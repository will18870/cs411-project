import Sidebar from "../../components/Dash/SideBar";
import ConcertCards from '../../components/Dash/ConcertCards';
function Dashboard() {

  return (
    <div className=" bg-black   ">
      <div className="bg-neutral-100 h-max">
        <div className="">
          <div className="fixed">
            <Sidebar />
          </div>
          <div className="ml-72 bg-neutral-100 truncate overflow-scroll">
            <div className=" ">
              {/* <div className="pb-8">
                <Topbar />
              </div> */}

              <div className="ml-16 pt-12 select-none">
                <div>
                <p className='text-black text-5xl font-bold truncate '>We Recommend for you </p>
                </div>
                
                <div className="overflow-x-auto">
                  <ConcertCards />
                </div>
              </div>


              <div className="ml-16 mt-20 select-none">
                <p className='text-black text-5xl font-bold truncate'>Your Favorite Artists </p>

                <div className="overflow-x-auto">
                  <ConcertCards />
                </div>
              </div>


              <div className="ml-16 mt-20">
                <p className='text-black text-5xl font-bold truncate'>Concerts Near You </p>

                <div className="overflow-x-auto">
                  <ConcertCards />
                </div>
              </div>

            </div>
          </div >
        </div>

      </div>
    </div>

  );
}

export default Dashboard;
