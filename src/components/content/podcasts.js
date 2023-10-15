/* eslint-disable @next/next/no-img-element */
import { podcasts } from "@/data/podcasts";
import Link from "next/link";

const Podcasts = () => {
    return (
        <div className="flex flex-col w-full max-w-[1140px] mx-auto pb-[120px]">
        {/* PODCASTS */}
            <div className="flex flex-col w-full gap-[36px] mb-[100px]">
                {podcasts.map((podcast, index) => (
                    <div
                        key={index}
                        className="w-full media-card-shadow rounded-[38px]
                        flex items-center px-[50px] py-[28px] justify-between"
                    >
                        <img
                            src={`/images/media/${podcast.image}`}
                            alt={podcast.title}
                            className="w-[170px] h-[170px] object-cover rounded-[16px] mr-[48px]"
                        />
                        <div className="flex flex-col gap-[24px] w-full px-[16px]">
                            <h4 className="subtitle-medium">{podcast.title}</h4>
                            <div className="flex items-center gap-[48px]">
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
                        <Link href={podcast.link} className="btn btn-outline-primary gap-[8px] w-[260px]">
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