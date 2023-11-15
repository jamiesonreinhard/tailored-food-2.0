/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { fetchBlogPosts } from "@/api/contentful";
import BlogPost from "./blogPost";
import Spinner from "@/components/loading";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const sortedBlogPosts = blogPosts?.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const posts = await fetchBlogPosts();
        setBlogPosts(posts);
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
    <div className="flex flex-col w-full max-w-[1140px] mx-auto">
      {/* BLOG POSTS */}
      <div className="flex flex-col w-full gap-[20px] xl:gap-[36px]">
        <div className="flex w-full flex-wrap justify-center xl:justify-start gap-[36px]">
          {sortedBlogPosts?.map((post, index) => (
            <BlogPost key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
