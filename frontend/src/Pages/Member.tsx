import NavBar from "../components/NavBar";
// import MemberCard from "../components/MemberCard"; // assuming you have a MemberCard component

interface Member {
    name: string;
    title: string;
    image: string;
    bio: string;
  }
  
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
  
//   export default MemberCard;
  
const members = [
  {
    name: "John Doe",
    title: "CEO",
    image: "/images/john-doe.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Jane Doe",
    title: "CTO",
    image: "/images/jane-doe.jpg",
    bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  // add more members as needed
];

export default function MembersPage() {
  return (
    <>
      <NavBar />
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Meet Our Members</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {members.map((member) => (
            <MemberCard
              key={member.name}
              name={member.name}
              title={member.title}
              image={member.image}
              bio={member.bio}
            />
          ))}
        </div>
      </div>
    </>
  );
}
