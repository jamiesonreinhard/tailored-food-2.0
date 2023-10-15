/* eslint-disable @next/next/no-img-element */
import { entrepreneurProjects } from "@/data/projects";
import { useState } from "react";

const EntrepreneurPartners = () => {
    const [selectedProject, setSelectedProject] = useState(entrepreneurProjects[0]);

    return (
        <div className="w-full flex flex-col">
            <p className="p-body-xl mb-[80px]">
                Collaborations with small and medium-scale entrepreneurs in the countries most impacted by malnutrition, where we design, launch, and scale nutritious, delicious low-cost food products.
            </p>
            <div className="w-full flex gap-[96px] justify-center items-start">
                <div className="flex flex-col gap-[32px]">
                    {entrepreneurProjects.map((project, index) => (
                        <button key={index} className={`flex flex-col`} onClick={() => setSelectedProject(project)}>
                            <p className={`subtitle-medium whitespace-nowrap ${project.id === selectedProject.id ? "text-primary-300" : ""}`}>{project.name}</p>
                            <p className={`p-body-lg ${project.id === selectedProject.id ? "text-primary-300" : "text-lightGrey"}`}>{project.location}</p>
                        </button>
                    ))}
                </div>
                <div className="py-[46px] px-[62px] project-card-shadow rounded-[32px]">
                    <div className="flex flex-col w-full max-w-[800px]">
                        <div className="flex w-full justify-between items-start mb-[12px]">
                            <img src={`/images/partnerImages/${selectedProject.partnerImage}`} alt={selectedProject.name} className="h-[120px]" />
                            <div className="flex items-center gap-[8px]">
                                {selectedProject.status === "active" && (
                                    <div className="flex items-center gap-[8px]">
                                        <img src="/images/icons/active-toggle.svg" alt="active toggle icon" />
                                        <p className="text-green">Active</p>
                                    </div>

                                )}
                                {selectedProject.status === "past" && (
                                    <div className="flex items-center gap-[8px]">
                                        <img src="/images/icons/past-toggle.svg" alt="past toggle icon" />
                                        <p className="text-yellow">Past</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <h3 className="h3-bold mb-[30px]">{selectedProject.name}</h3>
                        <div className="flex items-center gap-[8px] mb-[30px]">
                            <img src="/images/icons/map-pin-light-gray.svg" alt="map pin" />
                            <p className="p-body-lg text-lightGrey">{selectedProject.location}</p>
                        </div>
                        <p className="p-body-lg">{selectedProject.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EntrepreneurPartners;