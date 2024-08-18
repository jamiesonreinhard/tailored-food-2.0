/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { fetchFundingPartners } from "@/api/contentful";
import Spinner from "@/components/loading";

const FundingSupportSection = () => {
  const [partners, setPartners] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const sortedPartners = partners?.sort((a, b) => {
    return a.name - b.name;
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
    <div className="w-full py-16">
      <section className="w-[90%] mx-auto">
        <div className="flex flex-col gap-4 mb-12 max-w-[1000px] mx-auto">
          <h1 className="text-center h3-bold font-semibold">
            Funding Support
          </h1>
          <p className="text-center text-lg">
            Funding Support for Tailored Food has come from both competitions and grants from value-aligned organizations. Our funding partners include - 
          </p>
        </div>

        <div className="flex items-center gap-[60px] w-full flex-wrap justify-center">
          {sortedPartners?.map((partner) => (
            <img
              key={partner.name}
              src={partner.logo}
              alt={partner.name}
              className="max-w-[120px] sm:max-w-[200px]"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FundingSupportSection;
