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
            <h2 className="display-1 text-white mt-4" style={{ fontFamily: 'QuincyCF-BoldItalic' }}>Nutritious, Delicious, Affordable & Local</h2>
            <h3 className="h3-light mt-4 text-white">We aim to end hunger by 2030 through indigenous nutrition entrepreneurship.</h3>
          </div>

          {/* Mobile Header */}
          <div className="lg:hidden w-[80%] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center text-white z-10">
            <h3 className="h6-bold text-white">WE BUILD FOOD SYSTEMS THAT ARE</h3>
            <h2 className="display-2 text-white mt-4" style={{ fontFamily: 'QuincyCF-BoldItalic' }}>Nutritious, Delicious, Affordable & Local</h2>
            <h3 className="p-body-lg mt-4 text-white">We aim to end hunger by 2030 through indigenous nutrition entrepreneurship.</h3>
          </div>

          <button onClick={prevImage} className="hidden sm:block absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white bg-opacity-50">
            <img src="/images/icons/left.svg" alt="" />
          </button>
          <button onClick={nextImage} className="hidden sm:block absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white bg-opacity-50">
            <img src="/images/icons/right.svg" alt="" />
          </button>
        </div>

        <div className="w-full pb-[180px]">
          {/* Our Approach Section */}

          {/* Desktop */}
          <section className="hidden lg:block pt-[70px] pb-[40px] bg-gray-100 w-full max-w-[1000px] mx-auto">
            <h1 className="text-center h1-semibold mb-[60px]">Our Approach</h1>
            <p className="text-center p-body-xl mb-[80px]">
              Tailored Food is a non-profit social enterprise consultancy that partners with food entrepreneurs, farmers, and market vendors to ensure nutritious delicious low-cost food is available to families suffering from malnutrition. We are building a grassroots movement to <span className="text-green">end hunger by 2030.</span>
            </p>
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
                  <p className="p-body-lg max-w-[468px]">Quality time immersed in rural agricultural communities, weaving through crowded urban markets, and sitting with families to fully understand the malnutrition landscape in different countries. Meeting with food system stakeholders at all levels to fully grasp the political economy shaping the food system environment.</p>
                </div>
              </div>

              {/* Holistic Food Systems */}
              <div className="flex w-full gap-[60px] justify-center">
                {/* Text */}
                <div className="flex flex-col gap-[16px]">
                  <h3 className="h3-bold">Holistic Food Systems</h3>
                  <p className="p-body-lg max-w-[468px]">Alongside local experts we design and build climate-sensitive agriculture value chains, food production facilities, and distribution channels to enable the availability of healthy, delicious, local foods.
                  </p>
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
                  <p className="p-body-lg max-w-[468px]">Identify resource gaps and invest in skill development for local entrepreneurs. Ensuring businesses throughout the value chain are financially sustainable and have the infrastructure needed to thrive independently for years to come.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Tablet */}
          <section className="hidden sm:block lg:hidden pt-[70px] pb-[40px] bg-gray-100 w-[90%] mx-auto">
            <h1 className="text-center h1-semibold mb-[60px]">Our Approach</h1>
            <p className="text-center p-body-lg mb-[80px] max-w-[90%] mx-auto">
              Tailored Food is a non-profit social enterprise consultancy that partners with food entrepreneurs, farmers, and market vendors to ensure nutritious delicious low-cost food is available to families suffering from malnutrition. We are building a grassroots movement to <span className="text-green">end hunger by 2030.</span>
            </p>
            <div className="flex flex-col w-full gap-[100px]">
              {/* Anthropological Deep Dives */}
              <div className="flex w-full gap-[60px] justify-center">
                {/* Image */}
                <div className="w-[372px] h-[260px] rounded-[10px] relative">
                  <div
                    className="absolute bg-primary-300 flex items-center justify-center text-white text-[40px]
                  rounded-full w-[80px] h-[80px] top-0 left-0 -translate-x-1/2 -translate-y-1/2"
                  >
                    01
                  </div>
                  <img src='/images/deep-dives.png' alt="anthropological deep dives" className="w-full h-full rounded-[10px]" />
                </div>
                {/* Text */}
                <div className="flex flex-col gap-[16px]">
                  <h3 className="h3-bold">Anthropological Deep Dives</h3>
                  <p className="p-body-lg max-w-[468px]">Quality time immersed in rural agricultural communities, weaving through crowded urban markets, and sitting with families to fully understand the malnutrition landscape in different countries. Meeting with food system stakeholders at all levels to fully grasp the political economy shaping the food system environment.</p>
                </div>
              </div>

              {/* Holistic Food Systems */}
              <div className="flex w-full gap-[60px] justify-center">
                {/* Text */}
                <div className="flex flex-col gap-[16px]">
                  <h3 className="h3-bold">Holistic Food Systems</h3>
                  <p className="p-body-lg max-w-[468px]">Alongside local experts we design and build climate-sensitive agriculture value chains, food production facilities, and distribution channels to enable the availability of healthy, delicious, local foods.
                  </p>
                </div>
                {/* Image */}
                <div className="w-[372px] h-[260px] rounded-[10px] relative">
                  <div
                    className="absolute bg-yellow flex items-center justify-center text-white text-[40px]
                  rounded-full w-[80px] h-[80px] top-0 left-0 -translate-x-1/2 -translate-y-1/2"
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
                  rounded-full w-[80px] h-[80px] top-0 left-0 -translate-x-1/2 -translate-y-1/2"
                  >
                    03
                  </div>
                  <img src='/images/social-enterprises.png' alt="Sustainable Social Enterprises" className="w-full h-full rounded-[10px]" />
                </div>
                {/* Text */}
                <div className="flex flex-col gap-[16px]">
                  <h3 className="h3-bold">Sustainable Social Enterprises</h3>
                  <p className="p-body-lg max-w-[468px]">Identify resource gaps and invest in skill development for local entrepreneurs. Ensuring businesses throughout the value chain are financially sustainable and have the infrastructure needed to thrive independently for years to come.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Mobile */}
          <section className="sm:hidden pt-[70px] pb-[40px] bg-gray-100 w-full max-w-[1000px] mx-auto">
            <h1 className="text-center h4-bold mb-[40px]">Our Approach</h1>
            <p className="text-center p-body-md mb-[80px] max-w-[90%] mx-auto">
              Tailored Food is a non-profit social enterprise consultancy that partners with food entrepreneurs, farmers, and market vendors to ensure nutritious delicious low-cost food is available to families suffering from malnutrition. We are building a grassroots movement to <span className="text-green">end hunger by 2030.</span>
            </p>
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
                  <p className="p-body-md w-full">Alongside local experts we design and build climate-sensitive agriculture value chains, food production facilities, and distribution channels to enable the availability of healthy, delicious, local foods.
                  </p>
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
                  <p className="p-body-md w-full">Identify resource gaps and invest in skill development for local entrepreneurs. Ensuring businesses throughout the value chain are financially sustainable and have the infrastructure needed to thrive independently for years to come.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Our partners section */}
          <section className="pt-[20px] md:pt-[70px] bg-gray-100 w-[90%] md:w-full mx-auto">
            <h1 className="text-center text-[48px] font-semibold mb-[60px]">Our Partners</h1>
            <div className="flex items-center gap-[32px] w-full flex-wrap justify-center">
              {partners.map((partner) => (
                <img key={partner.name} src={`/images/partnerImages/${partner.image}`} alt={partner.name} />
              ))}
            </div>
          </section>
        </div>
      </Layout>
    </>
  )
}

export default Home;
