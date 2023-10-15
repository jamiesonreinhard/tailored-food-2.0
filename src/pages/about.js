import React, { useEffect, useState } from "react";
import Layout from '@/components/layout'
import WhoWeAre from '../components/about/who-we-are';
import MeetTheTeam from '../components/about/meet-the-team';
import Gallery from '../components/about/gallery';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {

  const [activePage, setActivePage] = useState("whoWeAre");

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

        <div className="w-full flex flex-col pt-[76px]">
          {/* About Sub Navigation */}
          <div className="flex gap-[32px] mb-[66px] w-full max-w-[1140px] mx-auto justify-start">
            <button
              onClick={() => setActivePage("whoWeAre")}
              disabled={activePage === "whoWeAre"}
              className={`subtitle-medium p-[10px] border-primary-300 ${activePage === "whoWeAre" ? "border-b-[5px] text-primary-300" : "text-lightGrey"}`}
            >
              Who We Are
            </button>
            <button
              onClick={() => setActivePage("meetTheTeam")}
              disabled={activePage === "meetTheTeam"}
              className={`subtitle-medium p-[10px] border-primary-300 ${activePage === "meetTheTeam" ? "border-b-[5px] text-primary-300" : "text-lightGrey"}`}>
              Meet The Team
            </button>
            <button
              onClick={() => setActivePage("gallery")}
              disabled={activePage === "gallery"}
              className={`subtitle-medium p-[10px] border-primary-300 ${activePage === "gallery" ? "border-b-[5px] text-primary-300" : "text-lightGrey"}`}
            >
              Gallery
            </button>
          </div>

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
