import React, { useEffect, useState } from "react";
import Layout from '@/components/layout';
import EntrepreneurPartners from "@/components/projects/entrepreneur-partners";
import { fetchProjects } from "@/api/contentful";
import Spinner from "@/components/loading";
import { useRouter } from "next/router";

const Partners = () => {
    const router = useRouter();
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const entrepreneurProjects = projects.filter((project) => project.type === "entrepreneur");

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
                    <EntrepreneurPartners
                        projects={entrepreneurProjects}
                    />
                </div>
            </Layout>
        </>
    )
}

export default Partners;
