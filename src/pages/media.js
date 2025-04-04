import React, { useEffect, useState } from "react";
import Layout from '@/components/layout';
import Media from "@/components/media/media";
import AnnualReports from "@/components/media/annual-reports/annual-reports";
import SubNavigation from "@/components/sub-navigation";

const Content = () => {

  const [activePage, setActivePage] = useState("media");
  const navItems = [
    {
      "name": "media",
      "display": "Media"
    },
    {
      "name": "annual-reports",
      "display": "Annual Reports"
    },
  ]

  return (
    <>
      <Layout>
        <div className="mt-[110px] md:mt-[130px]">
          {/* Content Sub Navigation */}
          <SubNavigation navItems={navItems} activePage={activePage} setActivePage={setActivePage} />
        </div>
        <div className="flex flex-col w-[90%] mx-auto pb-[140px]">
          {activePage === "media" && (
            <Media />
          )}
          {activePage === "annual-reports" && (
            <AnnualReports />
          )}
        </div>



      </Layout>
    </>
  )
}

export default Content;
