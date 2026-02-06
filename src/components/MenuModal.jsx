import { X } from "lucide-react";
import React from "react";

const MenuModal = () => {
  return (
    <div className="py-10 bg-black text-white min-h-screen">
      <ul className="flex flex-col justify-center items-center space-y-5 text-lg font-semibold">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Projects</li>
        <li className="cursor-pointer">Skills</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
    </div>
  );
};

export default MenuModal;
