import React, { useEffect, useState } from "react";
import Layout from '@/components/layout';
import EntrepreneurPartners from "@/components/projects/entrepreneur-partners";
import { fetchProjects } from "@/api/contentful";
import Spinner from "@/components/loading";

const Partners = () => {
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

    // Filter and sort entrepreneur projects: active ones first, then past ones
    const entrepreneurProjects = projects
        .filter((project) => project.type === "entrepreneur")
        .sort((a, b) => {
            if (a.status === "active" && b.status !== "active") return -1;
            if (a.status !== "active" && b.status === "active") return 1;
            return 0;
        });

    return (
        <>
            <Layout>
                <div className="flex flex-col w-full mx-auto pt-40">
                    <EntrepreneurPartners
                        projects={entrepreneurProjects}
                    />
                </div>
            </Layout>
        </>
    )
}

export default Partners;
