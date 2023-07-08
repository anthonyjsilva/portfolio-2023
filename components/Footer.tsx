import React from "react";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";
import { CgMail } from "react-icons/cg";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl mb-8 px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center  md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 dark:text-neutral-100">
          © 2023 Anthony Silva<a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 my-1">
          <a
            href="https://github.com/anthonyjsilva"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer dark:text-neutral-100 dark:hover:text-blue"
              size={30}
            />
          </a>
          {/* <a
            href="https://twitter.com/hqasmei"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineTwitter
              className="hover:-translate-y-1 transition-transform cursor-pointer dark:text-neutral-100"
              size={30}
            />
          </a> */}

          <a
            href="https://www.linkedin.com/in/anthonyjsilva/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer dark:text-neutral-100 dark:hover:text-blue"
              size={30}
            />
          </a>

          <a href="mailto:ajsilva@utexas.edu">
            <CgMail
              className="hover:-translate-y-1 transition-transform cursor-pointer dark:text-neutral-100 dark:hover:text-blue"
              size={30}
            />
          </a>

          {/* <a
            href="https://www.youtube.com/channel/UCQBMkSDgbxDb8usMeXmOZyA"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineYoutube
              className="hover:-translate-y-1 transition-transform cursor-pointer dark:text-neutral-100"
              size={30}
            />
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
