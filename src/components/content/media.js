/* eslint-disable @next/next/no-img-element */
import { mediaPosts } from "@/data/mediaPosts";

const Media = () => {
    return (
        <div className="flex flex-col w-full max-w-[1140px] mx-auto pb-[120px]">
            {/* MEDIA POSTS */}
            <div className="flex flex-col w-full gap-[36px] mb-[100px]">
                <div className="flex w-full flex-wrap justify-center lg:justify-start gap-[36px]">
                    {mediaPosts.map((post, index) => (
                        <div key={index} className="max-w-[540px] media-card-shadow rounded-[26px] flex flex-col items-center p-[12px]">
                            <img src={`/images/media/${post.image}`} alt={post.title} className="mb-[16px]" />
                            <div className="flex flex-col gap-[24px] w-full px-[16px] mb-[32px]">
                                <h4 className="h4-bold">{post.title}</h4>
                                <p className="p-body xl">{post.subtitle}</p>
                            </div>
                            <a href={post.link} className="btn btn-outline-primary gap-[8px] mr-auto">
                                View More
                                <img src="/images/icons/external-link.svg" alt="external link" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Media;