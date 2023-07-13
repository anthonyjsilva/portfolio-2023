import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import { FaItchIo } from "react-icons/fa";

import SectionHeader from "./SectionHeader";
import SkillBadge from "./SkillBadge";

const projects = [
  {
    name: "Always Onwards",
    description: "Minimal blog website using Markdown to write posts.",
    image: "/minimal-blog.png",
    github: "https://github.com/anthonyjsilva/minimal-blog",
    link: "https://blog.anthonyjsilva.com/",
    skills: ["typescript", "nextjs", "react", "tailwind", "markdown"],
  },
  {
    name: "Time left",
    description: "Time left to live visualizer.",
    image: "/time-left.png",
    github: "https://github.com/anthonyjsilva/time-left-to-live",
    link: "https://anthonyjsilva.github.io/time-left-to-live/",
    skills: ["html", "css", "javascript"],
  },
  {
    name: "Colors",
    description: "Custom color palette tool.",
    image: "/p1.png",
    github: "https://github.com/anthonyjsilva/colors",
    link: "https://anthonyjsilva.github.io/colors/",
    skills: ["react", "css"],
  },
  {
    name: "League of Legends Achievements",
    description:
      "3rd party achievement website for League of Legends. (Site is no longer live due to API restrictions)",
    image: "/lol.png",
    github: "https://github.com/anthonyjsilva/achieve-league-of-legends",
    skills: ["nodejs", "express", "mustache", "css"],
  },
  {
    name: "Productivity App",
    description: "(Currently in development)",
    image: "/skills.png",
    skills: ["react", "semanticui", "css"],
  },
  {
    name: "Pong Game",
    description: "Browser version of class Pong using HTML 5 Canvas.",
    image: "/pong.png",
    github: "https://github.com/anthonyjsilva/pong-html-game",
    link: "https://anthonyjsilva.github.io/pong-html-game/",
    skills: ["html", "css", "javascript"],
  },
  {
    name: "Life's Not Square",
    description: "2D puzzle adventure game. (Development paused)",
    image: "/square.png",
    itch: "https://anthonysilva.itch.io/lifes-not-square",
    skills: ["gms"],
  },
  {
    name: "This website",
    description: "Check out the code on github!",
    image: "/portfolio.png",
    github: "https://github.com/anthonyjsilva/portfolio-2023",
    skills: ["typescript", "nextjs", "react", "tailwind"],
  },
  {
    name: "Vacant Brain",
    description: "Minimalist art gallery.",
    image: "/p2.jpg",
    link: "http://vacantbrain.com",
    skills: ["html", "css"],
  },
  {
    name: "Tailwind Static Site",
    description: "Tailwind and dark mode practice.",
    image: "/p3.png",
    github: "https://github.com/anthonyjsilva/tailwind-css-website",
    link: "https://anthonyjsilva.github.io/tailwind-css-website/",
    skills: ["html", "tailwind"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="mb-32	">
      <SectionHeader>Projects 💼</SectionHeader>

      <div className="flex flex-col text-center  md:flex-wrap md:flex-row md:justify-between">
        {projects.map((project, idx) => {
          return (
            <div key={idx} className="basis-[45%] mt-24 ">
              <SlideUp offset="-300px 0px -300px 0px">
                {/* border-2 border-dark-gray dark:border-gray p-10 rounded-lg */}
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2">
                  <div className=" ">
                    <Link href={project.link ? project.link : "#"}>
                      <Image
                        style={{ width: "480px", height: "270px" }}
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="mx-auto rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 ">
                    <SectionHeader level={3}>{project.name}</SectionHeader>

                    <p className="font-extralight text-xl italic leading-loose my-1 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>

                    {project.skills && (
                      <div className="flex flex-wrap flex-row basis-1/3 justify-center z-10 my-1 mb-4">
                        {project.skills.map((skill, idx) => (
                          <SkillBadge key={idx} value={skill} size={"small"} />
                        ))}
                      </div>
                    )}

                    <div className="flex flex-row justify-center align-bottom space-x-4">
                      {project.github && (
                        <Link
                          className="flex flex-col items-center hover:text-blue"
                          href={project.github}
                          target="_blank"
                        >
                          <BsGithub
                            size={30}
                            className="mb-2 hover:-translate-y-1 transition-transform cursor-pointer hover:text-blue"
                          />
                          View on GitHub
                        </Link>
                      )}
                      {project.itch && (
                        <Link
                          className="flex flex-col items-center hover:text-blue"
                          href={project.itch}
                          target="_blank"
                        >
                          <FaItchIo
                            size={30}
                            className="mb-2 hover:-translate-y-1 transition-transform cursor-pointer hover:text-blue"
                          />
                          View on Itch.io
                        </Link>
                      )}
                      {project.link && (
                        <Link
                          className="flex flex-col items-center hover:text-blue"
                          href={project.link}
                          target="_blank"
                        >
                          <BsArrowUpRightSquare
                            size={30}
                            className="mb-2 hover:-translate-y-1 transition-transform cursor-pointer hover:text-blue"
                          />
                          View live
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
