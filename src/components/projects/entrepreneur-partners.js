/* eslint-disable @next/next/no-img-element */
import ProjectCard from "./project-card";

const EntrepreneurPartners = ({ projects }) => {

  return (
    <div className="w-[90%] max-w-[1920px] flex flex-col mx-auto">
      <div className="w-full mb-[80px]">
        <h2 className="h3-bold mb-6">Entrepreneur Partners</h2>

        <div className="flex flex-col gap-4">
          <p className="p-body-md text-[14px] md:text-[16px]">
            {`In order to bring affordable, nutritious food to people suffering from malnutrition, Tailored Food works with small-scale entrepreneurs to bring locally-produced food products to market. We focus on products that are both delicious and culturally relevant, such as porridges, high protein biscuits, and peanut butter.`}
          </p>
          <p className="p-body-md text-[14px] md:text-[16px]">
            {`Our partnerships begin with intensive anthropological research, as we believe it’s vital to first understand local food system dynamics, as well as the social and economic factors behind what foods are purchased and why.`}
          </p>
        </div>

        <p className="p-body-md text-[14px] md:text-[16px] mb-8">
          {`We offer comprehensive support to start-ups as well as growing companies to address their specific needs and scale their businesses, working on:`}
        </p>

        <ul className="list-disc list-inside p-body-lg text-[16px] md:text-[20px] mb-4 sm:hidden">
          <li className="mb-[12px]">Business strategy development</li>
          <li className="mb-[12px]">Food Market qualitative and quantitative research</li>
          <li className="mb-[12px]">Agricultural value chain development</li>
          <li className="mb-[12px]">Product development and iteration</li>
          <li className="mb-[12px]">Production planning</li>
          <li className="mb-[12px]">Culturally-relevant marketing and distribution</li>
          <li className="mb-[12px]">Financial modeling</li>
          <li className="mb-[12px]">Fundraising</li>
        </ul>

        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 bg-primary-50 rounded-lg border border-[#30B5E0]">
            <p className="p-body-md text-[14px] font-bold">Business strategy development</p>
          </div>
          <div className="p-4 bg-primary-50 rounded-lg border border-[#30B5E0]">
            <p className="p-body-md text-[14px] font-bold">Food Market qualitative and quantitative research</p>
          </div>
          <div className="p-4 bg-primary-50 rounded-lg border border-[#30B5E0]">
            <p className="p-body-md text-[14px] font-bold">Agricultural value chain development</p>
          </div>
          <div className="p-4 bg-primary-50 rounded-lg border border-[#30B5E0]">
            <p className="p-body-md text-[14px] font-bold">Product development and iteration</p>
          </div>
          <div className="p-4 bg-primary-50 rounded-lg border border-[#30B5E0]">
            <p className="p-body-md text-[14px] font-bold">Production planning</p>
          </div>
          <div className="p-4 bg-primary-50 rounded-lg border border-[#30B5E0]">
            <p className="p-body-md text-[14px] font-bold">Culturally-relevant marketing and distribution</p>
          </div>
          <div className="p-4 bg-primary-50 rounded-lg border border-[#30B5E0]">
            <p className="p-body-md text-[14px] font-bold">Financial modeling</p>
          </div>
          <div className="p-4 bg-primary-50 rounded-lg border border-[#30B5E0]">
            <p className="p-body-md text-[14px] font-bold">Fundraising</p>
          </div>
        </div>

        <p className="p-body-md text-[14px] md:text-[16px] mt-8">
          We consider the impact of our partnerships in terms of both the nutritious food produced, but the economic growth and jobs created as well. In this way, we strive to improve the health and stability of the communities where we operate.
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

export default EntrepreneurPartners;
