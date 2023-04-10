export default function Footer() {
  return (
    <>
      <footer className="pt-8 pb-8 bg-black flex justify-between items-center ">
        <p className="pl-10 text-sm text-gray-100">&copy; 2023 CS411 Class Project - Boston University</p>
        <div className="flex px-10 ">
          <div className="flex flex-col px-10">
            <p className="font-medium text-gray-200 mb-2">Pages</p>
            <ul className="list-none font-thin">
              <li>
                <a href="/" className="text-gray-100 hover:text-gray-900">Home</a>
              </li>
              <li>
                <a href="/" className="text-gray-100 hover:text-gray-900">Concert</a>
              </li>
              <li>
                <a href="/" className="text-gray-100 hover:text-gray-900">Showcase</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col px-10">
            <p className="font-medium text-gray-200 mb-2">APIs</p>
            <ul className="list-none font-thin">
              <li>
                <a href="/" className="text-gray-100 hover:text-gray-900">Google</a>
              </li>
              <li>
                <a href="/" className="text-gray-100 hover:text-gray-900">Spotify</a>
              </li>
              <li>
                <a href="/" className="text-gray-100 hover:text-gray-900">SongKick</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col px-10">
            <p className="font-medium text-gray-200 mb-2">Members</p>
            <ul className="list-none font-thin">
              <li>
                <a href="/" className="text-gray-100 hover:text-gray-900">Albert</a>
              </li>
              <li>
                <a href="/" className="text-gray-100 hover:text-gray-900">Hangqi</a>
              </li>
              <li>
                <a href="/" className="text-gray-100 hover:text-gray-900">Maria</a>
              </li>
              <li>
                <a href="/" className="text-gray-100 hover:text-gray-900">William</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
