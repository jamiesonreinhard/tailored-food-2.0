/* eslint-disable @next/next/no-img-element */
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
    return (
        <div className="flex flex-col w-full max-w-[1140px] mx-auto pb-[120px]">
            {/* BLOG POSTS */}
            <div className="flex flex-col w-full gap-[36px] mb-[100px]">
                <div className="flex w-full flex-wrap justify-center lg:justify-start gap-[36px]">
                    {blogPosts.map((post, index) => (
                        <div key={index} className="max-w-[540px] media-card-shadow rounded-[26px] flex flex-col items-center p-[12px]">
                            <img src={`/images/blog/${post.image}`} alt={post.title} className="mb-[16px]" />
                            <div className="flex flex-col gap-[24px] w-full px-[16px] mb-[32px]">
                                <h4 className="h4-bold">{post.title}</h4>
                                <p className="p-body xl">{post.subtitle}</p>
                            </div>
                            <div className="flex items-center w-full justify-between">
                                <div className="flex items-center gap-[12px] px-[16px]">
                                    <img
                                        src={`/images/team/${post.authorImage}`}
                                        alt={post.author}
                                        className="w-[60px] h-[60px] rounded-full"
                                    />
                                    <div className="flex flex-col">
                                        <h6 className="h6-bold">{post.author}</h6>
                                        <p className="p-body-md">{post.date}</p>
                                    </div>
                                </div>
                                <a href={post.link} className="btn btn-outline-primary gap-[8px]">
                                    View More
                                    <img src="/images/icons/external-link.svg" alt="external link" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog;