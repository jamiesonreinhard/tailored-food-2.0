import React, { useEffect, useState } from "react";
import Layout from '@/components/layout';
import { projects } from "@/data/projects";
import EntrepreneurPartners from "@/components/projects/entrepreneur-partners";
import ConsultingProjects from "@/components/projects/consulting-projects";
import SubNavigation from "@/components/sub-navigation";

const Projects = () => {

  const [activePage, setActivePage] = useState("entrepreneur");
  const navItems = [
    {
      "name": "entrepreneur",
      "display": "Entrepreneur Partners"
    },
    {
      "name": "consulting",
      "display": "Consulting Projects"
    }
  ]

  return (
    <>
      <Layout>
        <div className="mt-[110px] md:mt-[130px]">
          <SubNavigation navItems={navItems} activePage={activePage} setActivePage={setActivePage} />
        </div>
        <div className="flex flex-col w-full mx-auto pb-[180px]">
          {/* About Sub Navigation */}
          
          
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
