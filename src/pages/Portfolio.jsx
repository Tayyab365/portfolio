import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/About/AboutSection";
import FeaturedProjects from "../components/Projects/FeaturedProjects";
import SkillSection from "../components/Skills/SkillSection";
import ContactSection from "../components/Contact/ContactSection";
import { Github, Linkedin, Twitter } from "lucide-react";
import Footer from "../components/Footer";
import toast from "react-hot-toast";

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
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    toast.dismiss();
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name || !formData.email || !formData.message) {
      return toast.error("Please fill all the fields");
    }
    if (!emailRegex.test(formData.email)) {
      return toast.error("Please enter valid email address");
    }
    toast.success("Message Sent");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <Navbar
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        scrollTo={scrollTo}
      />
      <HeroSection links={links} scrollTo={scrollTo} />
      <AboutSection />
      <FeaturedProjects />
      <SkillSection />
      <ContactSection
        links={links}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
      <Footer links={links} />
    </div>
  );
};

export default Portfolio;
