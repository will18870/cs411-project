export default function DashTopbar() {
    return (

        <div className=" bg-neutral-100 w-screen pt-4 pl-16  border-b-0  font-bold uppercase border-white">
            <input
                type="text"
                // placeholder="Search for songs, artists, or albums"
                className="bg-neutral-100 text-2xl text-black rounded-lg py-4 pl-4 w-1/2 mt-4 hover:drop-shadow-xl stroke-lime-500 border-4"
            />
        </div>

    )
}