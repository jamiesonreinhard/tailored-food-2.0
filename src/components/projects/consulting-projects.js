/* eslint-disable @next/next/no-img-element */
import ProjectCard from "./project-card";

const ConsultingProjects = ({ projects }) => {
  return (
    <div className="flex flex-col w-full mx-auto">
      {/* Section 1 */}
      <div className="w-full pb-16 sm:pb-24 bg-gradient-to-b from-white to-primary-50">
        <div className="w-[90%] max-w-[1920px] flex flex-col md:flex-row gap-8 mx-auto">
          <div className="w-full xl:w-2/3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-primary-700">Consulting Projects</h2>
            <p className="text-lg text-gray-700 mb-4">
              Tailored Food works with some of the most influential organizations in the world of food to:
            </p>
            <ul className="grid grid-cols-1 gap-4 text-lg text-gray-700 mb-4">
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Conduct food systems mapping research projects
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Build investment cases for nutritious low-cost food interventions
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Design, implement, and scale strategic partnerships with food system stakeholders
              </li>
            </ul>
            <div className="flex flex-col sm:mt-8 sm:mb-0 sm:flex-row items-start gap-4">
              <img
                src="/images/tanya-by-truck.jpg"
                alt="Consulting Projects"
                className="w-full my-4 sm:my-0 sm:w-[240px] xl:hidden xl:w-0 rounded-lg shadow-md"
              />
              <p className="text-lg text-gray-700 mb-12">
                We partner with national governments, UN agencies, leading private sector food companies, the nonprofit sector, and local food system stakeholders to support food system transformation. Tailored Food has a depth of experience working in complex environments and a broad advisory network ranging from food technology experts and Michelin-star chefs to non-profit funders and diplomacy experts.
              </p>
            </div>
          </div>
          <div className="w-0 hidden xl:w-1/3 xl:block">
            <img
              src="/images/tanya-by-truck.jpg"
              alt="Consulting Projects"
              className="w-full mx-auto h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="w-full py-16 sm:py-24 bg-primary-100">
        <div className="w-[90%] max-w-[1920px] mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-primary-500">Our Consulting Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultingProjects;
