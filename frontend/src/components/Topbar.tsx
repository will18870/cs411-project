export default function DashTopbar() {
    return (
        <div className=" top-0 h-12 bg-white border-b-2 border-black">
            <div className=" bg-white w-screen top-0 pt-4 pl-24 fixed border-b-2  border-black">
                <input
                    type="text"
                    placeholder="Search for songs, artists, or albums"
                    className="bg-spotify text-black rounded-lg py-3 pl-4 w-1/3 mb-4 "
                />
            </div>
        </div>
    )
}