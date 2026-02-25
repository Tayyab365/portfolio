import {
  Code2,
  Database,
  Figma,
  GitBranch,
  Layout,
  Smartphone,
} from "lucide-react";
import SkillCard from "./SkillCard";

const SkillSection = () => {
  const skills = [
    {
      id: 1,
      icon: Code2,
      title: "React.js",
      description: "Building interactive component-based UIs",
      color: "from-blue-400 to-cyan-400",
    },
    {
      id: 2,
      icon: Layout,
      title: "JavaScript",
      description: "Core logic & ES6 fundamentals",
      color: "from-yellow-400 to-orange-400",
    },
    {
      id: 3,
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first layouts",
      color: "from-green-400 to-emerald-400",
    },
    {
      id: 4,
      icon: Database,
      title: "API Integration",
      description: "Fetching & displaying data",
      color: "from-purple-400 to-pink-400",
    },
    {
      id: 5,
      icon: GitBranch,
      title: "Git & GitHub",
      description: "Version control workflow",
      color: "from-orange-400 to-red-400",
    },
    {
      id: 6,
      icon: Figma,
      title: "UI Implementation",
      description: "Design to code conversion",
      color: "from-indigo-400 to-purple-400",
    },
  ];
  return (
    <div
      id="skills"
      className="bg-gradient-to-r from-[#101828] via-[#1f1d3e] to-[#101828] p-6 sm:p-8 md:p-10 lg:px-24"
    >
      <h1 className="text-4xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-bold text-center pt-10 mb-5">
        Skills & Expertise
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 my-10">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
