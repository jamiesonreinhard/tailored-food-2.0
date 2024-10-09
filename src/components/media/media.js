/* eslint-disable @next/next/no-img-element */
import { fetchMediaPosts } from "@/api/contentful";
import Spinner from "../loading";
import MediaPost from "./mediaPost";
import { useState, useEffect } from "react";

const Media = () => {
  const [mediaPosts, setMediaPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const sortedMediaPosts = mediaPosts?.sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const posts = await fetchMediaPosts();
        setMediaPosts(posts);
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
    <div className="w-full">
      {/* MEDIA POSTS */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[36px]">
          {sortedMediaPosts?.map((post, index) => (
            <MediaPost post={post} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;
