import { Menu, X } from "lucide-react";
import MenuModal from "./MenuModal";

const Navbar = ({ isModalOpen, setIsModalOpen, scrollTo }) => {
  return (
    <nav className="bg-[#050915] lg:px-14 sticky top-0 left-0 z-50">
      <div className="flex justify-between items-center px-5 sm:px-10 py-4 text-white">
        <h1
          onClick={() => scrollTo("home")}
          className="bg-gradient-to-r from-[#be7cff] to-[#4c8bda] bg-clip-text text-transparent font-bold text-xl lg:text-2xl cursor-pointer"
        >
          Portfolio
        </h1>
        <button className="md:hidden">
          {isModalOpen ? (
            <X size={20} onClick={() => setIsModalOpen(false)} />
          ) : (
            <Menu size={20} onClick={() => setIsModalOpen(true)} />
          )}
        </button>
        <ul className="hidden md:flex items-center gap-5">
          <li
            onClick={() => scrollTo("home")}
            className="cursor-pointer hover:text-[#c27aff]"
          >
            Home
          </li>
          <li
            onClick={() => scrollTo("about")}
            className="cursor-pointer hover:text-[#c27aff]"
          >
            About
          </li>
          <li
            onClick={() => scrollTo("projects")}
            className="cursor-pointer hover:text-[#c27aff]"
          >
            Projects
          </li>
          <li
            onClick={() => scrollTo("skills")}
            className="cursor-pointer hover:text-[#c27aff]"
          >
            Skills
          </li>
          <li
            onClick={() => scrollTo("contact")}
            className="cursor-pointer hover:text-[#c27aff]"
          >
            Contact
          </li>
        </ul>
      </div>
      <div className="absolute top-14 left-0 w-full md:hidden">
        {isModalOpen && (
          <MenuModal scrollTo={scrollTo} setIsModalOpen={setIsModalOpen} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
