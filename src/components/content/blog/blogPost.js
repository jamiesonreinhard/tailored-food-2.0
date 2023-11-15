/* eslint-disable @next/next/no-img-element */
import moment from "moment";

const BlogPost = ({ post }) => {
  const { title, subtitle, date, link, image, author } = post;
  return (
    <div className="max-w-[400px] xl:max-w-[540px] media-card-shadow rounded-[26px] flex flex-col items-center p-[12px]">
      <img
        src={image}
        alt={title}
        className="mb-[16px] rounded-[26px] h-[310px] object-cover w-full"
      />
      <div className="flex flex-col gap-[4px] md:gap-[24px] w-full px-[16px] mb-[18px] md:mb-[32px]">
        <h4 className="h4-bold text-[16px] md:text-[24px]">{title}</h4>
        <p className="p-body text-[14px] md:text-[20px] text-grey">
          {subtitle}
        </p>
      </div>
      <div className="flex flex-col gap-[24px] lg:gap-[12px] lg:flex-row items-start lg:items-center w-full justify-between mt-auto mb-[12px]">
        {author && (
          <div className="flex items-center gap-[12px] px-[16px]">
            <img
              src={author?.image?.fields?.file?.url}
              alt={author?.name}
              className="w-[32px] md:w-[60px] h-[32px] md:h-[60px] rounded-full"
            />
            <div className="flex flex-col">
              <h6 className="h6-bold text-[10px] md:text-[16px]">
                {author?.name}
              </h6>
              <p className="p-body-md text-[10px] md:text-[16px]">
                {moment(date)?.format("MMMM DD, YYYY")}
              </p>
            </div>
          </div>
        )}

        <a
          href={link}
          target="_blank"
          className="btn btn-outline-primary gap-[8px] whitespace-nowrap"
        >
          Read More
          <img src="/images/icons/external-link.svg" alt="external link" />
        </a>
      </div>
    </div>
  );
};

export default BlogPost;
