import React, { useEffect, useState } from "react";
import Layout from '@/components/layout';
import ConsultingProjects from "@/components/projects/consulting-projects";
import { fetchProjects } from "@/api/contentful";
import Spinner from "@/components/loading";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const consultingProjects = projects.filter((project) => project.type === "consulting");

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
        <div className="flex flex-col w-full mx-auto pt-40 pb-60">
          <ConsultingProjects projects={consultingProjects} />
        </div>
      </Layout>
    </>
  )
}

export default Projects;
