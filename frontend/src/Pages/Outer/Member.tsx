import NavBar from "../../components/NavBar";
import MemberCard from "../../components/MemberCard";
import Footer from "../../components/Footer";
import { members } from "../../datas/member.data";


export default function MembersPage() {
    return (
        <>
            <NavBar />
            <div className="bg-white">
                <div className="mx-48 mt-24">
                    <h1 className="text-4xl font-semibold mb-16 text-black">Meet Our Members</h1>
                    <div className="flex flex-wrap flex-row ">
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
            </div>

            <Footer />
        </>
    );
}
