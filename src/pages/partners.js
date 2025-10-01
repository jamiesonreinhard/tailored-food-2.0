import React, { useEffect, useState } from "react";
import Layout from '@/components/layout';
import EntrepreneurPartners from "@/components/projects/entrepreneur-partners";
import { fetchProjects } from "@/api/contentful";
import Spinner from "@/components/loading";
import { trackPageEntry, trackPageExit } from '@/lib/segment';

const Partners = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        trackPageEntry('Partners');
        
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
            trackPageExit('Partners');
        };
    }, []);

    if (isLoading) {
        return <Spinner />;
    }

    // Filter and sort entrepreneur projects: active ones first, then past ones, then alphabetically by name
    const entrepreneurProjects = projects
        .filter((project) => project.type === "entrepreneur")
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
                    <EntrepreneurPartners
                        projects={entrepreneurProjects}
                    />
                </div>
            </Layout>
        </>
    )
}

export default Partners;
