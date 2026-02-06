import React from "react";

const SkillCard = ({ skill }) => {
  return (
    <div className="group p-10 border border-[#364153] bg-gradient-to-br from-[#1d2838] to-[#111929] text-white space-y-3 rounded-2xl transition-all hover:rotate-3 duration-300 hover:border-[#903ddd]">
      <div
        className={`bg-gradient-to-r ${skill.color} w-12 h-12 rounded-lg p-3 transition-transform hover:rotate-360 duration-700`}
      >
        <skill.icon />
      </div>
      <h1 className="text-xl font-semibold group-hover:text-[#903ddd]">
        {skill.title}
      </h1>
      <p className="text-gray-400">{skill.description}</p>
    </div>
  );
};

export default SkillCard;
