/* eslint-disable @next/next/no-img-element */
import ProjectCard from "./project-card";

const EntrepreneurPartners = ({ projects }) => {
  console.log(projects);
  
  return (
    <div className="flex flex-col w-full mx-auto">
      {/* Section 1 */}
      <div className="w-full pb-16 sm:pb-24 bg-gradient-to-b from-white to-primary-50">
        <div className="w-[90%] max-w-[1920px] flex flex-col md:flex-row gap-8 mx-auto">
          <div className="w-full xl:w-3/4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-primary-700">Entrepreneur Partners</h2>
            <p className="text-lg text-gray-700 mb-4">
              We collaborate with <a href="#entrepreneurs" className="text-primary-300">small-scale entrepreneurs</a> to bring locally-produced, affordable, and nutritious food to those suffering from malnutrition. Our focus is on creating delicious and culturally relevant products like porridges, high protein biscuits, and peanut butter.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              {`Our partnerships are built on a foundation of intensive anthropological research. We believe it's crucial to first understand local food system dynamics and the socio-economic factors influencing food choices.`}
            </p>
            <div className="bg-primary-50 p-8 rounded-lg shadow-md mb-12">
              <h3 className="text-2xl font-bold mb-4 text-primary-500">Comprehensive Support</h3>
              <p className="text-lg text-gray-700 mb-4">
                We offer extensive support to both start-ups and growing companies, addressing their specific needs and helping them scale. Our areas of expertise include:              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-700">
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Business strategy and agricultural value chain development
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Food market research and product development
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Fundraising, distribution, and marketing assistance
                </li>
              </ul>
            </div>
            <div className="flex items-start sm:items-center gap-4">
              <img
                src="/images/roberto-pb.webp"
                alt="Entrepreneur Partners"
                className="w-[120px] xl:hidden xl:w-0 rounded-lg shadow-md"
              />
              <p className="text-lg text-gray-700 mb-12">
                {`Our impact is measured not only by the nutritious food produced but also by the economic growth and jobs created. We strive to improve both the health and stability of the communities where we operate.`}
              </p>
            </div>
          </div>
          <div className="w-0 hidden xl:w-1/4 xl:block">
            <img
              src="/images/roberto-pb.webp"
              alt="Entrepreneur Partners"
              className="w-full max-w-[300px] mx-auto h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="w-full py-16 sm:py-24 bg-primary-100">
        <div className="w-[90%] max-w-[1920px] mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-primary-500" id="entrepreneurs">Our Entrepreneur Partners</h3>
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

export default EntrepreneurPartners;
