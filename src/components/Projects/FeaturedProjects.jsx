import Projects from "../../Projects";
import ProjectCard from "./ProjectCard";

const FeaturedProjects = () => {
  return (
    <div id="projects" className="bg-[#0a0e27] p-6 sm:p-8 md:p-10 lg:px-24">
      <h1 className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-4xl font-bold text-center pt-10 mb-5">
        Featured Projects
      </h1>
      <ul className="flex flex-wrap justify-center gap-5 my-10">
        <li className="bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white px-5 py-2 rounded-full font-medium cursor-pointer">
          All
        </li>
        <li className="bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white px-5 py-2 rounded-full font-medium cursor-pointer">
          React
        </li>
        <li className="bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white px-5 py-2 rounded-full font-medium cursor-pointer">
          Full Stack
        </li>
        <li className="bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white px-5 py-2 rounded-full font-medium cursor-pointer">
          UI/UX
        </li>
      </ul>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {Projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
