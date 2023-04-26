export default function DashTopbar() {
    return (

        <div className=" bg-black w-screen pt-4 pl-16  border-b-0  font-bold uppercase border-white">
            <input
                type="text"
                // placeholder="Search for songs, artists, or albums"
                className="bg-spotify text-4xl text-white rounded-lg uppercase py-6 pl-4 w-1/2 mt-4 "
            />
        </div>

    )
}