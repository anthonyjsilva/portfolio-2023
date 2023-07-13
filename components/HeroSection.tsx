"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { CgMail } from "react-icons/cg";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2 ">
          <Image
            src="/my-headshot.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl border-dark-gray dark:border-white border-8"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="tracking-widest text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            {`Hey! 👋`}
          </h1>
          <p className="tracking-widest font-extralight italic my-8 md:text-2xl leading-loose">
            {`I'm a `}
            <span className="font-semibold text-blue">
              {`Frontend Web Developer `}
            </span>
            {`based in San Antonio, TX. Creating software that makes a positive
            impact in people's lives.`}
          </p>

          <div className="flex flex-row justify-center md:justify-start mb-12">
            <a
              href="https://github.com/anthonyjsilva"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineGithub
                className="mr-8 hover:-translate-y-1 transition-transform cursor-pointer dark:text-neutral-100 hover:text-blue"
                size={50}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/anthonyjsilva/"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineLinkedin
                className="mr-8 hover:-translate-y-1 transition-transform cursor-pointer dark:text-neutral-100 hover:text-blue"
                size={50}
              />
            </a>

            <a href="mailto:ajsilva@utexas.edu">
              <CgMail
                className="hover:-translate-y-1 transition-transform cursor-pointer dark:text-neutral-100 hover:text-blue"
                size={50}
              />
            </a>
          </div>

          {/* <Link
            to="projects"
            className="uppercase text-white bg-blue font-semibold px-6 py-3 rounded shadow hover:bg-blue-300 cursor-pointer hover:bg-dark-blue"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link> */}
        </div>
      </div>

      <div className="flex flex-row items-center text-center justify-center cursor-pointer hover:text-blue">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
