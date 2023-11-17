/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { fetchPartners } from "@/api/contentful";
import Spinner from "@/components/loading";

const PartnersSection = () => {
  const [partners, setPartners] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const sortedPartners = partners?.sort((a, b) => {
    return a.name - b.name;
  });

  console.log(sortedPartners);

  useEffect(() => {
    async function fetchData() {
      try {
        const partners = await fetchPartners();
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
    <section className="pt-[20px] md:pt-[70px] bg-gray-100 w-[85%] mx-auto">
      <h1 className="text-center text-[48px] font-semibold mb-[60px]">
        Our Partners
      </h1>
      <div className="flex items-center gap-[60px] w-full flex-wrap justify-center">
        {sortedPartners?.map((partner) => (
          <img
            key={partner.name}
            src={partner.logo}
            alt={partner.name}
            className="max-w-[100px] sm:max-w-none"
          />
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
