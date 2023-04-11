import React from "react";
import Layout from "@/components/layout";
import Image from "next/image";
import Link from "next/link";

const Transportation = () => {
  return (
    <Layout>
      <div className="py-[140px] max-w-[90%] mx-auto">
        <div className="">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl mb-[16px]">
              Transportation
            </h2>
            <p className="font-semibold text-darkGray text-xl mb-[40px]">You have a few options for getting from Benito Juarez International Airport (Mexico City) to Tepoztlan.</p>
            <Link href="https://www.transfeero.com/en">Transfeero</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Transportation;
