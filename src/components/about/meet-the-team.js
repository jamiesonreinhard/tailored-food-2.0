/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { fetchTeamMembers } from "@/api/contentful";
import Spinner from "../loading";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

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

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSelectedMember(null);
      }
    };

    if (selectedMember) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedMember]);

  if (isLoading) {
    return <Spinner />;
  }

  function renderRichText(content) {
    const options = {
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-4 last:mb-0">{children}</p>,
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
              className="flex flex-col cursor-pointer items-center gap-[8px] md:gap-[16px] pb-[32px] md:pb-[60px] group hover:transform hover:scale-105 transition-transform duration-200"
              onClick={() => setSelectedMember(member)}
            >
              <img
                src={member.image}
                alt={member.firstName}
                className="w-[156px] md:w-[320px] h-[156px] md:h-[320px] object-cover rounded-[24px] group-hover:shadow-lg transition-shadow duration-200"
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
        <div 
          className="w-full h-full fixed top-0 left-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedMember(null);
            }
          }}
        >
          <div className="bg-white w-full max-w-4xl max-h-[90vh] flex flex-col relative rounded-2xl shadow-2xl overflow-hidden">
            {/* Fixed Header */}
            <div className="flex-shrink-0 bg-white border-b border-gray-100 px-6 md:px-8 py-6 md:py-8">
              <button
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 z-10"
                onClick={() => setSelectedMember(null)}
                aria-label="Close modal"
              >
                <img src="/images/icons/close.svg" alt="close" className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 pr-12">
                <img
                  src={selectedMember?.image}
                  alt={selectedMember?.firstName}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-2xl object-cover shadow-md flex-shrink-0"
                />
                <div className="flex flex-col">
                  <h2 className="h6-bold text-xl md:text-2xl mb-1">
                    {selectedMember?.firstName} {selectedMember?.lastName}
                  </h2>
                  <p className="p-body-md text-primary-300 text-base md:text-lg">
                    {selectedMember?.title}
                  </p>
                </div>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-6 md:px-8 py-6 md:py-8">
              <div className="p-body-lg text-base md:text-lg leading-relaxed text-gray-700">
                {renderRichText(selectedMember?.bio)}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MeetTheTeam;
