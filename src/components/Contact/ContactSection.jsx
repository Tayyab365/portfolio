import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import React from "react";

const ContactSection = ({ links }) => {
  const contactDetails = [
    {
      id: 1,
      icon: Mail,
      label: "Email",
      value: "mtayyab3409@gmail.com",
    },
    {
      id: 2,
      icon: Phone,
      label: "Phone",
      value: "03061822394",
    },
    {
      id: 3,
      icon: MapPin,
      label: "Location",
      value: "Lahore, Pakistan",
    },
  ];

  return (
    <div
      id="contact"
      className="bg-gradient-to-br from-[#58198b] via-[#1c3889] to-[#11192b] text-white p-6 sm:p-8 md:p-10 lg:px-24"
    >
      <h1 className="text-4xl text-center font-bold pt-10">Get In Touch</h1>
      <p className="mt-5 text-center">
        Have a project in mind? Let's work together to create something amazing!
      </p>
      <div className="flex flex-col xl:flex-row items-center gap-5 ">
        <form className="space-y-5 border border-[#6b6dad] p-5 sm:p-6 md:p-8 rounded-xl bg-white/10 my-10 w-full">
          <div className="flex flex-col gap-3">
            <label className="font-medium">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className=" border border-[#6f7fb6] py-3 px-3 rounded-xl bg-white/10 outline-none"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="font-medium">Email</label>
            <input
              type="email"
              placeholder="your.email@example.com"
              className="border border-[#6f7fb6] py-3 px-3 rounded-xl bg-white/10 outline-none"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="font-medium">Message</label>
            <textarea
              placeholder="Your Message..."
              className="border border-[#6f7fb6] py-3 px-3 rounded-xl bg-white/10 outline-none min-h-28"
            />
          </div>
          <button className="bg-gradient-to-r from-[#9618fb] to-[#265bfb] w-full py-2 rounded-xl font-medium cursor-pointer hover:scale-105 duration-300 hover:shadow-[0_12px_30px_rgba(139,42,251,0.6)]">
            Send Message
          </button>
        </form>
        <div className="w-full xl:mt-2">
          <div className="space-y-6">
            {contactDetails.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-5 bg-white/10 rounded-xl p-6 hover:bg-white/20"
              >
                <item.icon
                  size={18}
                  className="w-10 h-10 bg-gradient-to-r from-[#8b2afb] to-[#2a5afb] p-2 rounded-md"
                />
                <div>
                  <p className="text-md font-semibold">{item.label}</p>
                  <p className="text-md">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white/10 p-5 rounded-xl my-5">
            <h1 className="text-xl font-bold">Connect With Me</h1>
            <div className="flex items-center gap-5">
              {links.map((link) => (
                <a
                  href={link.url}
                  target="_blank"
                  key={link.id}
                  className="cursor-pointer mt-3 hover:scale-105 duration-300 hover:shadow-[0_12px_30px_rgba(139,42,251,0.6)]"
                >
                  <link.icon className="w-10 h-10 bg-gradient-to-r from-[#8b2afb] to-[#2a5afb] p-2 rounded-md" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
