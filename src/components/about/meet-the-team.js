/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { fetchTeamMembers } from "@/api/contentful";
import Spinner from "../loading";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

const MeetTheTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [teamMembers, setTeamMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const sortedTeam = teamMembers?.sort((a, b) => a.lastName.localeCompare(b.lastName));

  useEffect(() => {
    async function fetchData() {
      try {
        const posts = await fetchTeamMembers();
        setTeamMembers(posts);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  function renderRichText(content) {
    const options = {
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      },
      renderText: text => text,
    };
  
    return documentToReactComponents(content, options);
  }
  

  return (
    <>
      <div className="flex flex-col w-full mx-auto justify-start">
        {/* TEAM MEMBERS */}
        <div className="flex w-[90%] max-w-[1920px] mx-auto pb-[120px] flex-wrap gap-[16px] md:gap-[72px] justify-center">
          {sortedTeam?.map((member, index) => (
            <div
              key={`${index}-${member.firstName}`}
              className="flex flex-col cursor-pointer items-center gap-[8px] md:gap-[16px] pb-[32px] md:pb-[60px] group"
              onClick={() => setSelectedMember(member)}
            >
              <img
                src={member.image}
                alt={member.firstName}
                className="w-[156px] md:w-[320px] h-[156px] md:h-[320px] object-cover rounded-[24px]"
              />
              <p className="subtitle-medium text-[12px] md:text-[24px]">
                {member.firstName} {member.lastName}
              </p>
              <p className="subtitle-medium text-[12px] md:text-[24px] leading-3 text-primary-300">
                {member.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      {selectedMember && (
        <div className="w-full h-full fixed top-0 left-0 flex items-center justify-center bg-black bg-opacity-[40%] backdrop-blur-[2px] z-40">
          <div className="bg-white w-[98%] md:w-[873px] py-[36px] md:py-[120px] px-[32px] md:px-[92px] flex flex-col md:flex-row items-start md:justify-center gap-[32px] md:gap-[36px] relative rounded-[32px]">
            <button
              className="absolute top-[36px] right-[48px]"
              onClick={() => setSelectedMember(null)}
            >
              <img src="/images/icons/close.svg" alt="close" className="" />
            </button>
            <div className="flex flex-col items-start md:items-center">
              <img
                src={selectedMember?.image}
                alt={selectedMember?.firstName}
                className="min-w-[200px] h-[200px] mb-[12px] rounded-[24px] object-cover"
              />
              <p className="h6-bold">
                {selectedMember?.firstName} {selectedMember?.lastName}
              </p>
              <p className="p-body-md text-primary-300 text-center">
                {selectedMember?.title}
              </p>
            </div>
            <div className="p-body-lg text-[16px] md:text-[20px]">
              {renderRichText(selectedMember?.bio)}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MeetTheTeam;
