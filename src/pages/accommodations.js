import React from "react";
import Layout from "@/components/layout";
import Image from "next/image";

const accommodations = [
  {
    name: "Hotel A",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis dui non nisi ullamcorper commodo vel ut mauris.",
    image: "/images/hotel-a.jpg",
    bookingLink: "https://example.com/hotel-a",
  },
  {
    name: "Hotel B",
    description:
      "Nulla sit amet dolor velit. Curabitur sit amet consequat lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    image: "/images/hotel-b.jpg",
    bookingLink: "https://example.com/hotel-b",
  },
  {
    name: "Hotel C",
    description:
      "Sed non ipsum non elit pharetra pulvinar. Nullam maximus volutpat ultrices. Donec euismod, lorem ac finibus dictum, justo neque porttitor purus, vel aliquam lacus nibh ut ante.",
    image: "/images/hotel-c.jpg",
    bookingLink: "https://example.com/hotel-c",
  },
];

const Accommodations = () => {
  return (
    <Layout>
      <div className="py-[140px] max-w-[90%] mx-auto">
        <div
          className="z-[10] bg-white/[0.9] p-[24px] lg:p-[40px] flex flex-col items-center
            gap-[20px] text-[#7baac8] text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl mb-[16px]">
            Accommodations
          </h2>
          <p className="font-semibold text-darkGray text-xl mb-[60px]">
            Tepoztlan offers a wealth of exquisite accommodations, perfect for
            indulging in the ultimate retreat experience.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
            {accommodations.map((accommodation) => (
              <div
                className="bg-white rounded-lg shadow-lg"
                key={accommodation.name}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={accommodation.image}
                    alt={accommodation.name}
                    width={640}
                    height={426}
                  />
                </div>
                <div className="p-6 flex flex-col justify-between h-[300px]">
                  <h3 className="text-lg font-medium text-gray-900">
                    {accommodation.name}
                  </h3>
                  <p className="mt-2 text-gray-500">
                    {accommodation.description}
                  </p>
                  <a
                    href={accommodation.bookingLink}
                    target="_blank"
                    className="mx-auto mt-4 cursor-pointer text-[32px] bg-black rounded-[8px] px-[16px] py-[8px] text-[#d56647]"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Accommodations;
