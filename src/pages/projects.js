import React, { useEffect, useState } from "react";
import Layout from '@/components/layout';
import { projects } from "@/data/projects";
import EntrepreneurPartners from "@/components/projects/entrepreneur-partners";
import ConsultingProjects from "@/components/projects/consulting-projects";

const Projects = () => {

  const [activePage, setActivePage] = useState("entrepreneur");

  return (
    <>
      <Layout>
        <div className="flex flex-col w-full max-w-[1200px] mx-auto py-[130px]">
          {/* About Sub Navigation */}
          <div className="flex gap-[32px] mb-[30px] w-full justify-start">
            <button
              onClick={() => setActivePage("entrepreneur")}
              disabled={activePage === "entrepreneur"}
              className={`subtitle-medium p-[10px] border-primary-300 ${activePage === "entrepreneur" ? "border-b-[5px] text-primary-300" : "text-lightGrey"}`}
            >
              Entrepreneur Partners
            </button>
            <button
              onClick={() => setActivePage("consulting")}
              disabled={activePage === "consulting"}
              className={`subtitle-medium p-[10px] border-primary-300 ${activePage === "consulting" ? "border-b-[5px] text-primary-300" : "text-lightGrey"}`}>
              Consulting Projects
            </button>
          </div>
          
          {activePage === "entrepreneur" && (
            <EntrepreneurPartners />
          )}
          {activePage === "consulting" && (
            <ConsultingProjects />
          )}
        </div>
      </Layout>
    </>
  )
}

export default Projects;
