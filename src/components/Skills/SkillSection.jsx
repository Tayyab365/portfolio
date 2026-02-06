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
      description: "Building dynamic UIs",
      color: "from-blue-400 to-cyan-400",
    },
    {
      id: 2,
      icon: Layout,
      title: "JavaScript",
      description: "Modern ES6+ features",
      color: "from-yellow-400 to-orange-400",
    },
    {
      id: 3,
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first approach",
      color: "from-green-400 to-emerald-400",
    },
    {
      id: 4,
      icon: Database,
      title: "APIs",
      description: "Restful Integration",
      color: "from-purple-400 to-pink-400",
    },
    {
      id: 5,
      icon: GitBranch,
      title: "Version Control",
      description: "Git workflows",
      color: "from-orange-400 to-red-400",
    },
    {
      id: 6,
      icon: Figma,
      title: "UI/UX Design",
      description: "Figma & prototyping",
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
