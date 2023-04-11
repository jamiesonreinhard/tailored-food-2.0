import Layout from "@/components/layout";
import React, { useState } from "react";
import Image from "next/image";

const Schedule = () => {
  const events = [
    {
      title: "Welcome Drinks and Salsa Class",
      date: "January 26th, 2024",
      image: "https://picsum.photos/200",
    },
    {
      title: "Wedding Ceremony",
      date: "January 27th, 2024",
      image: "https://picsum.photos/200",
    },
    {
      title: "Reception",
      date: "January 27th, 2024",
      image: "https://picsum.photos/200",
    },
    {
      title: "Tepoztlan Style Brunch",
      date: "January 28th, 2024",
      image: "https://picsum.photos/200",
    },
  ];

  return (
    <Layout>
      <div className="py-[140px] max-w-[90%] mx-auto">
        <div
          className="z-[10] bg-white/[0.9] p-[24px] lg:p-[40px] flex flex-col items-center
            gap-[20px] text-[#7baac8] text-center z-[200]"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl mb-[16px]">
            Events
          </h2>
          <p className="font-semibold text-darkGray text-xl mb-[40px]">
            {`We'll keep you busy, but not too busy. You'll need some free time to
            enjoy the magic of Tepoztlan!`}
          </p>

          <div className="container mx-auto px-4">
            <ul className="divide-y divide-gray-300">
              {events.map((event) => (
                <li key={event.title} className="py-4 flex items-center">
                  <Image
                    src={event.image}
                    alt={event.title}
                    className="w-16 h-16 rounded-full mr-4"
                    width={200}
                    height={200}
                  />
                  <div className="flex flex-col items-start">
                    <h3 className="text-lg font-bold">{event.title}</h3>
                    <p className="text-gray-500">{event.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Schedule;
