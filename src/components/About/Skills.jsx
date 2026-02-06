import React from "react";

const Skills = ({ skill }) => {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h1 className="font-medium">{skill.name}</h1>
        <p className="font-medium">{skill.percentage}%</p>
      </div>
      <div className="h-3 bg-gray-400 rounded-full overflow-hidden">
        <div
          className={`${skill.gradient} h-full rounded-full w-${skill.percentage} transition-all duration-100 ease-out`}
          style={{
            width: `${skill.percentage}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Skills;
