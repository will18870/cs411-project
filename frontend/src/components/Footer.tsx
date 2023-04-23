export default function Footer() {
  return (
    <>
    <div className="flex flex-col-reverse">
      <footer className="pt-24 flex flex-row text-gray-800 mb-16">
        <p className="ml-16 w-1/3 font-medium text-2xl ">&copy; 2023 CS411 Class Project - Boston University</p>
        <div className="w-screen">
          <div className="flex justify-evenly border-s-violet-50 font-medium text-2xl " >
            <div className="flex flex-col ">
              <p className=" mb-6">Pages</p>
              <ul className="list-none text-xl pb-3">
                <li>
                  <a href="/" className=" ">Home</a>
                </li>
                <li>
                  <a href="/" className=" ">Concert</a>
                </li>
                <li>
                  <a href="/" className=" ">Showcase</a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <p className="mb-6">APIs</p>
              <ul className="list-none text-xl pb-3">
                <li>
                  <a href="/" className=" ">Google</a>
                </li>
                <li>
                  <a href="/" className=" ">Spotify</a>
                </li>
                <li>
                  <a href="/" className=" ">SongKick</a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <p className="mb-6">Members</p>
              <ul className="list-none text-xl pb-3">
                <li>
                  <a href="/" className=" ">Albert</a>
                </li>
                <li>
                  <a href="/" className=" ">Hangqi</a>
                </li>
                <li>
                  <a href="/" className=" ">Maria</a>
                </li>
                <li>
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
