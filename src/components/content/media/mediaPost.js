/* eslint-disable @next/next/no-img-element */

const MediaPost = ({ post }) => {
  const { title, subtitle, link, image } = post;
  return (
    <div
      className="max-w-[400px] xl:max-w-[540px] media-card-shadow rounded-[26px] flex flex-col items-center p-[12px]"
    >
      <img
        src={image}
        alt={title}
        className="mb-[16px] h-[310px] w-full object-cover rounded-[26px]"
      />
      <div className="flex flex-col gap-[24px] w-full px-[16px] mb-[32px]">
        <h4 className="h4-bold text-[16px] md:text-[24px]">{title}</h4>
        <p className="p-body text-[14px] md:text-[20px] text-grey">
          {subtitle}
        </p>
      </div>
      <a
        href={link}
        target="_blank"
        className="btn btn-outline-primary gap-[8px] mr-auto mt-auto"
      >
        Read More
        <img src="/images/icons/external-link.svg" alt="external link" />
      </a>
    </div>
  );
};

export default MediaPost;
