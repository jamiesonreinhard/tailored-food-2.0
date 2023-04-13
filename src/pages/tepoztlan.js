import Layout from "@/components/layout";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const TepoztlanTips = () => {
  const tips = [
    {
      title: "Cerro del Tepozteco",
      content: "This is a hike that starts in town and tkaes from 45 minutes to an hour, depending on your condition and hiking speed. It is a little bit intense (lots of stairs), so we recommend doing it early so you can rest before the party.",
      image: "/images/pyramid.png"
    },
    {
      title: "Food",
      content: "Tepoztlán offers a wide variety of culinary options, we recommend trying; Colorines, Chile Gallo, Ciruelo, MesadeOrigen, PanNuestro, AmanecerdelSol",
      image: "/images/food.png"
    },
    {
      title: "Drink",
      content: "While in Tepoztlan, you should really try one of the famous Micheladas. Say 'una michelada con limon y sal, tamarindo y miguelito por favor!'",
      image: "/images/miches.jpeg"
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
            Tepoztlan Tips
          </h2>
          <p className="font-semibold text-xl mb-[40px] text-[#7baac8]">
            You can read a bit more about our unique wedding destination&nbsp;
            <a
              href="https://en.wikipedia.org/wiki/Tepoztl%C3%A1n#:~:text=Tepoztl%C3%A1n%20is%20derived%20from%20Nahuatl,%2Fplace%20of%20abundance%22)."
              className="underline text-[#d56647]"
              target="_blank"
            >here</a>.
          </p>

          <div className="container mx-auto px-4">
            <ul className="divide-y divide-gray-300">
              {tips.map((event) => (
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
                    <p className="text-gray-500">{event.content}</p>
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

export default TepoztlanTips;
