export default function Footer() {
  return (
    <>
    <div className="flex flex-col-reverse">
      <footer className="pt-24 flex flex-row mb-16 sm:text-xl lg:text-4xl">
        <p className="ml-16 w-1/2 font-medium ">&copy; 2023 CS411 Class Project - Boston University</p>
        <div className="w-screen sm:pl-32 lg:pl-96">
          <div className="flex justify-evenly border-s-violet-50 font-medium  " >

            <div className="flex flex-col">
              <p className="mb-4">Apis</p>
              <ul className="list-none   ">
                {/* <li>
                  <a href="/" className=" ">Google</a>
                </li> */}
                <li className="my-3">
                  <a href="/" className=" ">Spotify</a>
                </li>
                <li>
                  <a href="/" className=" ">TicketMaster</a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <p className="mb-4">Members</p>
              <ul className="list-none  ">
                <li className="my-3">
                  <a href="/" className="my-3 ">Albert</a>
                </li>
                <li className="my-3">
                  <a href="/" className=" ">Hangqi</a>
                </li>
                <li className="my-3">
                  <a href="/" className=" ">Maria</a>
                </li>
                <li className="my-3">
                  <a href="/" className=" ">William</a>
                </li>
              </ul>
            </div>

          </div>
        </div>




      </footer>
      </div>
    </>
  );
}
