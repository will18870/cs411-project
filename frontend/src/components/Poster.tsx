import poster1 from "../Resources/poster1.jpeg";
import poster2 from "../Resources/poster2.png";
import poster3 from "../Resources/poster3.jpeg";

export default function Poster() {
  return (
    <div className="flex flex-col">
      <div className="h-screen/1.5 bg-purple-500 flex justify-end items-center">
        <div className="text-white text-4xl font-bold flex-row-reverse">
          <p className="py-72 pr-72 text-right">
            Welcome to our website!<br />
            Placeholder <br />
            Placeholder<br />
            Placeholder<br />
            Placeholder
          </p>
        </div>
      </div>

      <div className="h-screen/1.5 bg-lime-300 flex justify-end items-center">
        <div className="text-white text-4xl font-bold flex-row-reverse">
          <p className="py-72 pr-72 text-right">
            Welcome to our website!<br />
            Placeholder <br />
            Placeholder<br />
            Placeholder<br />
            Placeholder
          </p>
        </div>
      </div>

      <div className="h-screen/1.5 bg-cyan-400 flex justify-end items-center">
        <div className="text-white text-4xl font-bold flex-row-reverse">
          <p className="py-72 pr-72 text-right">
            Welcome to our website!<br />
            Placeholder <br />
            Placeholder<br />
            Placeholder<br />
            Placeholder
          </p>
        </div>
      </div>
    </div>
  );
}
