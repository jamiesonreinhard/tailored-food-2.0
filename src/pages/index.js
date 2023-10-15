/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Layout from '@/components/layout'
import { partners } from "@/data/partners";
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {

  const sliderImages = [
    '/images/home-slider-1.jpeg',
    '/images/home-slider-2.jpeg',
    '/images/home-slider-3.jpeg'
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
        <div className="relative w-full h-screen">
          <AnimatePresence initial={false}>
            <motion.img
              key={currentImageIndex} // Use a unique key for each image change
              src={sliderImages[currentImageIndex]}
              alt="Background"
              className="absolute top-0 left-0 w-full h-full object-cover"
              initial={{ opacity: 0 }} // Initial opacity
              animate={{ opacity: 1 }} // Target opacity
              exit={{ opacity: 0 }} // Exit animation (if needed)
              transition={{ duration: 0.5 }} // Transition duration
            />
          </AnimatePresence>

          <div className="absolute top-0 left-0 w-full h-full" style={{ background: 'rgba(1, 1, 1, 0.30)' }} />

          {/* Desktop Header */}
          <div className="hidden lg:block w-3/4 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center text-white z-10">
            <h3 className="h3-bold text-white">WE BUILD FOOD SYSTEMS THAT ARE</h3>
            <h2 className="display-1 text-white mt-4" style={{ fontFamily: 'QuincyCF-BoldItalic' }}>NUTRITIOUS, DELICIOUS, AFFORDABLE & LOCAL</h2>
            <h3 className="h3-light mt-4 text-white">We aim to end hunger by 2030 through indigenous nutrition entrepreneurship.</h3>
          </div>

          {/* Mobile Header */}
          <div className="lg:hidden w-[80%] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center text-white z-10">
            <h3 className="h6-bold text-white">WE BUILD FOOD SYSTEMS THAT ARE</h3>
            <h2 className="display-2 text-white mt-4" style={{ fontFamily: 'QuincyCF-BoldItalic' }}>NUTRITIOUS, DELICIOUS, AFFORDABLE & LOCAL</h2>
            <h3 className="p-body-lg mt-4 text-white">We aim to end hunger by 2030 through indigenous nutrition entrepreneurship.</h3>
          </div>

          <button onClick={prevImage} className="hidden sm:block absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white bg-opacity-50">
            <img src="/images/icons/left.svg" alt="" />
          </button>
          <button onClick={nextImage} className="hidden sm:block absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white bg-opacity-50">
            <img src="/images/icons/right.svg" alt="" />
          </button>
        </div>

        {/* Theory of Change Section */}

        {/* Desktop */}
        <section className="hidden sm:block pt-[70px] pb-[40px] bg-gray-100 w-full max-w-[1000px] mx-auto">
          <h1 className="text-center h1-semibold mb-[60px]">Theory of Change</h1>
          <div className="flex flex-col w-full gap-[100px]">
            {/* Anthropological Deep Dives */}
            <div className="flex w-full gap-[60px] justify-center">
              {/* Image */}
              <div className="w-[372px] h-[260px] rounded-[10px] relative">
                <div
                  className="absolute bg-primary-300 flex items-center justify-center text-white text-[40px]
                  rounded-full w-[108px] h-[108px] top-0 left-0 -translate-x-1/2 -translate-y-1/2"
                >
                  01
                </div>
                <img src='/images/deep-dives.png' alt="anthropological deep dives" className="w-full h-full rounded-[10px]" />
              </div>
              {/* Text */}
              <div className="flex flex-col gap-[16px]">
                <h3 className="h3-bold">Anthropological Deep Dives</h3>
                <p className="p-body-lg max-w-[468px]">Quality time immersed in rural agricultural communities, weaving through crowded urban markets, and sitting with families to fully understand the malnutrition landscape.</p>
              </div>
            </div>

            {/* Holistic Food Systems */}
            <div className="flex w-full gap-[60px] justify-center">
              {/* Text */}
              <div className="flex flex-col gap-[16px]">
                <h3 className="h3-bold">Holistic Food Systems</h3>
                <p className="p-body-lg max-w-[468px]">Designing and building climate-sensitive agriculture value chains, production facilities, and distribution channels for healthy, delicious, local food.</p>
              </div>
              {/* Image */}
              <div className="w-[372px] h-[260px] rounded-[10px] relative">
                <div
                  className="absolute bg-yellow flex items-center justify-center text-white text-[40px]
                  rounded-full w-[108px] h-[108px] top-0 left-0 -translate-x-1/2 -translate-y-1/2"
                >
                  02
                </div>
                <img src='/images/food-systems.png' alt="Holistic Food Systems" className="w-full h-full rounded-[10px]" />
              </div>
            </div>



            {/* Sustainable Social Enterprises */}
            <div className="flex w-full gap-[60px] justify-center">
              {/* Image */}
              <div className="w-[372px] h-[260px] rounded-[10px] relative">
                <div
                  className="absolute bg-green flex items-center justify-center text-white text-[40px]
                  rounded-full w-[108px] h-[108px] top-0 left-0 -translate-x-1/2 -translate-y-1/2"
                >
                  03
                </div>
                <img src='/images/social-enterprises.png' alt="Sustainable Social Enterprises" className="w-full h-full rounded-[10px]" />
              </div>
              {/* Text */}
              <div className="flex flex-col gap-[16px]">
                <h3 className="h3-bold">Sustainable Social Enterprises</h3>
                <p className="p-body-lg max-w-[468px]">Identifying and investing the skills and resources in local entrepreneurs, building businesses throughout the value chain that are financially sustainable for years to come.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile */}
        <section className="sm:hidden pt-[70px] pb-[40px] bg-gray-100 w-full max-w-[1000px] mx-auto">
          <h1 className="text-center h4-bold mb-[60px]">Theory of Change</h1>
          <div className="flex flex-col w-full gap-[100px]">
            {/* Anthropological Deep Dives */}
            <div className="flex flex-col w-[270px] gap-[20px] items-center mx-auto">
              {/* Image */}
              <div className="w-full h-[210px] rounded-[10px] relative">
                <div
                  className="absolute bg-primary-300 flex items-center justify-center text-white text-[40px]
                  rounded-full w-[70px] h-[70px] top-0 left-0 -translate-x-1/2 -translate-y-1/2"
                >
                  01
                </div>
                <img src='/images/deep-dives.png' alt="anthropological deep dives" className="w-full h-full rounded-[10px]" />
              </div>
              {/* Text */}
              <div className="flex flex-col gap-[16px]">
                <h3 className="h5-bold">Anthropological Deep Dives</h3>
                <p className="p-body-md w-full">Quality time immersed in rural agricultural communities, weaving through crowded urban markets, and sitting with families to fully understand the malnutrition landscape.</p>
              </div>
            </div>

            {/* Holistic Food Systems */}
            <div className="flex flex-col w-[270px] gap-[20px] items-center mx-auto">
              {/* Image */}
              <div className="w-full h-[210px] rounded-[10px] relative">
                <div
                  className="absolute bg-yellow flex items-center justify-center text-white text-[40px]
                  rounded-full w-[70px] h-[70px] top-0 left-0 -translate-x-1/2 -translate-y-1/2"
                >
                  02
                </div>
                <img src='/images/food-systems.png' alt="Holistic Food Systems" className="w-full h-full rounded-[10px]" />
              </div>
              {/* Text */}
              <div className="flex flex-col gap-[16px]">
                <h3 className="h5-bold">Holistic Food Systems</h3>
                <p className="p-body-md w-full">Designing and building climate-sensitive agriculture value chains, production facilities, and distribution channels for healthy, delicious, local food.</p>
              </div>
            </div>

            {/* Sustainable Social Enterprises */}
            <div className="flex flex-col w-[270px] gap-[20px] items-center mx-auto">
              {/* Image */}
              <div className="w-full h-[210px] rounded-[10px] relative">
                <div
                  className="absolute bg-green flex items-center justify-center text-white text-[40px]
                  rounded-full w-[70px] h-[70px] top-0 left-0 -translate-x-1/2 -translate-y-1/2"
                >
                  03
                </div>
                <img src='/images/social-enterprises.png' alt="Sustainable Social Enterprises" className="w-full h-full rounded-[10px]" />
              </div>
              {/* Text */}
              <div className="flex flex-col gap-[16px]">
                <h3 className="h5-bold">Sustainable Social Enterprises</h3>
                <p className="p-body-md w-full">Identifying and investing the skills and resources in local entrepreneurs, building businesses throughout the value chain that are financially sustainable for years to come.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our partners section */}
        <section className="py-[70px] bg-gray-100 w-[90%] md:w-full mx-auto">
          <h1 className="text-center text-[48px] font-semibold mb-[60px]">Our Partners</h1>
          <div className="flex items-center gap-[32px] w-full flex-wrap justify-center">
            {partners.map((partner) => (
              <img key={partner.name} src={`/images/partnerImages/${partner.image}`} alt={partner.name} />
            ))}
          </div>
        </section>

        {/* Fat footer */}
        <section className="py-[70px] pb-[100px] w-full max-w-[1000px] mx-auto bg-[#A9B0AF]/[0.2] md:bg-white">
          <div
            className="w-[90%] mx-auto md:w-full gap-[24px] md:gap-[100px] flex flex-col
            md:flex-row md:flex-row-reverse items-center md:items-start justify-center"
          >
            <div className="flex flex-col items-center">
              <img src='/images/tf-logo.svg' alt="Tailored Food logo" className="md:hidden max-w-[174px] mb-[16px]" />
              <img src="/images/taylor-speaking.png" alt="Taylor speaking" className="rounded-full object-cover w-[328px] max-h-[328px]" />
              <h3 className="h3-bold mt-[8px]">Taylor Quinn</h3>
              <p className="subtitle-medium text-primary-300 mt-[24px]">Executive Director</p>
            </div>
            <div className="flex flex-col gap-[24px]">
              <img src='/images/tf-logo.svg' alt="Tailored Food logo" className="hidden md:block max-w-[400px]" />
              <p className="p-body-lg max-w-[690px]">
                Tailored Food is a lean social enterprise consultancy that partners with food entrepreneurs, farmers, and market vendors to ensure nutritious delicious low-cost food is available to families suffering from malnutrition.
                <br />
                <br />
                We are building a grassroots movement to <span className="text-primary-300">end hunger by 2030.</span>
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Home;
