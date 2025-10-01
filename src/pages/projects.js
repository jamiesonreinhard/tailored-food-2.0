import React, { useEffect, useState } from "react";
import Layout from '@/components/layout';
import ConsultingProjects from "@/components/projects/consulting-projects";
import { fetchProjects } from '@/api/contentful';
import Spinner from "@/components/loading";
import { trackPageEntry, trackPageExit } from '@/lib/segment';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    trackPageEntry('Projects');
    
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

    return () => {
      trackPageExit('Projects');
    };
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  // Filter and sort consulting projects: active ones first, then past ones, then alphabetically by name
  const consultingProjects = projects
    .filter((project) => project.type === "consulting")
    .sort((a, b) => {
      const statusRank = (s) => (s === "active" ? 0 : 1);
      const byStatus = statusRank(a.status) - statusRank(b.status);
      if (byStatus !== 0) return byStatus;
      return (a.name || "").localeCompare(b.name || "", undefined, {
        sensitivity: "base",
      });
    });

  return (
    <>
      <Layout>
        <div className="flex flex-col w-full mx-auto pt-40">
          <ConsultingProjects projects={consultingProjects} />
        </div>
      </Layout>
    </>
  );
};

export default Projects;