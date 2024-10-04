/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Layout from '@/components/layout'
import { motion, AnimatePresence } from 'framer-motion';
import FundingSupportSection from "@/components/home/fundingSupportSection";
import FlowChart from "@/components/home/flowChart";
import Link from "next/link";
import { HandshakeOutlined, BusinessCenterOutlined } from "@mui/icons-material";

const Home = () => {

  const sliderImages = [
    '/images/home-slider-1.webp',
    '/images/home-slider-2.webp',
    '/images/home-slider-3.webp',
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + sliderImages.length) % sliderImages.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 10000);

    return () => clearInterval(interval); // Clear the interval on unmount
  }, []);

  return (
    <>
      <Layout>
        {/* Header and Image Slider */}
        <div className="relative w-full h-screen bg-black">
          <AnimatePresence initial={false} mode="wait">
            <motion.img
              key={currentImageIndex}
              src={sliderImages[currentImageIndex]}
              alt="Background"
              className="absolute top-0 left-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
          </AnimatePresence>

          <div className="absolute top-0 left-0 w-full h-full" style={{ background: 'rgba(1, 1, 1, 0.30)' }} />

          {/* Desktop Header */}
          <div className="hidden lg:block w-3/4 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center text-white z-10">
            <h3 className="h2-bold text-white">WE BUILD FOOD SYSTEMS THAT ARE</h3>
            <h2 className="display-1 text-white mt-6" style={{ fontFamily: 'QuincyCF-BoldItalic' }}>Nutritious, Delicious, Affordable & Local</h2>
          </div>

          {/* Mobile Header */}
          <div className="lg:hidden w-[80%] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center text-white z-10">
            <h3 className="h5-bold text-white">WE BUILD FOOD SYSTEMS THAT ARE</h3>
            <h2 className="display-2 text-white mt-4" style={{ fontFamily: 'QuincyCF-BoldItalic' }}>Nutritious, Delicious, Affordable & Local</h2>
          </div>

          <button
            onClick={prevImage}
            className="hidden sm:flex absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 rounded-full items-center justify-center"
            aria-label="Previous image"
          >
            <img src="/images/icons/left.svg" alt="" className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="hidden sm:flex absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 rounded-full items-center justify-center"
            aria-label="Next image"
          >
            <img src="/images/icons/right.svg" alt="" className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col w-full pb-[180px]">
          {/* Our Approach Section */}
          <div className="w-full py-16">
            <section className="w-[90%] max-w-[1200px] mx-auto">
              <h3 className="text-center font-bold text-xl sm:text-2xl lg:text-3xl mb-8 sm:mb-[80px]">
                Tailored Food works to eliminate hunger and malnutrition for people living in poverty. We do this by:
              </h3>
              <div className="flex flex-col lg:flex-row w-full gap-8">
                {/* Partnership */}
                <div className="flex flex-col gap-[16px] items-start p-4 rounded-lg bg-primary-50 flex-1">
                  <h3 className="lg:w-2/3 text-center mx-auto items-center gap-2 flex flex-col">
                    <HandshakeOutlined className="w-10 h-10" />
                    <span className="text-lg sm:text-xl font-bold">
                      Partnering with Grassroots Food Entrepreneurs
                    </span>
                  </h3>
                  <p className="p-body-md sm:p-body-lg lg:p-body-lg">
                    Develop, launch, and scale delicious, low-cost, nutritious, locally sourced food products. <Link href="/partners" className="text-[#30B5E0] font-bold">Our partnerships.</Link>
                  </p>
                </div>

                {/* Consulting */}
                <div className="flex flex-col gap-[16px] items-start p-4 rounded-lg bg-primary-50 flex-1">
                  <h3 className="lg:w-2/3 text-center mx-auto items-center gap-2 flex flex-col">
                    <BusinessCenterOutlined className="w-10 h-10" />
                    <span className="text-lg sm:text-xl font-bold">
                      {`Consulting with the World's Largest Food-Focused Organizations`}
                    </span>
                  </h3>
                  <p className="p-body-md sm:p-body-lg lg:p-body-lg">
                    Furthering their work to ensure healthy food is affordable and available to families struggling with malnutrition. <Link href="/projects" className="text-[#30B5E0] font-bold">Our consulting work.</Link>
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* TF Model Section */}
          <div className="w-full py-16 bg-primary-50">
            <div className="max-w-[1000px] w-[90%] flex flex-col items-center mx-auto">
              <h3 className="h3-bold text-center mb-16">Tailored Food Model</h3>
              <div className="flex flex-col w-2/3 sm:w-full gap-16">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="relative w-full md:w-1/2">
                    <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 h-20 bg-primary-300 rounded-full flex items-center justify-center text-white text-3xl font-bold z-10">01</div>
                    <img src="/images/deep-dives.webp" alt="Step 1" className="w-full h-auto rounded-lg w-[300px] md:w-[400px]" />
                  </div>
                  <div className="w-full md:w-1/2">
                    <h4 className="h4-bold mb-4">We Ask</h4>
                    <p className="p-body-lg">Description of Step 1. Brief explanation of what this step entails and how it contributes to the process.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                  <div className="relative w-full md:w-1/2">
                    <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 h-20 bg-primary-300 rounded-full flex items-center justify-center text-white text-3xl font-bold z-10">02</div>
                    <img src="/images/deep-dives.webp" alt="Step 2" className="w-full h-auto rounded-lg w-[300px] md:w-[400px]" />
                  </div>
                  <div className="w-full md:w-1/2">
                    <h4 className="h4-bold mb-4">We Dive Deep</h4>
                    <p className="p-body-lg">Description of Step 2. Explanation on how this step works and its importance in the overall flow.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="relative w-full md:w-1/2">
                    <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 h-20 bg-primary-300 rounded-full flex items-center justify-center text-white text-3xl font-bold z-10">03</div>
                    <img src="/images/deep-dives.webp" alt="Step 3" className="w-full h-auto rounded-lg w-[300px] md:w-[400px]" />
                  </div>
                  <div className="w-full md:w-1/2">
                    <h4 className="h4-bold mb-4">We Design</h4>
                    <p className="p-body-lg">Description of Step 3. Explain the critical elements and actions involved in this step.</p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                  <div className="relative w-full md:w-1/2">
                    <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 h-20 bg-primary-300 rounded-full flex items-center justify-center text-white text-3xl font-bold z-10">04</div>
                    <img src="/images/deep-dives.webp" alt="Step 4" className="w-full h-auto rounded-lg w-[300px] md:w-[400px]" />
                  </div>
                  <div className="w-full md:w-1/2">
                    <h4 className="h4-bold mb-4">We Support</h4>
                    <p className="p-body-lg">Description of Step 4. Final step in the process, elaborating the completion of the model.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our partners section */}
          <FundingSupportSection />
        </div>
      </Layout>
    </>
  )
}

export default Home;
