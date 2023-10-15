/* eslint-disable @next/next/no-img-element */
import { team } from "@/data/team";
import { useState } from "react";

const MeetTheTeam = () => {
    const [selectedMember, setSelectedMember] = useState(null);

    return (
        <>
            <div className="flex flex-col w-full mx-auto justify-start">
                {/* TEAM MEMBERS */}
                <div className="flex max-w-[1140px] mx-auto pb-[120px] flex-wrap gap-[72px] justify-center lg:justify-start">
                    {team.map((member) => (
                        <div
                            key={member.name}
                            className="flex flex-col cursor-pointer items-center gap-[16px] pb-[60px] group"
                            onClick={() => setSelectedMember(member)}
                        >
                            <img src={`/images/team/${member.image}`} alt={member.name} className="w-[320px] h-[320px]" />
                            <p className="subtitle-medium">{member.name}</p>
                            <p className="subtitle-medium leading-3 text-primary-300">{member.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            {selectedMember && (
                <div className="w-full h-full fixed top-0 left-0 flex items-center justify-center bg-black bg-opacity-[40%] backdrop-blur-[2px] z-40">
                    <div className="bg-white w-[873px] py-[150px] px-[92px] flex items-start justify-center gap-[36px] relative rounded-[32px]">
                        <button className="absolute top-[36px] right-[48px]" onClick={() => setSelectedMember(null)}>
                            <img src="/images/icons/close.svg" alt="close" className="" />
                        </button>
                        <div className="flex flex-col items-center">
                            <img src={`/images/team/${selectedMember.image}`} alt={selectedMember.name} className="min-w-[200px] h-[200px] mb-[12px]" />
                            <p className="h6-bold">{selectedMember.name}</p>
                            <p className="p-body-md text-primary-300 text-center">{selectedMember.title}</p>
                        </div>
                        <p className="p-body-lg">{selectedMember.bio}</p>
                    </div>
                </div>
            )}
        </>

    )
}

export default MeetTheTeam;