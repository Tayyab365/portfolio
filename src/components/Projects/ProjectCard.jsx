import { ArrowUpRight, Github } from "lucide-react";
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-900 text-white border border-[#1e2939] hover:border-[#903ddd] hover:shadow-[0_12px_30px_rgba(117,52,184,0.6)] rounded-2xl flex flex-col h-full hover:-translate-y-3 duration-300 group">
      <div className="w-full h-48">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover rounded-t-lg"
        />
      </div>
      <div className=" p-5 space-y-5 rounded-b-2xl flex flex-col flex-1">
        <h1 className="text-xl font-semibold group-hover:text-[#903ddd]">
          {project.title}
        </h1>
        <p className="line-clamp-2 leading-relaxed text-gray-400 h-12 text-md">
          {project.description}
        </p>
        <ul className="flex flex-wrap items-center gap-3">
          {project.tech.slice(0, 3).map((item) => (
            <li
              key={item}
              className="bg-[#302154] text-purple-300 border border-[#552c89] text-sm px-5 py-1 rounded-full"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-col lg:flex-row items-center gap-5 mt-auto">
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-2 rounded-xl flex justify-center items-center gap-2 cursor-pointer w-full hover:scale-105 duration-300 hover:shadow-[0_12px_30px_rgba(139,42,251,0.6)]">
            <ArrowUpRight />
            Live Demo
          </button>
          <button className="text-[#c27aff] border border-[#c27aff] px-5 py-2 rounded-xl flex justify-center items-center gap-2 cursor-pointer w-full hover:scale-105 duration-300">
            <Github />
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
