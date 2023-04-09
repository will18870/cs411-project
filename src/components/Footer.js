export default function Footer() {
  return (
    <>
      <footer className=" pt-8 pb-8 bg-gray-200 lg:px-10 flex justify-between items-center ">
          <p className="text-sm text-gray-600">&copy; 2023 CS411 Class Project - Boston University</p>
          {/* <div className="hidden md:block"> */}
            <div className="flex px-10 ">
              <div className="flex flex-col px-10">
                <p className="font-medium text-gray-700 mb-2">Pages</p>
                <ul className="list-none ">
                  <li>
                    <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
                  </li>
                  <li>
                    <a href="/" className="text-gray-600 hover:text-gray-900">Concert</a>
                  </li>
                  <li>
                    <a href="/" className="text-gray-600 hover:text-gray-900">Showcase</a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col px-10">
                <p className="font-medium text-gray-700 mb-2">APIs</p>
                <ul className="list-none">
                  <li>
                    <a href="/" className="text-gray-600 hover:text-gray-900">Google</a>
                  </li>
                  <li>
                    <a href="/" className="text-gray-600 hover:text-gray-900">Spotify</a>
                  </li>
                  <li>
                    <a href="/" className="text-gray-600 hover:text-gray-900">SongKick</a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col px-10">
                <p className="font-medium text-gray-700 mb-2">Members</p>
                <ul className="list-none">
                  <li>
                    <a href="/" className="text-gray-600 hover:text-gray-900">Albert</a>
                  </li>
                  <li>
                    <a href="/" className="text-gray-600 hover:text-gray-900">Hangqi</a>
                  </li>
                  <li>
                    <a href="/" className="text-gray-600 hover:text-gray-900">Maria</a>
                  </li>
                  <li>
                    <a href="/" className="text-gray-600 hover:text-gray-900">William</a>
                  </li>
                </ul>
              </div>
            </div>
          {/* </div> */}
        {/* </div> */}
      </footer>
    </>
  );
}
