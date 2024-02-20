"use client";
import React, { Fragment } from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "~/lib/data";
import Project from "./Project";
import { useSectionInView } from "~/lib/hooks";

const Projects = () => {
  const { ref } = useSectionInView("Projects",0.5);
  return (
    <section id="projects" className="mb-28 scroll-m-28" ref={ref}>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Fragment key={index}>
            <Project {...project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
