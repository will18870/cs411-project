import NavBar from "../components/NavBar";
import MemberCard from "../components/MemberCard"; 
import Footer from "../components/Footer";
import { members } from "../datas/member.data";


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
      <Footer />
    </>
  );
}
