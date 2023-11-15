/* eslint-disable @next/next/no-img-element */
import { blogPosts } from "@/data/blogPosts";
import { fetchBlogPosts } from "@/pages/api/contentful";
import moment from "moment";

const Blog = ({ fetchedPosts }) => {
  const sortedBlogPosts = blogPosts.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });

  console.log(fetchedPosts);

  return (
    <div className="flex flex-col w-full max-w-[1140px] mx-auto">
      {/* BLOG POSTS */}
      <div className="flex flex-col w-full gap-[20px] xl:gap-[36px]">
        <div className="flex w-full flex-wrap justify-center xl:justify-start gap-[36px]">
          {sortedBlogPosts?.map((post, index) => (
            <div
              key={index}
              className="max-w-[400px] xl:max-w-[540px] media-card-shadow rounded-[26px] flex flex-col items-center p-[12px]"
            >
              <img
                src={`/images/blog/${post.image}`}
                alt={post.title}
                className="mb-[16px] rounded-[26px] h-[310px] object-cover w-full"
              />
              <div className="flex flex-col gap-[4px] md:gap-[24px] w-full px-[16px] mb-[18px] md:mb-[32px]">
                <h4 className="h4-bold text-[16px] md:text-[24px]">
                  {post.title}
                </h4>
                <p className="p-body text-[14px] md:text-[20px] text-grey">
                  {post.subtitle}
                </p>
              </div>
              <div className="flex items-center w-full justify-between mt-auto mb-[12px]">
                <div className="flex items-center gap-[12px] px-[16px]">
                  <img
                    src={`/images/team/${post.authorImage}`}
                    alt={post.author}
                    className="w-[32px] md:w-[60px] h-[32px] md:h-[60px] rounded-full"
                  />
                  <div className="flex flex-col">
                    <h6 className="h6-bold text-[10px] md:text-[16px]">
                      {post.author}
                    </h6>
                    <p className="p-body-md text-[10px] md:text-[16px]">
                      {moment(post.date).format("MMMM DD, YYYY")}
                    </p>
                  </div>
                </div>
                <a
                  href={post.link}
                  target="_blank"
                  className="btn btn-outline-primary gap-[8px]"
                >
                  Read More
                  <img
                    src="/images/icons/external-link.svg"
                    alt="external link"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const blogPosts = await fetchBlogPosts();
  return {
    props: {
      blogPosts,
    },
  };
}

export default Blog;
