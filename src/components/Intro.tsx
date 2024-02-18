"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
/**
 * Renders the introductory section with personal information and contact links.
 *
 * */
const Intro = () => {
  return (
    <section
      id="home"
      className="mb-28 max-w-[70rem] scroll-mt-[100rem] text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, type: "tween" }}
          >
            <Image
              src="/Abdelrhiim.jpg"
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow"
              alt={"Abdelrhiim"}
              width={192}
              height={192}
              quality={"95"}
              priority={true}
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              type: "spring",
              stiffness: 125,
              delay: 0.1,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Abdelrhiim</span> I'm a{" "}
        <span className="font-bold">Full Stack Developer</span> specializing in{" "}
        <span className="underline">React and Node.js</span> With expertise in
        both front-end and back-end development, I craft dynamic web
        applications and robust APIs. Let's collaborate and build something
        great!
      </motion.p>
      <motion.div
        className="flex flex-col items-center justify-center gap-4 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link
          className="group flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
          href={"#contact"}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </Link>
        <a
          className="group flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3 outline-none transition hover:scale-110 hover:bg-gray-50 focus:scale-110 active:scale-105"
          href={"/Abdelrahiim.pdf"}
          download
        >
          DownLoad CV{" "}
          <HiDownload className="opacity-60 transition group-hover:translate-x-1" />
        </a>
        <a
          href="https://www.linkedin.com/in/abdelrhiim-abdelmoneim-23803716a/"
          className="flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-slate-900  outline-none transition hover:scale-[1.15]  hover:bg-gray-50 focus:scale-[1.15] active:scale-105"
          target="_blank"
        >
          <BsLinkedin className="" />
        </a>
        <a
          href="https://github.com/Abdelrahiim"
          className="flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-slate-900  outline-none transition hover:scale-[1.15]  hover:bg-gray-50 focus:scale-[1.15] active:scale-105"
          target="_blank"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
