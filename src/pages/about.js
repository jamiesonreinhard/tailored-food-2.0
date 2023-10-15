import React, { useEffect, useState } from "react";
import Layout from '@/components/layout'
import WhoWeAre from '../components/about/who-we-are';
import MeetTheTeam from '../components/about/meet-the-team';
import Gallery from '../components/about/gallery';
import SubNavigation from "@/components/sub-navigation";
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {

  const [activePage, setActivePage] = useState("whoWeAre");
  const navItems = [
    {
      "name": "whoWeAre",
      "display": "Who We Are"
    },
    {
      "name": "meetTheTeam",
      "display": "Meet The Team"
    },
    {
      "name": "gallery",
      "display": "Gallery"
    },
  ]

  return (
    <>
      <Layout>
        {/* Header and Image Slider */}
        <div className="relative w-full h-[400px]">
          <motion.img
            src={'/images/about-header.png'}
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
          {activePage === "whoWeAre" && (
            <WhoWeAre />
          )}
          {/* Meet the Team */}
          {activePage === "meetTheTeam" && (
            <MeetTheTeam />
          )}
          {/* Gallery */}
          {activePage === "gallery" && (
            <Gallery />
          )}


        </div>
      </Layout>
    </>
  )
}

export default About;
