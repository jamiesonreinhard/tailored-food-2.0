/* eslint-disable @next/next/no-img-element */
import { podcasts } from "@/data/podcasts";
import Link from "next/link";

const Podcasts = () => {
    return (
        <div className="flex flex-col w-full max-w-[1140px] mx-auto pb-[120px]">
            {/* PODCASTS */}
            <div className="flex flex-col w-full md:gap-[36px] mb-[100px]">
                {podcasts.map((podcast, index) => (
                    <div
                        key={index}
                        className="w-full flex items-center justify-between md:rounded-[38px] py-[16px] border-b-[1px] border-greyStroke
                        md:border-0 md:px-[50px] md:py-[28px] podcast-shadow"
                    >
                        <div className="flex flex-col items-center gap-[8px]">
                            <img
                                src={`/images/media/${podcast.image}`}
                                alt={podcast.title}
                                className="w-[64px] md:w-[170px] h-[64px] md:h-[170px] object-cover rounded-[16px] md:mr-[48px]"
                            />
                            <Link href={podcast.link} className="md:hidden w-[56px] h-[20px] bg-primary-100 flex items-center gap-[4px] rounded-[12px]">
                                <img src="/images/icons/playArrow.svg" alt="play arrow" />
                                <p className="text-primary-300">33m</p>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-[8px] md:gap-[24px] w-full px-[16px]">
                            <p className="md:hidden text-[10px] font-bold text-grey">{podcast.date}</p>
                            <h4 className="subtitle-medium text-[12px] md:text-[24px]">{podcast.title}</h4>
                            <div className="items-center gap-[48px] hidden md:flex">
                                <div className="flex items-center gap-[8px]">
                                    <img src="/images/icons/calendar.svg" alt="calendar icon" />
                                    <p className="">{podcast.date}</p>
                                </div>
                                <div className="flex items-center gap-[8px]">
                                    <img src="/images/icons/clock.svg" alt="calendar icon" />
                                    <p className="">{podcast.length}</p>
                                </div>
                            </div>
                        </div>
                        <Link href={podcast.link} className="btn btn-outline-primary gap-[8px] w-[260px] hidden md:flex">
                            <span className="whitespace-nowrap">Listen Now</span>
                            <img src="/images/icons/headphones.svg" alt="external link" />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Podcasts;