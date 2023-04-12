import React from "react";
import Layout from "@/components/layout";
import Image from "next/image";
import Link from "next/link";

const Transportation = () => {
  const transportationOptions = [
    {
      title: "Transfeero",
      description:
        "A shuttle service that allows you to book transportation directly from the CDMX airport to your hotel in Tepoztlan.",
      image: "/images/transfeero.png",
      link: "https://www.transfeero.com/en",
    }
  ];

  return (
    <Layout>
      <div className="py-[140px] max-w-[90%] mx-auto">
        <div
          className="z-[10] bg-white/[0.9] p-[24px] lg:p-[40px] flex flex-col items-center
            gap-[20px] text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl mb-[16px]">
            Transportation
          </h2>
          <p className="font-semibold text-darkGray text-xl mb-[60px] text-[#7baac8]">
            You have a few options for getting from Benito Juarez International
            Airport (Mexico City) to Tepoztlan. Please let us know if you have any questions or concerns about
            transportation and we will definitely help you out!
          </p>
          <div className="flex flex-col space-y-12">
            {transportationOptions.map((option) => (
              <a
                key={option.title}
                href={option.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4"
              >
                <div className="w-12 h-12">
                  <Image
                    src={option.image}
                    alt={option.title}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="font-bold text-lg">{option.title}</h3>
                  <p className="text-gray-600">{option.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Transportation;
