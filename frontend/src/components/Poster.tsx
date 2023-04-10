import poster1 from "../Resources/poster1.jpeg";
import poster2 from "../Resources/poster2.png";
import poster3 from "../Resources/poster3.jpeg";

export default function Poster() {
  return (
    <div className="h-screen bg-slate-500 flex flex-col">
      <div className="w h-2/5">
        <img src={poster1} alt="Poster 1" className="w-full h-full object-cover" />
      </div>
      <div className="w h-2/5">
        <img src={poster2} alt="Poster 2" className="w-full h-full object-cover" />
      </div>
      <div className="w h-2/5">
        <img src={poster3} alt="Poster 3" className="w-full h-full object-cover" />
      </div>

    </div>
  );
}
