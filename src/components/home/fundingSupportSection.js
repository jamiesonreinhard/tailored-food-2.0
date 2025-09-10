/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { fetchFundingPartners } from "@/api/contentful";
import Spinner from "@/components/loading";

const FundingSupportSection = () => {
  const [partners, setPartners] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const sortedPartners = partners?.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const partners = await fetchFundingPartners();
        setPartners(partners);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching partners:", error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="w-full py-16 sm:py-24 bg-white">
      <section className="w-[90%] max-w-[1200px] mx-auto">
        <h2 className="text-center font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-10 sm:mb-14 text-primary-500 leading-tight">
          Funding Support
        </h2>
        <p className="text-center text-base sm:text-lg lg:text-xl mb-12 max-w-[1000px] mx-auto">
          Funding Support for Tailored Food has come from both competitions and grants from value-aligned organizations. Our funding partners both past and present include:
        </p>

        <div className="flex items-center gap-8 sm:gap-12 w-full flex-wrap justify-center">
          {sortedPartners?.map((partner) => (
            <img
              key={partner.name}
              src={partner.logo}
              alt={partner.name}
              className="max-w-[100px] sm:max-w-[150px] lg:max-w-[200px] h-auto transition-all duration-300 hover:transform hover:scale-110"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FundingSupportSection;
