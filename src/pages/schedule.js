import Layout from "@/components/layout";
import React, { useState } from "react";
import Image from "next/image";

const Schedule = () => {
  const events = [
    {
      title: "Welcome Drinks",
      date: "Friday, January 26th, 2024 - 7:00pm to 10:00pm",
      image: "/images/salsa.jpeg",
    },
    {
      title: "Wedding Ceremony",
      date: "Saturday, January 27th, 2024 - 3:00pm",
      image: "/images/ceremony.png",
    },
    {
      title: "Reception",
      date: "Saturday, January 27th, 2024 - 3:30pm to 2:00am",
      image: "/images/dance.png",
    },
    {
      title: "Tepoztlan Style Brunch",
      date: "Sunday, January 28th, 2024 - 10:00am to 1:00pm",
      image: "/images/brunch.jpeg",
    }
  ];

  return (
    <Layout>
      <div className="py-[140px] max-w-[90%] mx-auto">
        <div
          className="z-[10] bg-white/[0.9] p-[24px] lg:p-[40px] flex flex-col items-center
            gap-[20px] text-center z-[200]"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl mb-[16px]">
            Schedule
          </h2>
          <p className="font-semibold text-xl mb-[40px] text-[#7baac8]">
            {`We'll keep you busy, but not too busy. You'll need some free time to
            enjoy the magic of Tepoztlan!`}
          </p>

          <div className="container mx-auto px-4">
            <ul className="divide-y divide-gray-300">
              <li className="py-4 flex items-center">
                <Image
                  src={"/images/arrival.jpeg"}
                  alt={"arrival"}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                  width={200}
                  height={200}
                />
                <div className="flex flex-col items-start text-left">
                  <h3 className="text-lg font-bold">{"Recommended Arrival"}</h3>
                  <p className="text-gray-500">{"Thursday, January 25th or Friday, January 26th"}</p>
                </div>
              </li>
              {events.map((event) => (
                <li key={event.title} className="py-4 flex items-center">
                  <Image
                    src={event.image}
                    alt={event.title}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                    width={200}
                    height={200}
                  />
                  <div className="flex flex-col items-start text-left">
                    <h3 className="text-lg font-bold">{event.title}</h3>
                    <p className="text-gray-500">{event.date}</p>
                  </div>
                </li>
              ))}
              <li className="py-4 flex items-center">
                <Image
                  src={"/images/departure.jpeg"}
                  alt={"departure"}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                  width={200}
                  height={200}
                />
                <div className="flex flex-col items-start text-left">
                  <h3 className="text-lg font-bold">{"Recommended Departure"}</h3>
                  <p className="text-gray-500">{"Sunday Afternoon, January 28th or Monday, January 29th"}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Schedule;
