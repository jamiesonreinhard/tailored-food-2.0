/* eslint-disable @next/next/no-img-element */
import { fetchPodcasts } from "@/api/contentful";
import Spinner from "../../loading";
import PodcastPost from "./podcastPost";
import { useState, useEffect } from "react";

const Podcasts = () => {
  const [mediaPosts, setPodcasts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const sortedPodcasts = mediaPosts?.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const posts = await fetchPodcasts();
        setPodcasts(posts);
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
    <div className="flex flex-col w-full max-w-[1140px] mx-auto pb-[120px]">
      {/* PODCASTS */}
      <div className="flex flex-col w-full md:gap-[36px] mb-[100px]">
        {sortedPodcasts?.map((podcast, index) => (
          <PodcastPost podcast={podcast} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Podcasts;
