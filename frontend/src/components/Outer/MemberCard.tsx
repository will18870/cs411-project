import { Member } from "../../types/Members.types";

  const MemberCard: React.FC<Member> = ({ name, title, image, bio }) => {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <img
            src={image}
            alt={name}
            className="rounded-full h-12 w-12 mr-4"
          />
          <div>
            <h2 className="text-lg font-bold">{name}</h2>
            <p className="text-gray-600">{title}</p>
          </div>
        </div>
        <p className="text-gray-700 mb-4">{bio}</p>
        <a
          href="#"
          className="text-blue-600 font-bold hover:text-blue-800 transition-colors duration-300"
        >
          View Profile
        </a>
      </div>
    );
  };
  
  export default MemberCard;