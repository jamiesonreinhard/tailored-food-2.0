/* eslint-disable @next/next/no-img-element */

import { trackEvent } from '@/lib/segment';

const MediaPost = ({ post }) => {
  const { title, subtitle, link, image, contentType, date } = post;
  console.log(post);

  const getButtonText = (contentType) => {
    switch (contentType) {
      case "media":
        return "Read More";
      case "podcast":
        return "Listen Now";
      default:
        return "Read More";
    }
  }

  const formatDate = (dateString) => {
    if (!dateString) return null;
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  }

  const handleClick = () => {
    trackEvent('Media Link Clicked', {
      title,
      contentType,
      link
    });
  };

  return (
    <div className="w-full media-card-shadow rounded-[26px] flex flex-col items-stretch p-[24px]">
      <img
        src={image}
        alt={title}
        className="mb-[24px] h-[310px] w-full object-cover rounded-[26px]"
      />
      <div className="flex flex-col gap-[16px] w-full mb-[24px] flex-grow">
        {date && (
          <p className="text-[14px] md:text-[16px] text-grey-600">{formatDate(date)}</p>
        )}
        <h4 className="h4-bold text-[18px] md:text-[24px]">{title}</h4>
        <p className="p-body text-[14px] md:text-[18px] text-grey-800">
          {subtitle}
        </p>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline-primary gap-[8px] self-start mt-auto"
        onClick={handleClick}
      >
        {getButtonText(contentType)}
        <img src="/images/icons/external-link.svg" alt="external link" />
      </a>
    </div>
  );
};

export default MediaPost;
