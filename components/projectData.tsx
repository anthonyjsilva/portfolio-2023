export type ProjectStatus = "current" | "ongoing" | "paused" | "done";

export interface Project {
  name: string;
  status?: ProjectStatus;
  description: string;
  image: string;
  github?: string;
  link?: string;
  itch?: string;
  skills: string[];
}

export const projectData: Project[] = [
  {
    name: "Summit",
    status: "ongoing",
    description:
      "Productivity app gamified as hiking that incentivizes users to complete daily goals.",
    image: "/summit.png",
    skills: ["typescript", "nextjs", "react", "tailwind", "vercel"],
  },

  {
    name: "Minimal blog",
    description: "Minimal blog using Markdown to write posts.",
    status: "done",
    image: "/minimal-blog.png",
    github: "https://github.com/anthonyjsilva/minimal-blog",
    link: "https://blog.anthonyjsilva.com/",
    skills: ["typescript", "nextjs", "react", "tailwind", "markdown", "vercel"],
  },
  {
    name: "Time left",
    description: "Visualize how much time you have left to live.",
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
      "3rd party achievement website for League of Legends. (No longer live due to API restrictions)",
    image: "/lol.png",
    github: "https://github.com/anthonyjsilva/achieve-league-of-legends",
    skills: ["nodejs", "express", "mustache", "css"],
  },
  {
    name: "This website (anthonyjsilva.com)",
    description:
      "My web development portfolio website, check out the code on github!",
    image: "/portfolio.png",
    github: "https://github.com/anthonyjsilva/portfolio-2023",
    skills: ["typescript", "nextjs", "react", "tailwind", "vercel"],
  },
  {
    name: "Vacant Brain",
    description: "Minimalist art gallery.",
    image: "/p2.jpg",
    link: "http://vacantbrain.com",
    skills: ["typescript", "nextjs", "react", "tailwind", "vercel"],
  },
  // {
  //   name: "Pong Game",
  //   description: "Browser version of class Pong using HTML 5 Canvas.",
  //   image: "/pong.png",
  //   github: "https://github.com/anthonyjsilva/pong-html-game",
  //   link: "https://anthonyjsilva.github.io/pong-html-game/",
  //   skills: ["html", "css", "javascript"],
  // },
  {
    name: "AFK RPG",
    status: "paused",
    description: "Simple browser based RPG game that plays for you.",
    image: "/afkrpg.png",
    skills: ["typescript", "react", "chakraui", "tailwind", "vite"],
  },
  {
    name: "Life's Not Square",
    status: "paused",
    description: "2D puzzle adventure game with escape the room elements.",
    image: "/square.png",
    itch: "https://anthonysilva.itch.io/lifes-not-square",
    skills: ["gms"],
  },
];
