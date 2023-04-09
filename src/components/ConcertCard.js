export default function ConcertCard() {
    return (
      <>
        <div className=" h-96 w-8vh mx-4 border-2 border-gray-200  flex flex-col mb-10 bg-white">
          <img className="w-full h-52 object-cover mb-4 " src={require("../Resources/poster1.jpeg")} alt="Concert Image" />
          <p className="text-xl font-medium pl-4">This is a card!</p>
        </div>
      </>
    );
  }
  