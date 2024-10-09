import { fetchResources } from "@/api/contentful";
import Spinner from "../../loading";
import Link from "next/link";
import { useState, useEffect } from "react";
import { PictureAsPdf } from "@mui/icons-material";

const AnnualReports = () => {
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
                console.error("Error fetching resources:", error);
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[36px]">
                {resources?.map((resource, index) => (
                    <div key={index} className="w-full media-card-shadow rounded-[26px] flex flex-col items-stretch p-[24px]">
                        <img
                            src={resource.image || "/images/home-slider-1.webp"}
                            alt={resource.name}
                            className="mb-[24px] h-[310px] w-full object-cover rounded-[26px]"
                        />
                        <div className="flex flex-col gap-[16px] w-full mb-[24px] flex-grow">
                            <h4 className="h4-bold text-[18px] md:text-[24px]">{resource.name}</h4>
                            {resource.description && (
                                <p className="p-body text-[14px] md:text-[18px] text-grey-800">
                                    {resource.description}
                                </p>
                            )}
                        </div>
                        <Link
                            href={resource.document}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-primary gap-[8px] self-start mt-auto"
                        >
                            <span>Read More</span>
                            <img src="/images/icons/external-link.svg" alt="external link" />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnnualReports;
