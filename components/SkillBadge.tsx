import React from "react";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import {
  SiCss3,
  SiHandlebarsdotjs,
  SiMui,
  SiVercel,
  SiStorybook,
  SiMarkdown,
} from "react-icons/si";
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoSass,
  BiLogoRedux,
  BiLogoNodejs,
  BiLogoFigma,
  BiLogoMongodb,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { SlMustache } from "react-icons/sl";
import { GiGuitar } from "react-icons/gi";
import { GrMysql } from "react-icons/gr";
import { BsCodeSlash } from "react-icons/bs";

import {
  SiSemanticuireact,
  SiAdobepremierepro,
  SiCanva,
  SiExpress,
  SiGraphql,
  SiApollographql,
  SiJest,
  SiAseprite,
} from "react-icons/si";

interface SkillDataItem {
  value: string;
  label: string;
  color: string;
  component: React.ComponentType<any>;
}

const skillData: SkillDataItem[] = [
  { value: "html", label: "HTML", color: "#e34f26", component: AiFillHtml5 },
  { value: "css", label: "CSS", color: "#2965f1", component: SiCss3 },
  {
    value: "tailwind",
    label: "Tailwind CSS",
    color: "#06b6d4",
    component: BiLogoTailwindCss,
  },
  {
    value: "sass",
    label: "SASS",
    color: "#06b6d4",
    component: BiLogoSass,
  },
  {
    value: "semanticui",
    label: "SemanticUI",
    color: "#35bdb2",
    component: SiSemanticuireact,
  },
  {
    value: "materialui",
    label: "Material UI",
    color: "#fafafa",
    component: SiMui,
  },
  {
    value: "figma",
    label: "Figma",
    color: "#4e4e4e",
    component: BiLogoFigma,
  },
  {
    value: "javascript",
    label: "JavaScript",
    color: "#f7df1e",
    component: BiLogoJavascript,
  },
  { value: "react", label: "React", color: "#00d8ff", component: BiLogoReact },
  { value: "jest", label: "Jest", color: "#00d8ff", component: SiJest },
  {
    value: "nodejs",
    label: "Node.js",
    color: "#84ba64",
    component: BiLogoNodejs,
  },
  {
    value: "express",
    label: "Express.js",
    color: "#fafafa",
    component: SiExpress,
  },
  {
    value: "mustache",
    label: "Mustache",
    color: "#fafafa",
    component: SlMustache,
  },
  {
    value: "handlebars",
    label: "Handlebars",
    color: "#f0772b",
    component: SiHandlebarsdotjs,
  },
  {
    value: "redux",
    label: "Redux",
    color: "#7248b6",
    component: BiLogoRedux,
  },
  {
    value: "typescript",
    label: "TypeScript",
    color: "#3178c6",
    component: BiLogoTypescript,
  },
  {
    value: "graphql",
    label: "GraphQL",
    color: "#3178c6",
    component: SiGraphql,
  },
  {
    value: "apollo",
    label: "Apollo",
    color: "#3178c6",
    component: SiApollographql,
  },
  {
    value: "nextjs",
    label: "Next.js",
    color: "#fafafa",
    component: TbBrandNextjs,
  },
  {
    value: "mongodb",
    label: "Mongo DB",
    color: "#fafafa",
    component: BiLogoMongodb,
  },
  {
    value: "mysql",
    label: "MySQL",
    color: "#fafafa",
    component: GrMysql,
  },
  { value: "git", label: "Git", color: "#fca326", component: FaGitAlt },
  {
    value: "github",
    label: "GitHub",
    color: "#fafafa",
    component: AiFillGithub,
  },
  {
    value: "markdown",
    label: "Markdown",
    color: "#fafafa",
    component: SiMarkdown,
  },
  {
    value: "storybook",
    label: "Storybook",
    color: "#ff4785",
    component: SiStorybook,
  },
  {
    value: "vercel",
    label: "Vercel",
    color: "#fafafa",
    component: SiVercel,
  },

  // misc skills below
  {
    value: "premiere",
    label: "Premiere Pro",
    color: "#4e4e4e",
    component: SiAdobepremierepro,
  },
  {
    value: "canva",
    label: "Canva",
    color: "#4e4e4e",
    component: SiCanva,
  },
  {
    value: "gms",
    label: "GameMaker Studio",
    color: "#00ffff",
    component: BsCodeSlash,
  },
  {
    value: "aseprite",
    label: "Aseprite",
    color: "#4e4e4e",
    component: SiAseprite,
  },
  {
    value: "garageband",
    label: "Garage Band",
    color: "#4e4e4e",
    component: GiGuitar,
  },
];

interface SkillBadgeProps {
  value: string;
  size?: "small" | "regular";
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ value, size = "regular" }) => {
  const thisIconData = skillData.find((obj) => obj.value === value) || {
    value: "",
    label: "",
    color: "",
    component: () => <div>{value}</div>,
  };
  const Icon = thisIconData.component;
  const containerCls = `
    ${size === "regular" ? "text-base" : "text-sm"} 
    ${size === "regular" ? "" : "text-gray dark:text-light-gray"}
    border-dark-gray dark:border-dark-gray ${
      size === "regular" ? "border" : ""
    } shadow py-2 px-4 m-1 rounded font-medium
  `;
  const iconCls = `mx-auto`;
  const iconSize = size === "regular" ? 30 : 20;

  return (
    <p className={containerCls}>
      <Icon
        style={{ color: size === "small" ? thisIconData.color : "inherit" }}
        className={iconCls}
        size={iconSize}
      />
      {thisIconData.label}
    </p>
  );
};

export default SkillBadge;
