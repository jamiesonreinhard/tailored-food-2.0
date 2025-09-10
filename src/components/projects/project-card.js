/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

const ProjectCard = ({ project }) => {
  console.log(project);
  function renderRichText(content) {
    const options = {
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => {
          return (
            <p className="p-body-lg text-[14px] md:text-[16px] mb-[12px]">
              {children}
            </p>
          );
        },
      },
      renderText: (text) => text,
    };

    return documentToReactComponents(content, options);
  }

  return (
    <div className="w-full bg-white shadow-lg rounded-[16px] md:rounded-[32px] p-[20px] md:p-[46px]">
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-start mb-[12px]">
          <Link href={project.partnerWebsite || ""} target="_blank">
            <img
              src={project.partnerImage}
              alt={project.name}
              className="h-[60px] md:h-[100px] cursor-pointer"
            />
          </Link>
          <div className="flex items-center gap-[8px]">
            {project.status === "active" && (
              <div className="items-center gap-[8px] whitespace-nowrap flex">
                <img
                  src="/images/icons/active-toggle.svg"
                  alt="active toggle icon"
                  className="w-6"
                />
                <p className="text-green h6-bold">Active</p>
              </div>
            )}
            {project.status === "past" && (
              <div className="flex items-center gap-[8px] whitespace-nowrap flex">
                <img
                  src="/images/icons/past-toggle.svg"
                  alt="past toggle icon"
                  className="w-6"
                />
                <p className="text-yellow h6-bold">Past</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-[8px] mb-[30px]">
          <img src="/images/icons/map-pin-light-gray.svg" alt="map pin" />
          <p className="p-body-lg text-lightGrey font-bold">
            {project.longLocation}
          </p>
        </div>

        <div className="flex-grow">
          {renderRichText(project.paragraphs)}
        </div>

        <Link
          href={project.partnerWebsite || ""}
          target="_blank"
          className="mt-[24px] flex items-center text-lg text-primary-300" 
        >
          Partner Website
          <img
            src="/images/icons/external-link.svg"
            alt="external link"
            className="ml-2 w-[16px] text-primary-300"
          />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
