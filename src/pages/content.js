import React, { useEffect, useState } from "react";
import Layout from '@/components/layout';
import Blog from "@/components/content/blog";
import Media from "@/components/content/media";
import Podcasts from "@/components/content/podcasts";
import SubNavigation from "@/components/sub-navigation";

const Content = () => {

  const [activePage, setActivePage] = useState("blog");
  const navItems = [
    {
      "name": "blog",
      "display": "Blog"
    },
    {
      "name": "media",
      "display": "Media"
    },
    {
      "name": "podcasts",
      "display": "Podcasts"
    },
  ]

  return (
    <>
      <Layout>
        <div className="flex flex-col w-[90%] max-w-[1200px] mx-auto pt-[110px] pb-[140px] md:py-[130px]">
          {/* Content Sub Navigation */}
          <SubNavigation navItems={navItems} activePage={activePage} setActivePage={setActivePage} />

          {activePage === "blog" && (
            <Blog />
          )}
          {activePage === "media" && (
            <Media />
          )}
          {activePage === "podcasts" && (
            <Podcasts />
          )}
        </div>



      </Layout>
    </>
  )
}

export default Content;
