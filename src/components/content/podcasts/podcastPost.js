/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import moment from 'moment';

const PodcastPost = ({ podcast }) => {
  const { title, link, image, length, date } = podcast;
  return (
    <div
      className="w-full flex items-center justify-between md:rounded-[38px] py-[16px] border-b-[1px] border-greyStroke
                        md:border-0 md:px-[50px] md:py-[28px] podcast-shadow"
    >
      <div className="flex flex-col items-center gap-[8px]">
        <img
          src={image}
          alt={title}
          className="w-[64px] md:w-[170px] h-[64px] md:h-[170px] object-cover rounded-[16px] md:mr-[48px]"
        />
        <Link
          href={link}
          className="md:hidden w-[56px] h-[20px] bg-primary-100 flex items-center gap-[4px] rounded-[12px]"
        >
          <img src="/images/icons/playArrow.svg" alt="play arrow" />
          <p className="text-primary-300">{length}</p>
        </Link>
      </div>
      <div className="flex flex-col gap-[8px] md:gap-[24px] w-full px-[16px]">
        <p className="md:hidden text-[10px] font-bold text-grey">
          {moment(date).format('MMMM DD, YYYY')}
        </p>
        <h4 className="subtitle-medium text-[12px] md:text-[24px]">
          {title}
        </h4>
        <div className="items-center gap-[48px] hidden md:flex">
          <div className="flex items-center gap-[8px]">
            <img src="/images/icons/calendar.svg" alt="calendar icon" />
            <p className="">{moment(date)?.format('MMMM DD, YYYY')}</p>
          </div>
          <div className="flex items-center gap-[8px]">
            <img src="/images/icons/clock.svg" alt="calendar icon" />
            <p className="">{length}</p>
          </div>
        </div>
      </div>
      <Link
        href={link}
        target="_blank"
        className="btn btn-outline-primary gap-[8px] w-[260px] hidden md:flex"
      >
        <span className="whitespace-nowrap">Listen Now</span>
        <img src="/images/icons/headphones.svg" alt="external link" />
      </Link>
    </div>
  );
};

export default PodcastPost;
