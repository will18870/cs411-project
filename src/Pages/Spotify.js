import NavBar from "../components/NavBar";

function Spotify() {
    return (
        <>
            <NavBar/>
            <div className={"spowrap"}>
                <button>Click to Login with Spotify!</button>
            </div>
        </>
    )
}

export default Spotify;