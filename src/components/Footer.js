import React from "react";
import {
  AiFillLinkedin,
  AiFillMail,
  AiOutlineGithub,
  AiOutlineGlobal,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full bg-bodyColor">
      <p className="text-sm text-gray-400 text-center">
        Created by a coding enthusiast, fueled by coffee. Find me at:
      </p>
      <div className="flex justify-center gap-2 mt-3">
        <a
          href="https://github.com/argianardi"
          target="_blank"
          rel="noopener noreferrer"
          className="footerIcon"
        >
          <AiOutlineGithub />
        </a>
        <a
          href="mailto:argianardi14@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footerIcon"
        >
          <AiFillMail />
        </a>
        <a
          href="https://argi.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="footerIcon"
        >
          <AiOutlineGlobal />
        </a>
        <a
          href="https://www.linkedin.com/in/argianardiprasetya/"
          target="_blank"
          rel="noopener noreferrer"
          className="footerIcon"
        >
          <AiFillLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
