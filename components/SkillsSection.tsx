import React from "react";
import SectionHeader from "./SectionHeader";
import SkillBadge from "./SkillBadge";

const techStackColumns = [
  "col-span-2",
  "col-span-2",
  "col-span-1",
  "col-span-1",
  "col-span-1",
  "col-span-1",
  "col-span-1",
  "col-span-1",
  "col-span-1",
  "col-span-1",
];

const focusSkills = [
  "typescript",
  "tailwind",
  "react",
  "storybook",
  "nextjs",
  "vite",
  "git",
  "github",
  "npm",
  "vercel",
];

const otherSkills = [
  "html",
  "css",
  "materialui",
  "semanticui",
  "chakraui",
  "emotion",
  // "styled-components",
  "sass",

  // javascript
  "javascript",
  "jest",
  "jquery",
  "redux",
  "nodejs",

  // utility

  "yarn",
  // "webpack",
];

// these skills i am not as confident in
const lesserSkills = [
  // design + deployment
  "figma",
  "netlify",
  // backend
  "express",
  "mustache",
  "handlebars",
  "mongodb",
  "mysql",
  "graphql",
  "apollo",
  "java",
];

const SkillsSection = () => {
  return (
    <section id="skills">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <SectionHeader>Skills 🛠️</SectionHeader>

        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 gap-2 md:space-x-5 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="text-center mx-auto flex flex-col">
            <SectionHeader level={2}>Current Tech Stack</SectionHeader>

            <div className="grow grid grid-cols-2 mx-auto z-10">
              {focusSkills.map((skill, idx) => (
                <div
                  key={idx}
                  style={{ width: `${100 - 0 * 10}%` }}
                  className={techStackColumns[idx]}
                >
                  <SkillBadge key={idx} value={skill} size={"big"} />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center flex flex-col">
            <SectionHeader level={2}>Experienced</SectionHeader>

            <div className="grow flex flex-wrap flex-row justify-center items-center mb-8 z-10">
              {otherSkills.map((skill, idx) => {
                return <SkillBadge key={idx} value={skill} />;
              })}
            </div>

            <SectionHeader level={2}>Less experienced</SectionHeader>
            <div className="grow flex flex-wrap flex-row justify-center items-center  z-10">
              {lesserSkills.map((skill, idx) => {
                return <SkillBadge key={idx} value={skill} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
