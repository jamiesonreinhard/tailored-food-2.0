/* eslint-disable @next/next/no-img-element */
import React from "react";
import Layout from "@/components/layout";
import Image from "next/image";

const accommodations = [
  {
    name: "Posada del Tepozteco ($$$)",
    description:
      "This hotel offers a special rate for our wedding, which can be booked by calling the hotel.",
    image: "/images/posadatepozteco.jpeg",
    bookingLink: "https://posadadeltepozteco.com.mx/",
  },  
  {
    name: "Amomoxtli ($$$)",
    description:
      "This hotel offers a special rate for our wedding, which can be booked by calling the hotel.",
    image: "/images/amomoxtli.jpeg",
    bookingLink: "https://amomoxtli.com/",
  },
  {
    name: "Casa Bugambilia ($$$)",
    description:
      "We recommend booking through booking.com",
    image: "/images/casabug.jpeg",
    bookingLink: "https://www.casabugambilia.com/",
  },
  {
    name: "La Buena Vibra Retreat and Spa ($$$)",
    description:
      "We recommend booking through booking.com",
    image: "/images/buenavibra.jpeg",
    bookingLink: "https://casafernanda.com/",
  },
  {
    name: "Casa Boutique Fernanda ($$)",
    description:
      "We recommend booking through booking.com",
    image: "/images/casafernandaFT.jpeg",
    bookingLink: "https://casafernanda.com/",
  }
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
          <p className="font-semibold text-darkGray text-xl mb-[60px] max-w-full lg:max-w-[70%]">
            Tepoztlan offers a wealth of exquisite accommodations, perfect for
            indulging in the ultimate retreat experience. We recommend using&nbsp;
            <a href="https://booking.com" target="_blank" className="underline text-[#d56647]">booking.com</a>!&nbsp;
            If you want to stay with a group, <a href="https://airbnb.com" target="_blank" className="underline text-[#d56647]">AirBnB</a> is also a great option.&nbsp;
            We listed some of our top hotels below, and a comprehensive list of recommendations from our wedding venue can be seen <a target="_blank" className="underline text-[#d56647]" href="https://drive.google.com/file/d/1fALjAkSoT8D4uOxDhwPsRyZw700YmbUf/view?usp=share_link">here</a>.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
            {accommodations.map((accommodation) => (
              <div
                className="bg-white rounded-lg shadow-lg"
                key={accommodation.name}
              >
                <div className="relative overflow-hidden w-full h-[260px] rounded-t-lg">
                  <img
                    src={accommodation.image}
                    alt={accommodation.name}
                    className="object-cover w-full h-full"
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
                    Website
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
