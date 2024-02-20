"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const About = () => {
  return (
    <motion.section
      id="#about"
      className="mb-28 max-w-[45rem] text-justify sm:mb-40 "
      initial={{ opacity: 0, y: 100 }} animate={{opacity:1 ,y:0}}
      transition={{delay:.175}}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3 ">
        My journey into web development began with a spark of curiosity and a
        desire to create. After diving into the comprehensive{" "}
        <span className="font-medium">
          The Complete Web Developer in 2024: Zero to Mastery
        </span>
        , I was hooked on the fundamentals of HTML, CSS, JavaScript, and
        Node.js. Building real-world projects during the bootcamp solidified my
        passion and ignited a hunger for more. To elevate my JavaScript skills,
        I took{" "}
        <span className="font-medium">
          Stephen Grinder's Typescript: The Complete Developer's Guide
        </span>{" "}
        course. This deep dive empowered me to write robust and maintainable
        code, while appreciating the beauty of type safety. I further expanded
        my knowledge with his <span className="font-medium">NestJS</span>{" "}
        course, gaining expertise in building scalable and efficient server-side
        applications. Today, I'm a passionate MERN Stack developer with a strong
        foundation in TypeScript and NestJS. I'm driven by the challenge of
        creating dynamic and interactive web experiences that solve real-world
        problems, and I'm always eager to learn and tackle new challenges
      </p>
      <p className="mb-3">
        <span className="italic">Beyond coding</span>, I enjoy playing video
        games, watching movies, and I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and languages</span>. I'm also
        learning about video editing and visual effects
      </p>
      <p>
        If you're looking for a dedicated and driven{" "}
        <span className="font-medium">full Stack developer</span> with a thirst
        for knowledge and a passion for creating impactful applications, I'd
        love to connect!
      </p>
    </motion.section>
  );
};

export default About;
