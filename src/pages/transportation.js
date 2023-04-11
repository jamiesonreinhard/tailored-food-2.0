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
      image: "https://via.placeholder.com/50",
      link: "https://www.transfeero.com/en",
    },
    {
      title: "Lyft",
      description: "Another popular ridesharing service similar to Uber",
      image: "https://via.placeholder.com/50",
      link: "https://www.lyft.com",
    },
    {
      title: "Taxi",
      description:
        "A traditional way to get around that can be hailed on the street or booked in advance",
      image: "https://via.placeholder.com/50",
      link: "https://www.yellowtaxi.com",
    },
  ];

  return (
    <Layout>
      <div className="py-[140px] max-w-[90%] mx-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl mb-[16px]">
            Transportation
          </h2>
          <p className="font-semibold text-darkGray text-xl mb-[60px]">
            You have a few options for getting from Benito Juarez International
            Airport (Mexico City) to Tepoztlan.
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
                <div>
                  <h3 className="font-bold">{option.title}</h3>
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
