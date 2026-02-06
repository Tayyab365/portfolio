import React from "react";

const Footer = ({ links }) => {
  return (
    <div className="bg-[rgb(3,7,18)] text-center p-10">
      <ul className="flex items-center justify-center gap-5">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={link.url}
              target="_blank"
              className="flex items-center justify-center bg-[#17223c] text-[#99a1af] w-12 h-12 p-3 rounded-full cursor-pointer hover:text-[#bf79fd] hover:scale-110 duration-300"
            >
              {<link.icon />}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-gray-400 text-sm md:text-base mt-5">
        © 2026 Muhammad Tayyab. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
