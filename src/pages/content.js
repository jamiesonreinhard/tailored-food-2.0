import React, { useEffect, useState } from "react";
import Layout from '@/components/layout';
import Blog from "@/components/content/blog";
import Media from "@/components/content/media";
import Podcasts from "@/components/content/podcasts";

const Content = () => {

  const [activePage, setActivePage] = useState("blog");

  return (
    <>
      <Layout>
        <div className="flex flex-col w-full max-w-[1200px] mx-auto pt-[130px]">
          {/* About Sub Navigation */}
          <div className="flex gap-[32px] mb-[30px] w-full justify-start">
            <button
              onClick={() => setActivePage("blog")}
              disabled={activePage === "blog"}
              className={`subtitle-medium p-[10px] border-primary-300 ${activePage === "blog" ? "border-b-[5px] text-primary-300" : "text-lightGrey"}`}
            >
              Blog
            </button>
            <button
              onClick={() => setActivePage("media")}
              disabled={activePage === "media"}
              className={`subtitle-medium p-[10px] border-primary-300 ${activePage === "media" ? "border-b-[5px] text-primary-300" : "text-lightGrey"}`}
            >
              Media
            </button>
            <button
              onClick={() => setActivePage("podcasts")}
              disabled={activePage === "podcasts"}
              className={`subtitle-medium p-[10px] border-primary-300 ${activePage === "podcasts" ? "border-b-[5px] text-primary-300" : "text-lightGrey"}`}
            >
              Podcasts
            </button>
          </div>
        </div>

        {activePage === "blog" && (
          <Blog />
        )}
        {activePage === "media" && (
          <Media />
        )}
        {activePage === "podcasts" && (
          <Podcasts />
        )}

      </Layout>
    </>
  )
}

export default Content;
