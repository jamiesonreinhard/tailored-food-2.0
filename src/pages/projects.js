import React, { useEffect, useState } from "react";
import Layout from '@/components/layout';
import ConsultingProjects from "@/components/projects/consulting-projects";
import { fetchProjects } from '@/api/contentful';
import Spinner from "@/components/loading";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  // Filter and sort consulting projects: active ones first, then past ones
  const consultingProjects = projects
    .filter((project) => project.type === "consulting")
    .sort((a, b) => {
      if (a.status === "active" && b.status !== "active") return -1;
      if (a.status !== "active" && b.status === "active") return 1;
      return 0;
    });

  return (
    <>
      <Layout>
        <div className="flex flex-col w-full mx-auto pt-40 pb-60">
          <ConsultingProjects projects={consultingProjects} />
        </div>
      </Layout>
    </>
  );
};

export default Projects;