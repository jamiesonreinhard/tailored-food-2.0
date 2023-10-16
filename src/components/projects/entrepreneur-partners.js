/* eslint-disable @next/next/no-img-element */
import { entrepreneurProjects } from "@/data/projects";
import { useState } from "react";

const EntrepreneurPartners = () => {
    const [selectedProject, setSelectedProject] = useState(entrepreneurProjects[0]);

    return (
        <div className="w-[90%] flex flex-col mx-auto">
            <p className="p-body-xl text-[14px] md:text-[24px] mb-[24px] md:mb-[80px]">
                Collaborations with small and medium-scale entrepreneurs in the countries most impacted by malnutrition, where we design, launch, and scale nutritious, delicious low-cost food products.
            </p>
            <div className="w-full flex flex-col md:flex-row gap-[32px] md:gap-[96px] justify-center items-start">
                <div className="flex w-full md:w-auto md:flex-col gap-[32px] overflow-x-auto md:overflow-visible pb-[16px] md:pb-0">
                    {entrepreneurProjects.map((project, index) => (
                        <button key={index} className={`flex flex-col`} onClick={() => setSelectedProject(project)}>
                            <p className={`subtitle-medium text-[16px] md:text-[24px] whitespace-nowrap ${project.id === selectedProject.id ? "text-primary-300" : ""}`}>{project.name}</p>
                            <p className={`p-body-lg text-[12px] md:text-[20px] ${project.id === selectedProject.id ? "text-primary-300 border-b-[4px] border-primary-300 md:border-0" : "text-lightGrey"}`}>{project.location}</p>
                        </button>
                    ))}
                </div>
                <div className="w-full py-[28px] md:py-[46px] px-[20px] md:px-[62px] project-card-shadow rounded-[16px] md:rounded-[32px]">
                    <div className="flex flex-col w-full max-w-[800px]">
                        <div className="flex w-full justify-between items-start mb-[12px]">
                            <img src={`/images/partnerImages/${selectedProject.partnerImage}`} alt={selectedProject.name} className="h-[60px] md:h-[120px]" />
                            <div className="flex items-center gap-[8px]">
                                {selectedProject.status === "active" && (
                                    <div className="items-center gap-[8px] hidden lg:flex">
                                        <img src="/images/icons/active-toggle.svg" alt="active toggle icon" />
                                        <p className="text-green">Active</p>
                                    </div>

                                )}
                                {selectedProject.status === "past" && (
                                    <div className="flex items-center gap-[8px] hidden lg:flex">
                                        <img src="/images/icons/past-toggle.svg" alt="past toggle icon" />
                                        <p className="text-yellow">Past</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <h3 className="h3-bold mb-[30px]">{selectedProject.name}</h3>
                        <div className="flex items-center gap-[8px] mb-[30px]">
                            <img src="/images/icons/map-pin-light-gray.svg" alt="map pin" />
                            <p className="p-body-lg text-lightGrey">{selectedProject.longLocation}</p>
                            {selectedProject.status === "active" && (
                                <div className="items-center gap-[8px] flex lg:hidden ml-[16px]">
                                    <img src="/images/icons/active-toggle.svg" alt="active toggle icon" />
                                    <p className="text-green text-[12px]">Active</p>
                                </div>
                            )}
                            {selectedProject.status === "past" && (
                                    <div className="flex items-center gap-[8px] flex lg:hidden ml-[16px]">
                                        <img src="/images/icons/past-toggle.svg" alt="past toggle icon" />
                                        <p className="text-yellow text-[12px]">Past</p>
                                    </div>
                                )}
                        </div>
                        {selectedProject.paragraphs.map((paragraph, index) => (
                             <p key={index} className="p-body-lg text-[14px] md:text-[20px] mb-[12px]">{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EntrepreneurPartners;