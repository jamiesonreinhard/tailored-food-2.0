/* eslint-disable @next/next/no-img-element */
import { consultingProjects } from "@/data/projects";
import { useState } from "react";
import Link from "next/link";

const ConsultingProjects = () => {
    const [selectedProject, setSelectedProject] = useState(consultingProjects[0]);

    return (
        <div className="w-[90%] flex flex-col mx-auto">
            <p className="p-body-xl text-[14px] md:text-[24px] mb-[24px] md:mb-[80px]">
                Tailored Food works alongside some of the world’s most influential organizations in the world of food  to conduct food systems mapping research projects, to build investment cases and strategic partnerships across food system stakeholders, and to research, develop, and launch nutritious food products. Tailored Food also focuses on building consistent demand for nutritious low-cost food, researching and designing community-run home grown school feeding programs, creating guerrilla marketing campaigns for healthy food, and working with local entrepreneurs to sell local food products into the humanitarian aid sector.
            </p>
            <div className="w-full flex flex-col md:flex-row gap-[32px] md:gap-[96px] justify-start items-start">
                <div className="flex w-full md:w-auto md:flex-col gap-[32px] overflow-x-auto md:overflow-visible pb-[16px] md:pb-0">
                    {consultingProjects.map((project, index) => (
                        <button key={index} className={`flex flex-col ${project.id === selectedProject.id ? "border-b-[4px] border-primary-300 md:border-0" : ""}`} onClick={() => setSelectedProject(project)}>
                            <p className={`subtitle-medium text-[16px] md:text-[24px] whitespace-nowrap ${project.id === selectedProject.id ? "text-primary-300" : ""}`}>{project.name}</p>
                            <p className={`p-body-lg text-[12px] md:text-[20px] whitespace-nowrap ${project.id === selectedProject.id ? "text-primary-300" : "text-lightGrey"}`}>{project.location}</p>
                        </button>
                    ))}
                </div>
                <div className="w-full max-w-[800px] py-[28px] md:py-[46px] px-[20px] md:px-[62px] project-card-shadow rounded-[16px] md:rounded-[32px]">
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
                        {selectedProject.link && (
                            <Link href={selectedProject.link || ""} target="_blank" className="ml-auto gap-[8px] mt-[24px] btn btn-outline-primary">
                                Partner Website
                                <img src="/images/icons/external-link.svg" alt="external link" />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConsultingProjects;