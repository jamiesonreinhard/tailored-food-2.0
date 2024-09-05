import { fetchResources } from "@/api/contentful";
import Spinner from "../../loading";
import Link from "next/link";
import { useState, useEffect } from "react";
import { PictureAsPdf } from "@mui/icons-material";

const Media = () => {
    const [resources, setResources] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const posts = await fetchResources();
                console.log("posts", posts);
                setResources(posts);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching blog posts:", error);
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

    if (isLoading) {
        return <Spinner />;
    }
    return (
        <div className="flex flex-col w-full items-start">
            {/* Resources */}
            {resources?.map((resource, index) => (
                <Link
                    key={index}
                    className="flex items-center justify-center rounded-lg py-3 px-6 bg-[#30B5E0] font-bold shadow-sm gap-3 text-white"
                    href={resource.document}
                    target="_blank"
                >
                    <PictureAsPdf />
                    {resource.name}
                </Link>
            ))}
        </div>
    );
};

export default Media;
