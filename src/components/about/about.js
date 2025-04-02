import Link from "next/link";

const About = () => {

  return (
    <div className="flex flex-col w-full mx-auto justify-start">
      {/* WHAT / HOW */}
      <div className="w-full pb-16 sm:pb-24 bg-gradient-to-b from-white to-primary-50">
        <div className="flex flex-col w-[90%] max-w-[1920px] mx-auto">
          <h2 className="h2-bold text-[20px] md:text-[40px] mb-[20px] md:mb-[36px] text-primary-500">
            Where We Work
          </h2>
          <div className="w-full p-4 rounded-lg bg-[#fff] border border-primary-300 border-4 mt-8 shadow-md">
            <img src="/images/tf-high-res.png" alt="map" className="w-full rounded-lg" />
          </div>
        </div>
      </div>

      {/* OUR STORY */}
      <div className="w-full py-16 sm:py-24 bg-primary-100">
        <div className="flex flex-col w-[90%] max-w-[1920px] mx-auto">
          <h2 className="h2-bold text-[20px] md:text-[40px] mb-[20px] md:mb-[36px] text-primary-700">
            Our Story
          </h2>
          <div className="flex flex-col gap-[32px]">
            <p className="p-body-lg text-[16px] md:text-[20px] text-gray-600">
              In March 2016, at a hospital hit hard by Ebola on the outskirts of Monrovia,
              Liberia, our founder, Taylor Quinn, met with the Head Pediatrician,
              Dr. Jude. Over a long conversation Dr. Jude shared:{" "}
            </p>
            <div className="w-[90%] relative bg-white rounded-[30px] px-[24px] md:px-[76px] pt-[70px] pb-[40px] md:py-[52px] mx-auto shadow-md">
              <h3 className="h3-bold text-[16px] md:text-[32px] text-primary-500">
                I treat malnourished children at my hospital with what UNICEF
                provides me, but I know most of these kids will die once I send
                them home. And there is no advice I can give to their mothers -
                there simply is no nutritious food available in local markets.
              </h3>
              <img
                src="/images/icons/two-thumbs-up.svg"
                alt="two thumbs up"
                className="absolute top-[24px] left-[24px] md:top-0 md:left-0 md:-translate-x-1/2 w-[50px] md:w-[86px]"
              />
            </div>
            <p className="p-body-lg text-[16px] md:text-[20px] text-gray-600">
              This sparked a multi-year journey dedicated to designing and bringing to market nutritious, delicious, low-cost food in Liberia. As we started diving further into the landscape of food and malnutrition globally, we realized what our team was learning each day in Liberia could have far broader implications.
            </p>
            <p className="p-body-lg text-[16px] md:text-[20px] text-gray-600">
              Tailored Food was born to partner with ambitious local nutrition entrepreneurs in designing and selling food products to families hardest hit by malnutrition. The key to this, is access to affordable food products that are delicious, culturally-relevant, nutritious, and locally produced. Tailored is not a food company, but is a lean social enterprise consultancy that partners with local leaders in the markets we work. We have helped produce and sell over 6.8 million meals to the lowest-income families.
            </p>
            <p className="p-body-lg text-[16px] md:text-[20px] text-gray-600">
              Interested in learning more? Please contact us.
            </p>
          </div>
          <Link
            href="/contact"
            className="btn contact-button mx-auto mt-[80px] w-[217px] h-[56px] flex items-center justify-center text-[24px] bg-primary-500 text-white hover:bg-primary-600 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
