import React from "react";
import { CgWorkAlt } from "react-icons/cg";

import { LuGraduationCap } from "react-icons/lu";
import Crypto from "../../public/Crypto-wars.png";
import InfinityEstate from "../../public/Infinity Estate.png";
import NikeClone from "../../public/Nike-Clone.jpg";
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
    title: "ZTM Full Stack Developer Bootcamp",
    location: "Udemy.com",
    description:
      "I took a full-stack developer course in 2022. I learned how to build high quality web apps using Node, React, and MongoDB.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2022",
  },
  {
    title: "Software Engineering Internship",
    location: "Egypt, Nasr City, Cairo",
    description:
      "I worked on a full-stack web development project using React, Node, and MongoDB. I also built back-end APIs using Node, Express, and MongoDB.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
  },
  {
    title: "Freelance Full Stack Developer",
    location: "Upwork.com",
    description:
      "I developed high-performing web apps using React, Node, and MongoDB. I also built back-end APIs using Node, Express, and MongoDB.",
    icon: React.createElement(CgWorkAlt),
    date: "2023- Present",
  },
] as const;

export const projectsData = [
  {
    title: "Nike Clone",
    description: "A clone of the official website of the NIKE brand",
    tags: ["React", "MongoDB", "Tailwind"],
    imageUrl: NikeClone,
  },
  {
    title: "Crypto Wars",
    description:
      "A web app for tracking crypto prices. It shows price change, 24h change, and newest crypto news",
    tags: ["React", "TypeScript", "Tailwind", "Redux"],
    imageUrl: Crypto,
  },
  {
    title: "Infinity Estate",
    description:
      "A Real State App that can help you find the best place for your next home.",
    tags: [
      "React",
      "Express js",
      "MongoDB",
      "Tailwind",
      "Redux",
      "Meilisearch",
    ],
    imageUrl: InfinityEstate,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "GitHub",
  "Jest",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "NestJs",
  "PostgreSQL",
  "Framer Motion",
  "Docker",
  "Kubernetes",
  "Redis",
] as const;
