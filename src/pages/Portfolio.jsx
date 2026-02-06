import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/About/AboutSection";
import FeaturedProjects from "../components/Projects/FeaturedProjects";
import SkillSection from "../components/Skills/SkillSection";
import ContactSection from "../components/Contact/ContactSection";
import { Github, Linkedin, Twitter } from "lucide-react";
import Footer from "../components/Footer";

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const links = [
    {
      id: 1,
      icon: Github,
      label: "GitHub",
      url: "https://github.com/Tayyab365",
    },
    {
      id: 2,
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/muhammad-tayyab-7841a9345/",
    },
    { id: 3, icon: Twitter, label: "Twitter", url: "https://x.com/" },
  ];
  return (
    <div>
      <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <HeroSection links={links} />
      <AboutSection />
      <FeaturedProjects />
      <SkillSection />
      <ContactSection links={links} />
      <Footer links={links} />
    </div>
  );
};

export default Portfolio;
