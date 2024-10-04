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
          <div className="lg:hidden w-[90%] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center text-white z-10">
            <h3 className="text-lg font-bold text-white">WE BUILD FOOD SYSTEMS THAT ARE</h3>
            <h2 className="text-3xl font-bold mt-3" style={{ fontFamily: 'QuincyCF-BoldItalic' }}>Nutritious, Delicious, Affordable & Local</h2>
          </div>

          <button
            onClick={prevImage}
            className="hidden sm:flex absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 rounded-full items-center justify-center"
            aria-label="Previous image"
          >
            <img src="/images/icons/left.svg" alt="" className="w-4 h-4" />
          </button>
          <button
            onClick={nextImage}
            className="hidden sm:flex absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 rounded-full items-center justify-center"
            aria-label="Next image"
          >
            <img src="/images/icons/right.svg" alt="" className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-col w-full pb-[100px] sm:pb-[120px]">
          {/* Our Approach Section */}
          <div className="w-full py-16 sm:py-24 bg-gradient-to-b from-white to-primary-50">
            <section className="w-[90%] max-w-[1200px] mx-auto">
              <h2 className="text-center font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-10 sm:mb-14 text-primary-500 leading-tight">
                Tailored Food&apos;s Mission:
                <br />
                <span className="text-primary-700">Eradicating Hunger and Malnutrition</span>
              </h2>
              <div className="flex flex-col lg:flex-row w-full gap-8 sm:gap-12">
                {/* Partnership */}
                <div className="flex flex-col gap-[16px] sm:gap-[24px] items-start p-6 sm:p-8 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-300 flex-1 border-l-4 sm:border-l-8 border-primary-300 transform hover:scale-[1.02]">
                  <h3 className="w-full text-center items-center gap-3 sm:gap-4 flex flex-col">
                    <HandshakeOutlined className="w-12 h-12 sm:w-16 sm:h-16 text-primary-300" />
                    <span className="text-lg sm:text-xl lg:text-2xl font-bold text-primary-300">
                      Empowering Grassroots Food Entrepreneurs
                    </span>
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-center">
                    Develop, launch, and scale delicious, low-cost, nutritious, locally sourced food products. <Link href="/partners" className="text-primary-300 font-bold hover:underline">Our partnerships.</Link>
                  </p>
                </div>

                {/* Consulting */}
                <div className="flex flex-col gap-[16px] sm:gap-[24px] items-start p-6 sm:p-8 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-300 flex-1 border-r-4 sm:border-r-8 border-primary-300 transform hover:scale-[1.02]">
                  <h3 className="w-full text-center items-center gap-3 sm:gap-4 flex flex-col">
                    <BusinessCenterOutlined className="w-12 h-12 sm:w-16 sm:h-16 text-primary-300" />
                    <span className="text-lg sm:text-xl lg:text-2xl font-bold text-primary-300">
                      {`Revolutionizing Global Food Systems`}
                    </span>
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-center">
                    Furthering their work to ensure healthy food is affordable and available to families struggling with malnutrition. <Link href="/projects" className="text-primary-300 font-bold hover:underline">Our consulting work.</Link>
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* TF Model Section */}
          <div className="w-full py-16 sm:py-24 bg-primary-100">
            <div className="max-w-[1200px] w-[90%] flex flex-col items-center mx-auto">
              <h2 className="text-center font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-10 sm:mb-14 text-primary-700 leading-tight">
                The Tailored Food Model
              </h2>
              <div className="flex flex-col w-full sm:w-full gap-12 sm:gap-20">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 hover:transform hover:scale-[1.02] transition-all duration-300">
                  <div className="relative w-full md:w-2/5">
                    <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-primary-500 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold z-10 shadow-lg">01</div>
                    <img src="/images/we-ask.webp" alt="Step 1" className="w-full h-auto rounded-2xl shadow-md" />
                  </div>
                  <div className="w-full md:w-3/5">
                    <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-primary-500">We Ask</h4>
                    <p className="text-base sm:text-lg lg:text-xl">What foods are available locally and what is affordable?</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-8 sm:gap-12 hover:transform hover:scale-[1.02] transition-all duration-300">
                  <div className="relative w-full md:w-2/5">
                    <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-primary-500 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold z-10 shadow-lg">02</div>
                    <img src="/images/deep-dives.webp" alt="Step 2" className="w-full h-auto rounded-2xl shadow-md" />
                  </div>
                  <div className="w-full md:w-3/5">
                    <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-primary-500">We Dive Deep</h4>
                    <p className="text-base sm:text-lg lg:text-xl">Immersing ourselves in the rural agricultural communities, urban markets, and with local families - we gain an understanding of the full malnutrition landscape in a region.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 hover:transform hover:scale-[1.02] transition-all duration-300">
                  <div className="relative w-full md:w-2/5">
                    <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-primary-500 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold z-10 shadow-lg">03</div>
                    <img src="/images/food-systems.webp" alt="Step 3" className="w-full h-auto rounded-2xl shadow-md" />
                  </div>
                  <div className="w-full md:w-3/5">
                    <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-primary-500">We Design</h4>
                    <p className="text-base sm:text-lg lg:text-xl">Working with local experts, Tailored Food designs and builds HOLISTIC FOOD SYSTEMS. These encompass climate sensitive agriculture value chains, food production facilities, and distribution channels to enable the availability of healthy, delicious local foods.</p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-8 sm:gap-12 hover:transform hover:scale-[1.02] transition-all duration-300">
                  <div className="relative w-full md:w-2/5">
                    <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-primary-500 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold z-10 shadow-lg">04</div>
                    <img src="/images/social-enterprises.webp" alt="Step 4" className="w-full h-auto rounded-2xl shadow-md" />
                  </div>
                  <div className="w-full md:w-3/5">
                    <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-primary-500">We Support</h4>
                    <p className="text-base sm:text-lg lg:text-xl">Local entrepreneur partners throughout the food value chain are supported by Tailored Food. We work to make sure they are financially sustainable and have the infrastructure needed to thrive independently for years to come.</p>
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
