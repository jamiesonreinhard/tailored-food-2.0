/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const WhoWeAre = () => {
    
    return (
        <div className="flex flex-col w-full mx-auto justify-start">

            {/* OUR MISSION */}
            <div className="flex flex-col w-[90%] max-w-[1140px] mx-auto pb-[60px] md:pb-[60px]">
                <div className="flex flex-col gap-[20px] md:gap-[36px]">
                    <h2 className="h2-bold text-[20px] md:text-[40px]">Our Mission</h2>
                    <p className="p-body-lg text-[16px] md:text-[20px]">Tailored Food works to eliminate hunger for people living in poverty by developing, launching and scaling delicious, low-cost, nutritious, locally sourced food products in partnership with grassroots entrepreneurs to ensure healthy food is affordable and available to families struggling with malnutrition.</p>
                </div>
            </div>

            {/* OUR STORY */}
            <div className="w-full pt-[72px] pb-[34px] bg-primary-50">
                <div className="flex flex-col w-[90%] max-w-[1140px] mx-auto">
                    <h2 className="h2-bold text-[20px] md:text-[40px] mb-[20px] md:mb-[36px]">Our Story</h2>
                    <div className="flex flex-col gap-[32px]">
                        <p className="p-body-lg text-[16px] md:text-[20px]">March 23, 2016: At a hospital hit hard by Ebola on the outskirts of Monrovia, Liberia, I met with the Head Pediatrician, Dr. Jude. Over a long conversation Dr. Jude shared: </p>
                        <div className="w-[90%] relative bg-white rounded-[30px] px-[24px] md:px-[76px] pt-[70px] pb-[40px] md:py-[52px] mx-auto">
                            <h3 className="h3-bold text-[16px] md:text-[32px]">I treat malnourished children at my hospital with what UNICEF provides me, but I know most of these kids will die once I send them home. And there is no advice I can give to their mothers - there simply is no nutritious food available in local markets.</h3>
                            <img src="/images/icons/two-thumbs-up.svg" alt="two thumbs up" className="absolute top-[24px] left-[24px] md:top-0 md:left-0 md:-translate-x-1/2 w-[50px] md:w-[86px]" />
                        </div>
                        <p className="p-body-lg text-[16px] md:text-[20px]">This was the spark of a multi-year journey dedicated to designing and taking to market nutritious delicious low-cost food in Liberia. As we started diving further into the landscape of food and malnutrition globally, we realized what our team was learning each day in Liberia could have far broader implications.</p>
                        <p className="p-body-lg text-[16px] md:text-[20px]">Tailored Food was born to partner with ambitious local nutrition entrepreneurs in designing and selling food products to families hardest hit by malnutrition, food products that are delicious, culturally-relevant, incredibly nutritious, and locally produced. Tailored is not a food company, but is a lean social enterprise consultancy that partners with local leaders in the markets we work. We have produced and sold over 5.2 million meals to the lowest-income families over the last five years.</p>
                        <p className="p-body-lg text-[16px] md:text-[20px]">Interested in learning more? Please contact us.</p>
                    </div>
                    <Link
                        href="/contact"
                        className="btn contact-button mx-auto mt-[80px] w-[217px] h-[56px] flex items-center justify-center text-[24px]"
                    >Contact Us</Link>
                </div>
            </div>

            {/* WHAT / HOW */}
            <div className="flex flex-col w-[90%] max-w-[1140px] mx-auto pt-[60px] pb-[120px]">
                <div className="flex flex-col gap-[20px] md:gap-[36px] mb-[36px]">
                    <h2 className="h2-bold text-[20px] md:text-[40px]">What We Do</h2>
                    <div className="flex flex-col gap-[8px] mb-[24px]">
                        <p className='p-body-lg text-[16px] md:text-[20px]'><em className='font-bold'>Develop nutritious, affordable food through:</em></p>
                        <p className="p-body-lg text-[16px] md:text-[20px]"><span className="font-bold">Multi-year entrepreneur partnerships – </span>We complete food systems mapping, investment cases and strategic partnership building for clients such as UNICEF, the World Food Programme, Save the Children and Impossible Foods, resulting in nutritious low-cost food that is available to the lowest-income families.</p>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        <p className='p-body-lg text-[16px] md:text-[20px]'><em className='font-bold'>Systems change through:</em></p>
                        <p className="p-body-lg text-[16px] md:text-[20px]"><span className="font-bold">Strategic consulting projects for larger organizations –</span>In collaboration with small-scale entrepreneurs in the countries most impacted by malnutrition, we launch and scale nutritious low-cost food products. This work is funded by grants Tailored Food receives.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-[20px] md:gap-[36px] mb-[70px]">
                    <h2 className="h2-bold text-[20px] md:text-[40px]">How We Do It</h2>
                    <h4 className="h4-bold text-[16px] md:text-[24px]">Our approach to food systems transformation includes the following:</h4>
                    <div className="flex flex-col gap-[8px]">
                        <p className='p-body-lg text-[16px] md:text-[20px]'><em className='font-bold'>1. Solutions mapping:</em></p>
                        <p className="p-body-lg text-[16px] md:text-[20px]">Conducting qualitative ethnographic field research to learn from stakeholders throughout food systems.</p>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        <p className='p-body-lg text-[16px] md:text-[20px]'><em className='font-bold'>2. Nutritious food product development and launch</em></p>
                        <p className="p-body-lg text-[16px] md:text-[20px]">We find the most ambitious entrepreneurs and provide them with a team of top food industry experts to design, launch and grow nutritious low-cost food products in their home markets. We provide end-to-end capacity support for their businesses and facilitate access to capital in order to scale impact.</p>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        <p className='p-body-lg text-[16px] md:text-[20px]'><em className='font-bold'>3. Long-term food systems transformation:</em></p>
                        <p className="p-body-lg text-[16px] md:text-[20px]">Provide end-to-end capacity support to businesses and access to capital to scale impact.</p>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        <p className='p-body-lg text-[16px] md:text-[20px]'><em className='font-bold'>4. Knowledge sharing and thought leadership:</em></p>
                        <p className="p-body-lg text-[16px] md:text-[20px]">Share learnings and case studies with food system organization decision makers. . Showcasing the Tailored Food model to policy makers and organization partners through events and forums.</p>
                    </div>

                    {/* Cards - Commented out for now may add back */}

                    {/* <div className="w-full flex flex flex-col md:flex-row justify-between gap-[20px] md:gap-[36px]">
                        <div className="p-[24px] border border-greyStroke-[1px] w-full md:w-[310px] rounded-[12px] flex flex-col items-start grow">
                            <img src="/images/icons/how-we-do-1.svg" alt="how we do it" className="mb-[32px]" />
                            <p className="p-body-lg text-[16px] md:text-[20px]">Find the most ambitious entrepreneurs and provide them with a team of top food industry experts to design, launch, and grow nutritious low-cost food products in their home markets.</p>
                        </div>
                        <div className="p-[24px] border border-greyStroke-[1px] w-full md:w-[310px] rounded-[12px] flex flex-col items-start grow">
                            <img src="/images/icons/how-we-do-2.svg" alt="how we do it" className="mb-[32px]" />
                            <p className="p-body-lg text-[16px] md:text-[20px]">Build farmer supply chains, fit for purpose manufacturing facilities, and innovative distribution strategies, leveraging emerging trends like ecommerce.</p>
                        </div>
                        <div className="p-[24px] border border-greyStroke-[1px] w-full md:w-[310px] rounded-[12px] flex flex-col items-start grow">
                            <img src="/images/icons/how-we-do-3.svg" alt="how we do it" className="mb-[32px]" />
                            <p className="p-body-lg text-[16px] md:text-[20px]">Create financially sustainable businesses that balance profit with real world impact.</p>
                        </div>
                    </div> */}
                </div>
                <div className="flex flex-col gap-[20px] md:gap-[36px]">
                    <h2 className="h2-bold text-[20px] md:text-[40px]">Why We Succeed</h2>
                    <p className="p-body-lg text-[16px] md:text-[20px]">Tailored Food is well-positioned to pioneer an innovative form of international development, leveraging its expertise and networks to ensure nutritious, delicious, culturally relevant, and low-cost food is available to people suffering from malnutrition in their markets every day. Our organization will bring product development and demand creation expertise that will be unleashed at the policy level globally while also being mobilized at the grassroots level in partnership with local for and non-profit food organizations.</p>
                </div>
            </div>
        </div>
    )
}

export default WhoWeAre;