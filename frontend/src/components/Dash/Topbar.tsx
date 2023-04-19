export default function Topbar() {
    return (
        <div className=" top-0 h-12 bg-gray-50 ">
            <div className=" bg-slate-200 w-screen top-0 pt-4 pl-24 fixed border-4 ">
                <input
                    type="text"
                    placeholder="Search for songs, artists, or albums"
                    className="bg-gray-100 text-gray-100 rounded-lg py-3 pl-4 w-1/3 mb-4 border-blue-800 "
                />
            </div>
        </div>
    )
}