import React, { useEffect, useState } from "react";
import Layout from '@/components/layout';
import EntrepreneurPartners from "@/components/projects/entrepreneur-partners";
import ConsultingProjects from "@/components/projects/consulting-projects";
import SubNavigation from "@/components/sub-navigation";
import { fetchProjects } from "@/api/contentful";
import Spinner from "@/components/loading";
import { useRouter } from "next/router";

const Projects = () => {
  const router = useRouter();
  const { query } = router;
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

  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const entrepreneurProjects = projects.filter((project) => project.type === "entrepreneur");
  const consultingProjects = projects.filter((project) => project.type === "consulting");

  useEffect(() => {
    if(query && projects){
      const foundProject = projects.find((project) => project.name === query.project);
      if(foundProject){
        setSelectedProject(foundProject);
        setActivePage(foundProject.type);
        router.replace(router.pathname, undefined, { shallow: true });
      }
    }
  }, [query, projects])

  useEffect(() => {
    async function fetchData() {
      try {
        const projects = await fetchProjects();
        setProjects(projects);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Layout>
        <div className="mt-[110px] md:mt-[130px]">
          <SubNavigation navItems={navItems} activePage={activePage} setActivePage={setActivePage} />
        </div>
        <div className="flex flex-col w-full mx-auto pb-[180px]">
          {/* Projects Sub Navigation */}
          {activePage === "entrepreneur" && (
            <EntrepreneurPartners projects={entrepreneurProjects} selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
          )}
          {activePage === "consulting" && (
            <ConsultingProjects projects={consultingProjects} selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
          )}
        </div>
      </Layout>
    </>
  )
}

export default Projects;
