import { MemberType } from "../Router/Types.types";

const MemberCard: React.FC<MemberType> = ({ name, title, image, bio }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl px-6 w-3/4 mr-32 mb-16 border-1 border-black justify-center">
      <div className="flex flex-row items-start">
        <h2 className="text-4xl font-bold pb-4 py-20 ">{name}</h2>
        <img src={image} alt={name} className="rounded-full h-full ml-4" />
      </div>
    </div>
  );
};

export default MemberCard;
