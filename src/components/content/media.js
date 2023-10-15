/* eslint-disable @next/next/no-img-element */
import { mediaPosts } from "@/data/mediaPosts";

const Media = () => {
    return (
        <div className="flex flex-col w-full max-w-[1140px] mx-auto">
            {/* MEDIA POSTS */}
            <div className="flex flex-col w-full gap-[20px] md:gap-[36px]">
                <div className="flex w-full flex-wrap justify-center lg:justify-start gap-[36px]">
                    {mediaPosts.map((post, index) => (
                        <div key={index} className="max-w-[540px] media-card-shadow rounded-[26px] flex flex-col items-center p-[12px]">
                            <img src={`/images/media/${post.image}`} alt={post.title} className="mb-[16px]" />
                            <div className="flex flex-col gap-[24px] w-full px-[16px] mb-[32px]">
                                <h4 className="h4-bold text-[16px] md:text-[24px]">{post.title}</h4>
                                <p className="p-body text-[14px] md:text-[20px] text-grey">{post.subtitle}</p>
                            </div>
                            <a href={post.link} className="btn btn-outline-primary gap-[8px] mr-auto">
                                Read More
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