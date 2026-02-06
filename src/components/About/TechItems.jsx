import React from "react";

const TechItems = ({ tech }) => {
  return (
    <li className="text-[#8200db] font-medium px-5 py-2 border-2 border-[#e9d4ff] bg-white rounded-full">
      {tech}
    </li>
  );
};

export default TechItems;
