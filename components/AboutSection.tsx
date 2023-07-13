import React from "react";
import SectionHeader from "./SectionHeader";
import SkillBadge from "./SkillBadge";

const basicSkills = ["html", "css", "tailwind", "materialui", "semanticui"];
const frontendSkills = [
  "javascript",
  "typescript",
  "react",
  "redux",
  // "jest",
  "nextjs",
  "nodejs",
  // "graphql",
  // "apollo",
];
const utilitySkills = [
  "git",
  "github",
  //"figma"
];
const backendSkills = ["express", "mustache", "handlebars", "mongodb", "mysql"];
const miscSkills = ["premiere", "aseprite", "gms", "canva", "garageband"];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <SectionHeader>About 📖</SectionHeader>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <SectionHeader level={2}>Backstory</SectionHeader>
            <p>
              Hi, my name is Anthony and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in San Antonio, TX.
            </p>
            <br />
            <p>
              In 2017 I graduated from a coding bootcamp called The Iron Yard in
              Austin TX and have since been working as a Frontend developer
              specializing in React.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From hiking, traveling, making YouTube videos, I love creating
              things. I am always seeking new experiences and want continue to
              push myself to learn new skills.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-blue">
                never stop pushing yourself
              </span>{" "}
              and that&#39;s what I strive to do. I have a passion for learning
              and a desire to always push the limits of what is possible. I am
              excited to see where my career takes me and am always open to new
              opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 ">
            <SectionHeader level={2}>Skills 🛠️</SectionHeader>

            <div className="flex flex-wrap flex-row basis-1/3 justify-center md:justify-end z-10">
              {basicSkills.map((skill, idx) => {
                return <SkillBadge key={idx} value={skill} />;
              })}
              {frontendSkills.map((skill, idx) => {
                return <SkillBadge key={idx} value={skill} />;
              })}
              {utilitySkills.map((skill, idx) => {
                return <SkillBadge key={idx} value={skill} />;
              })}
            </div>

            <svg
              id="logo"
              width={"501px"}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <circle
                cx="256"
                cy="256"
                r="256"
                fill="transparent"
                fillOpacity="1"
              ></circle>
              <g
                className=""
                transform="translate(0,0)"
                style={{ touchAction: "none" }}
              >
                <path
                  d="M331.924 20.385c-36.708.887-82.53 60.972-116.063 147.972h.003c30.564-65.57 71.17-106.39 97.348-99.378 28.058 7.516 37.11 69.42 24.847 148.405-.895-.32-1.773-.642-2.672-.96.893.367 1.765.738 2.65 1.106-2.988 19.215-7.22 39.424-12.767 60.12-2.77 10.332-5.763 20.39-8.936 30.14-24.996-3.82-52.374-9.537-80.82-17.16-105.856-28.36-186.115-72.12-179.307-97.53 4.257-15.884 42.167-23.775 95.908-20.29-74.427-8.7-128.912-2.044-135.035 20.803-9.038 33.73 89.168 89.372 219.147 124.2 24.436 6.55 48.267 11.897 70.918 16.042-28.965 75.878-68.293 126.078-96.653 118.48-21.817-5.85-35.995-45.443-36.316-100.206-4.79 75.476 9.278 131.945 40.66 140.356 38.836 10.407 91.394-54.998 127.896-152.98 80.12 10.74 138.958 4.278 145.38-19.682 6.384-23.82-41.025-58.44-115.102-89.03 20.713-109.022 8.483-198.5-31.96-209.34-2.968-.796-6.013-1.144-9.124-1.07zm40.568 213.086c44.65 22.992 71.146 47.135 67.07 62.348-4.055 15.13-38.104 20.457-87.333 16.303 3.415-10.604 6.64-21.502 9.63-32.663 4.176-15.588 7.713-30.965 10.632-45.986z"
                  fill="#18a7ff"
                  fillOpacity="1"
                  transform="translate(25.6, 25.6) scale(0.9, 0.9) rotate(0, 256, 256)"
                ></path>
              </g>
            </svg>
            {/* <Image
              src="/logo.svg"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
