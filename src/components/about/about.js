/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect } from "react";
import Spinner from "../loading";
import { fetchProjects } from "@/api/contentful";
import Map from "./map";

const About = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const projects = await fetchProjects();
        setProjects(projects);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-col w-full mx-auto justify-start">
      {/* OUR STORY */}
      <div className="w-full pb-16">
        <div className="flex flex-col w-[90%] max-w-[1920px] mx-auto">
          <h2 className="h2-bold text-[20px] md:text-[40px] mb-[20px] md:mb-[36px]">
            Our Story
          </h2>
          <div className="flex flex-col gap-[32px]">
            <p className="p-body-lg text-[16px] md:text-[20px]">
              In March 2016, at a hospital hit hard by Ebola on the outskirts of Monrovia,
              Liberia, our founder, Taylor Quinn, met with the Head Pediatrician,
              Dr. Jude. Over a long conversation Dr. Jude shared:{" "}
            </p>
            <div className="w-[90%] relative bg-white rounded-[30px] px-[24px] md:px-[76px] pt-[70px] pb-[40px] md:py-[52px] mx-auto">
              <h3 className="h3-bold text-[16px] md:text-[32px]">
                I treat malnourished children at my hospital with what UNICEF
                provides me, but I know most of these kids will die once I send
                them home. And there is no advice I can give to their mothers -
                there simply is no nutritious food available in local markets.
              </h3>
              <img
                src="/images/icons/two-thumbs-up.svg"
                alt="two thumbs up"
                className="absolute top-[24px] left-[24px] md:top-0 md:left-0 md:-translate-x-1/2 w-[50px] md:w-[86px]"
              />
            </div>
            <p className="p-body-lg text-[16px] md:text-[20px]">
              This sparked a multi-year journey dedicated to designing and bringing to market nutritious, delicious, low-cost food in Liberia. As we started diving further into the landscape of food and malnutrition globally, we realized what our team was learning each day in Liberia could have far broader implications.
            </p>
            <p className="p-body-lg text-[16px] md:text-[20px]">
              Tailored Food was born to partner with ambitious local nutrition entrepreneurs in designing and selling food products to families hardest hit by malnutrition. The key to this, is access to affordable food products that are delicious, culturally-relevant, nutritious, and locally produced. Tailored is not a food company, but is a lean social enterprise consultancy that partners with local leaders in the markets we work. We have helped produce and sell over 6.8 million meals to the lowest-income families.
            </p>
            <p className="p-body-lg text-[16px] md:text-[20px]">
              Interested in learning more? Please contact us.
            </p>
          </div>
          <Link
            href="/contact"
            className="btn contact-button mx-auto mt-[80px] w-[217px] h-[56px] flex items-center justify-center text-[24px]"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* WHAT / HOW */}
      <div className="w-full pt-16 pb-48 bg-primary-50">
        <div className="flex flex-col w-[90%] max-w-[1920px] mx-auto">
          <h2 className="h2-bold text-[20px] md:text-[40px] mb-[20px] md:mb-[36px]">
            Where We Work
          </h2>
          <p className="p-body-lg text-[16px] md:text-[20px]">Our work spans the globe, including countries in Africa, the Caribbean, and South America.</p>
          <img src="/images/tfmap-1.png" alt="map" className="w-full mt-8" />
        </div>
      </div>
    </div>
  );
};

export default About;
