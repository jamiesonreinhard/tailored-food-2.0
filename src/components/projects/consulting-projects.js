/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import ProjectCard from "./project-card";

const ConsultingProjects = ({ projects }) => {
  function renderRichText(content) {
    const options = {
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => {
          return (
            <p className="p-body-lg text-[14px] md:text-[20px] mb-[12px]">
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
    <div className="w-[90%] max-w-[1920px] flex flex-col mx-auto">
      <div className="w-full mb-[80px]">
        <h2 className="h3-bold mb-6">Consulting Projects</h2>
        <p className="p-body-md text-[14px] md:text-[16px] mb-4">
          Tailored Food works with some of the most influential organizations in the world of food to:
        </p>

        <ul className="list-disc list-inside p-body-md text-[14px] md:text-[16px] mb-4">
          <li className="mb-[12px]">Conduct food systems mapping research projects</li>
          <li className="mb-[12px]">Build investment cases for nutritious low-cost food interventions</li>
          <li className="mb-[12px]">Design, implement, and scale strategic partnerships with food system stakeholders</li>
        </ul>

        <p className="p-body-md text-[14px] md:text-[16px] mb-4">
          Our consulting work involves a range of initiatives with different outcomes, including improving the nutrition and local sourcing for school feeding programs.
        </p>

        <p className="p-body-md text-[14px] md:text-[16px] mb-4">
          We partner with national governments, UN agencies, leading private sector food companies, the nonprofit sector, and local food system stakeholders to support food system transformation. Tailored Food has a depth of experience working in complex environments and a broad advisory network ranging from food technology experts and Michelin-star chefs to non-profit funders and diplomacy experts.
        </p>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ConsultingProjects;
