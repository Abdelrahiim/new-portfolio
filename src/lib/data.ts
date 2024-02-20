import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
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
