import React from "react";
import TechItems from "./TechItems";
import { Code2, Award, Palette, Zap } from "lucide-react";
import HighlightCard from "./HighlightCard";
import Skills from "./Skills";

const AboutSection = () => {
  const technologies = [
    "React.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "REST APIs",
    "Git & GitHub",
  ];
  const highlights = [
    {
      id: 1,
      icon: Code2,
      title: "1+ Year",
      description: "Frontend Experience",
    },
    {
      id: 2,
      icon: Award,
      title: "5+ Projects",
      description: "Successfully Completed",
    },
    {
      id: 3,
      icon: Palette,
      title: "Clean UI",
      description: "Responsive Design",
    },
    {
      id: 4,
      icon: Zap,
      title: "Fast Learning",
      description: "Quick Problem Solver",
    },
  ];
  const skills = [
    {
      id: 1,
      name: "React",
      percentage: 80,
      gradient: "bg-gradient-to-r from-purple-500 to-purple-600",
    },
    {
      id: 2,
      name: "JavaScript",
      percentage: 70,
      gradient: "bg-gradient-to-r from-blue-500 to-blue-600",
    },
    {
      id: 3,
      name: "HTML5",
      percentage: 90,
      gradient: "bg-gradient-to-r from-cyan-500 to-cyan-600",
    },
    {
      id: 4,
      name: "CSS",
      percentage: 85,
      gradient: "bg-gradient-to-r from-indigo-500 to-indigo-600",
    },
    {
      id: 5,
      name: "Tailwind CSS",
      percentage: 80,
      gradient: "bg-gradient-to-r from-gray-500 to-gray-700",
    },
    {
      id: 6,
      name: "Git",
      percentage: 70,
      gradient: "bg-gradient-to-r from-orange-500 to-orange-600",
    },
  ];

  return (
    <div id="about" className="bg-[#f5f2fb] p-6 sm:p-8 md:p-10 lg:px-24">
      <h1 className="text-[#6c46fb] font-bold text-4xl text-center pt-10 mb-5">
        About Me
      </h1>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="lg:w-[50%]">
          <p className="text-base md:text-md lg:text-lg text-gray-700 leading-relaxed">
            I’m a passionate Frontend Developer specializing in React.js with
            hands-on experience building responsive and interactive web
            applications. I enjoy turning ideas into clean and user-friendly
            interfaces using modern technologies like HTML, CSS, JavaScript, and
            Tailwind CSS.
          </p>
          <br />
          <p className="text-base md:text-md lg:text-lg text-gray-700 leading-relaxed">
            I have worked on real-world projects including a full-stack
            e-commerce platform with authentication, dashboard, and API
            integration. I’m constantly learning and improving my skills to
            become a better developer every day.
          </p>
          <div className="my-5">
            <h1 className="text-xl font-bold text-[#1e2939]">
              Technologies I Work With:
            </h1>
            <ul className="flex flex-wrap gap-3 mt-5">
              {technologies.map((tech) => (
                <TechItems key={tech} tech={tech} />
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-5 my-5">
            {highlights.map((data) => (
              <HighlightCard key={data.id} data={data} />
            ))}
          </div>
        </div>
        <div className="lg:w-[50%]">
          <h1 className="text-2xl font-bold text-[#1e2939]">
            Technical Proficiency
          </h1>
          <div className="space-y-5 my-5">
            {skills.map((skill) => (
              <Skills key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
