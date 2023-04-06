import ConcertCard from "./ConcertCard";

export default function ConcertCards() {
    return (
        <>
            <div className={"ccards"}>
                <div className={"zipcode"}>
                    <p className={"findzipcode"}>Find concert at</p>
                    <p className={"zipcodenum"}>02215</p>
                </div>

                <div className={"cards"}>
                    <ConcertCard/>
                    <ConcertCard/>
                    <ConcertCard/>
                    {/*<ConcertCard/>*/}
                    {/*<ConcertCard/>*/}
                </div>

                <div className={"morebt"}>
                    <button>load more</button>

                </div>

            </div>
        </>
    )
}