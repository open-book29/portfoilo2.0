import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/cinemate.png";
import rmtdevImg from "@/public/a.png";
import infiniteRippleImg from "@/public/Infinite Ripple.png";
import netflixImg from "@/public/netflix.png";
import bubleImg from "@/public/bubble.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Technology - BTech",
    location: "Shri Ramswaroop Memorial College of Engineering and Managment",
    description: "Computer Science and Engineering, Grade: 7.6 CGPA",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
  },
  {
    title: "Front-End Developer Intern",
    location: "Knocial ltd India, Gurgaon.",
    description:
      "After I graduated from college i got an offer with knocial india pvt ltd for an  internship of 3 months",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "certification in Rect.js ",
    location: "Udemy",
    description:
      "I received certification in react js and utilised my time in competitive coding and learning typescript, node.js, tailwind, etc.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "Netflix Clone",
    description:
      "This project showcases my skills in building scalable, responsive applications with a focus on front-end interactivity, seamless user experiences, and efficient backend data management.",
    tags: ["Tailwind", "Typescript", "React", "Nextjs", "Mongodb", "Prisma"],
    imageUrl: netflixImg,
    gitUrl: "https://github.com/open-book29/netflix-clone-final",
    previewUrl: "https://endearing-khapse-27a623.netlify.app/",
  },
  {
    title: "Infinite Ripple",
    description:
      "The simple liquid distortion effect used in this web page applies a mesmerizing distortion effect to image, giving the illusion of a liquid-like behavior.",
    tags: ["HTML", "CSS", "Javascript", "Shery js"],
    imageUrl: infiniteRippleImg,
    gitUrl: "https://github.com/open-book29/landing-page",
    previewUrl: "https://landing-page-openbook.vercel.app/",
  },
  {
    title: "Cinemate",
    description:
      "A website for the cinephilles built using fetch API, having categorical selection menu according to preferences and changeable dark/light theme.",
    tags: ["React", "Tailwind", "Javascript", "Fetch API"],
    imageUrl: corpcommentImg,
    gitUrl: "https://github.com/open-book29/Cinemate-react",
    previewUrl: "https://cinemate-react-ul.netlify.app/",
  },
  {
    title: "Codebook ecomerce",
    description:
      "An e-commerce website for technical based education  content. User login and dashboard is enabled along with filtering,sorting and searching features.",
    tags: ["React", "Tailwind", "Javascript", "Context API"],
    imageUrl: rmtdevImg,
    gitUrl: "https://github.com/open-book29/e-commerce",
    previewUrl: "https://ecommerce-codebook-ul.netlify.app/",
  },
  {
    title: "Bubble Game",
    description:
      "A simple single player offline game, built using fundamental concepts of html, css and js.",
    tags: ["Html", "css", "Javascript"],
    imageUrl: bubleImg,
    gitUrl: "https://github.com/open-book29/bubble-game",
    previewUrl: "https://bubble-game-nu.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Framer Motion",
] as const;
