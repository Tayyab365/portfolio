import { X } from "lucide-react";
import React from "react";

const MenuModal = ({ scrollTo, setIsModalOpen }) => {
  return (
    <div className="py-10 bg-black text-white min-h-screen">
      <ul className="flex flex-col justify-center items-center space-y-5 text-lg font-semibold">
        <li
          onClick={() => {
            scrollTo("home");
            setIsModalOpen(false);
          }}
          className="cursor-pointer"
        >
          Home
        </li>
        <li
          onClick={() => {
            scrollTo("about");
            setIsModalOpen(false);
          }}
          className="cursor-pointer"
        >
          About
        </li>
        <li
          onClick={() => {
            scrollTo("projects");
            setIsModalOpen(false);
          }}
          className="cursor-pointer"
        >
          Projects
        </li>
        <li
          onClick={() => {
            scrollTo("skills");
            setIsModalOpen(false);
          }}
          className="cursor-pointer"
        >
          Skills
        </li>
        <li
          onClick={() => {
            scrollTo("contact");
            setIsModalOpen(false);
          }}
          className="cursor-pointer"
        >
          Contact
        </li>
      </ul>
    </div>
  );
};

export default MenuModal;
