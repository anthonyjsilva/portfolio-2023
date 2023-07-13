import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import {
  SiCss3,
  SiHandlebarsdotjs,
  SiMui,
  SiVercel,
  SiStorybook,
  SiMarkdown,
  SiVite,
  SiChakraui,
  SiWebpack,
  SiNetlify,
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
  BiLogoJquery,
  BiLogoJava,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGitAlt, FaNpm, FaYarn } from "react-icons/fa";
import { SlMustache } from "react-icons/sl";
import { GiGuitar } from "react-icons/gi";
import { GrMysql } from "react-icons/gr";
import { BsCodeSlash } from "react-icons/bs";
import { RiEmotionHappyFill } from "react-icons/ri";

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

export interface SkillDataItem {
  value: string;
  label: string;
  color: string;
  color2?: string;
  component: React.ComponentType<any>;
}

export const skillData: SkillDataItem[] = [
  { value: "html", label: "HTML", color: "#e34f26", component: AiFillHtml5 },
  { value: "css", label: "CSS", color: "#2965f1", component: SiCss3 },
  {
    value: "tailwind",
    label: "TailwindCSS",
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
    value: "chakraui",
    label: "Chakra UI",
    color: "#319795",
    component: SiChakraui,
  },
  {
    value: "emotion",
    label: "Emotion",
    color: "#f7df1e",
    component: RiEmotionHappyFill,
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
  {
    value: "jquery",
    label: "jQuery",
    color: "#78cff5",
    color2: "#0769AD",
    component: BiLogoJquery,
  },
  {
    value: "java",
    label: "Java",
    color: "#5382a1",
    component: BiLogoJava,
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
    value: "vite",
    label: "Vite",
    color: "#646CFF",
    component: SiVite,
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
    value: "npm",
    label: "NPM",
    color: "#CB3837",
    component: FaNpm,
  },
  {
    value: "yarn",
    label: "Yarn",
    color: "#fafafa",
    component: FaYarn,
  },
  {
    value: "webpack",
    label: "Webpack",
    color: "#1c78c0",
    component: SiWebpack,
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
  {
    value: "netlify",
    label: "Netlify",
    color: "#00c7b7",
    component: SiNetlify,
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
