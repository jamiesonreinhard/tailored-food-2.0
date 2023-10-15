/* eslint-disable @next/next/no-img-element */
import dynamic from 'next/dynamic';

const WhoWeAre = () => {

    const Map = dynamic(() => import("./map"), {
        loading: () => "Loading...",
        ssr: false
      });
    
    return (
        <div className="flex flex-col w-full mx-auto justify-start">

            {/* OUR MISSION */}
            <div className="flex flex-col w-[90%] max-w-[1140px] mx-auto pb-[60px] md:pb-[120px]">
                <div className="flex flex-col gap-[20px] md:gap-[36px]">
                    <h2 className="h2-bold text-[20px] md:text-[40px]">Our Mission</h2>
                    <p className="p-body-lg">Tailored Food will be a key catalyst in <span className="text-primary-300">ending hunger by 2030</span> by building delicious, nutritious, low-cost food systems around the world.</p>
                </div>
            </div>

            {/* OUR STORY */}
            <div className="w-full pt-[72px] pb-[34px] bg-primary-50">
                <div className="flex flex-col w-[90%] max-w-[1140px] mx-auto">
                    <h2 className="h2-bold text-[20px] md:text-[40px] mb-[20px] md:mb-[36px]">Our Story</h2>
                    <div className="flex flex-col gap-[32px]">
                        <p className="p-body-lg">March 23, 2016: At a hospital hit hard by Ebola on the outskirts of Monrovia, Liberia, I met with the Head Pediatrician, Dr. Jude. Over a long conversation Dr. Jude shared: </p>
                        <div className="w-[90%] relative bg-white rounded-[30px] px-[24px] md:px-[76px] pt-[70px] pb-[40px] md:py-[52px] mx-auto">
                            <h3 className="h3-bold text-[16px] md:text-[32px]">I treat malnourished children at my hospital with what UNICEF provides me, but I know most of these kids will die once I send them home. And there is no advice I can give to their mothers - there simply is no nutritious food available in local markets.</h3>
                            <img src="/images/icons/two-thumbs-up.svg" alt="two thumbs up" className="absolute top-[24px] left-[24px] md:top-0 md:left-0 md:-translate-x-1/2 w-[50px] md:w-[86px]" />
                        </div>
                        <p className="p-body-lg">This was the spark of a multi-year journey dedicated to designing and taking to market nutritious delicious low-cost food in Liberia. As we started diving further into the landscape of food and malnutrition globally, I realized what our team was learning each day in Liberia could have far broader implications. </p>
                        <p className="p-body-lg">Tailored Food was born to partner with incredible local nutrition entrepreneurs in designing and selling food products to families hardest hit by malnutrition, food products that are delicious, culturally-relevant, incredibly nutritious, and locally produced. Tailored is not a food company, but is a lean social enterprise consultancy that partners with local leaders in the markets we work. We have produced and sold to the extreme poor close to a million meals in the last 3 years.</p>
                        <p className="p-body-lg">Interested in learning more? Please contact us.</p>
                    </div>
                    <button className="btn contact-button mx-auto mt-[80px]">Contact Us</button>
                </div>
            </div>

            {/* WHAT / HOW */}
            <div className="flex flex-col w-[90%] max-w-[1140px] mx-auto pt-[60px] pb-[120px]">
                <div className="flex flex-col gap-[20px] md:gap-[36px] mb-[36px]">
                    <h2 className="h2-bold text-[20px] md:text-[40px]">What We Do</h2>
                    <p className="p-body-lg">Design and take to market delicious, nutritious, low-cost food products in partnership with local entrepreneurs in the countries most affected by malnutrition.</p>
                </div>
                <div className="flex flex-col gap-[20px] md:gap-[36px] mb-[70px]">
                    <h2 className="h2-bold text-[20px] md:text-[40px]">How We Do It</h2>
                    {/* Cards */}
                    <div className="w-full flex flex flex-col md:flex-row justify-between gap-[20px] md:gap-[36px]">
                        <div className="p-[24px] border border-greyStroke-[1px] w-full md:w-[310px] rounded-[12px] flex flex-col items-start grow">
                            <img src="/images/icons/how-we-do-1.svg" alt="how we do it" className="mb-[32px]" />
                            <p className="p-body-lg">Find the most ambitious entrepreneurs and provide them with a team of top food industry experts to design, launch, and grow nutritious low-cost food products in their home markets.</p>
                        </div>
                        <div className="p-[24px] border border-greyStroke-[1px] w-full md:w-[310px] rounded-[12px] flex flex-col items-start grow">
                            <img src="/images/icons/how-we-do-2.svg" alt="how we do it" className="mb-[32px]" />
                            <p className="p-body-lg">Build farmer supply chains, fit for purpose manufacturing facilities, and innovative distribution strategies, leveraging emerging trends like ecommerce.</p>
                        </div>
                        <div className="p-[24px] border border-greyStroke-[1px] w-full md:w-[310px] rounded-[12px] flex flex-col items-start grow">
                            <img src="/images/icons/how-we-do-3.svg" alt="how we do it" className="mb-[32px]" />
                            <p className="p-body-lg">Create financially sustainable businesses that balance profit with real world impact.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[20px] md:gap-[36px]">
                    <h2 className="h2-bold text-[20px] md:text-[40px]">Why We Succeed</h2>
                    <p className="p-body-lg">Tailored Food is well-positioned to pioneer an innovative form of international development, leveraging its expertise and networks to ensure nutritious, delicious, culturally relevant, and low-cost food is available to people suffering from malnutrition in their markets every day, without a reliance on continuous charitable funding. Our organization will bring product development and demand creation expertise that will be unleashed at the policy level globally while also being mobilized at the grassroots level in partnership with local for and non-profit food organizations.</p>
                </div>
            </div>
        </div>
    )
}

export default WhoWeAre;