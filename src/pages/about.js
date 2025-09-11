import React, { useEffect, useState } from "react";
import Layout from '@/components/layout'
import AboutTf from '../components/about/about';
import MeetTheTeam from '../components/about/meet-the-team';
import SubNavigation from "@/components/sub-navigation";
import { motion, AnimatePresence } from 'framer-motion';
import fs from 'fs';
import path from 'path';
import { trackPageEntry, trackPageExit, trackEvent } from '@/lib/segment';

const About = ({images}) => {

  const [activePage, setActivePage] = useState("about");
  const navItems = [
    {
      "name": "about",
      "display": "About"
    },
    {
      "name": "meetTheTeam",
      "display": "Meet The Team"
    }
  ]

  useEffect(() => {
    trackPageEntry('About', { sub_page: activePage });
    
    return () => {
      trackPageExit('About', { sub_page: activePage });
    };
  }, []);

  useEffect(() => {
    if (activePage) {
      trackEvent('About Sub-Page Viewed', {
        sub_page: activePage,
        page_name: 'About'
      });
    }
  }, [activePage]);

  return (
    <>
      <Layout>
        {/* Header and Image Slider */}
        <div className="relative w-full h-[400px]">
          <motion.img
            src={'/images/taylor-with-child.jpg'}
            alt="Background"
            className="absolute top-0 left-0 w-full h-full object-cover"
            initial={{ opacity: 0 }} // Initial opacity
            animate={{ opacity: 1 }} // Target opacity
            exit={{ opacity: 0 }} // Exit animation (if needed)
            transition={{ duration: 0.5 }} // Transition duration
          />

          <div className="absolute top-0 left-0 w-full h-full" style={{ background: 'rgba(1, 1, 1, 0.30)' }} />
        </div>

        <div className="w-full flex flex-col pt-[32px] md:pt-[76px]">
          {/* About Sub Navigation */}
          <SubNavigation navItems={navItems} activePage={activePage} setActivePage={setActivePage} />

          {/* Who We Are */}
          {activePage === "about" && (
            <AboutTf />
          )}
          {/* Meet the Team */}
          {activePage === "meetTheTeam" && (
            <MeetTheTeam />
          )}
          {/* Gallery GOES BELOW */}
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const imagesDirectory = path.join(process.cwd(), 'public/images/gallery');
  const filenames = fs.readdirSync(imagesDirectory);

  return {
    props: {
      images: filenames
    }
  };
}

export default About;
