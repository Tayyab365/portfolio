import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import ProfileImg from "../assets/Profile.jpg";

const HeroSection = ({ links }) => {
  return (
    <div
      id="home"
      className="bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 p-6 sm:p-8 md:p-10 space-y-7 flex flex-col items-center justify-center"
    >
      <img
        src={ProfileImg}
        alt="Profile"
        className="w-30 h-30 rounded-full object-cover border border-[#9041e2] shadow-[0_0_25px_rgba(139,42,251,0.8)]"
      />
      <h1 className="bg-gradient-to-r from-[#928bf7] via-[#5f9ffe] to-[#928bf7] bg-clip-text text-transparent text-4xl md:text-5xl font-bold text-center">
        Muhammad Tayyab
      </h1>
      <p className="text-[#dab2ff] text-xl md:text-2xl text-center font-semibold">
        Frontend Developer
      </p>
      <p className="text-white text-md text-center">
        Crafting beautiful, responsive web experiences with modern technologies
      </p>
      <div className="flex flex-col md:flex-row md:items-center md:justify-center items-center gap-3 w-full md:w-md">
        <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-3 rounded-full cursor-pointer font-semibold w-full sm:w-sm hover:scale-105 duration-300 hover:shadow-[0_12px_30px_rgba(139,42,251,0.6)]">
          View Projects
        </button>
        <a
          href="/Muhammad_Tayyab.pdf"
          download
          className="inline-flex justify-center items-center gap-2 text-[#dab2ff] border-2 border-[#a344f9] px-5 py-3 rounded-full cursor-pointer font-semibold w-full sm:w-sm hover:scale-105 duration-300"
        >
          <Download size={20} /> <span>Download Resume</span>
        </a>
      </div>
      <ul className="flex items-center justify-center gap-5 my-10">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={link.url}
              target="_blank"
              className="flex items-center justify-center bg-[#17223c] hover:bg-[#30276a] text-[#99a1af] hover:text-[#bf79fd] w-12 h-12 p-3 rounded-full cursor-pointer hover:scale-110 duration-300"
            >
              {<link.icon />}
            </a>
          </li>
        ))}
      </ul>
      <button className="cursor-pointer animate-bounce text-[#cfb2ff]">
        <ArrowDown />
      </button>
    </div>
  );
};

export default HeroSection;
