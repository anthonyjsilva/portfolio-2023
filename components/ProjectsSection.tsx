import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import { FaItchIo } from "react-icons/fa";

import SectionHeader from "./SectionHeader";
import SkillBadge from "./SkillBadge";
import StatusBadge from "./StatusBadge";
import { Project, projectData } from "./projectData";

const projects: Project[] = projectData;

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="mb-32">
      <SectionHeader>Projects 💼</SectionHeader>

      <div className="flex flex-col text-center md:flex-wrap md:flex-row md:justify-between">
        {projects.map((project, idx) => {
          const hasLinks = project.link || project.github || project.itch;
          const thisImgClass = `mx-auto rounded-xl shadow-xl ${
            hasLinks ? "hover:opacity-70" : ""
          }`;
          const thisStatus = project.status || "done";

          return (
            <div key={idx} className="basis-[45%] mt-24">
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2">
                  <div className="">
                    {hasLinks ? (
                      <Link href={project.link || "#"}>
                        <Image
                          style={{ width: "480px", height: "270px" }}
                          src={project.image}
                          alt=""
                          width={1000}
                          height={1000}
                          className={thisImgClass}
                        />
                      </Link>
                    ) : (
                      <Image
                        style={{ width: "480px", height: "270px" }}
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className={thisImgClass}
                      />
                    )}
                  </div>
                  <div className="mt-8">
                    <SectionHeader level={3}>{project.name}</SectionHeader>
                    <p className="font-extralight text-xl italic leading-loose my-1 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <StatusBadge status={thisStatus} />
                    <div className="">
                      <div className="flex flex-row justify-center align-bottom space-x-4">
                        {project.github && (
                          <Link
                            className="flex flex-col grow items-center rounded shadow p-4 hover:text-blue"
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
                            className="flex flex-col grow items-center rounded shadow p-4 hover:text-blue"
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
                            className="flex flex-col grow items-center rounded shadow p-4 hover:text-blue"
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
                      {project.skills && (
                        <div className="flex flex-wrap flex-row basis-1/3 justify-start z-10 my-1 mb-4">
                          {project.skills.map((skill, idx) => (
                            <SkillBadge
                              key={idx}
                              value={skill}
                              size={"small"}
                            />
                          ))}
                        </div>
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
