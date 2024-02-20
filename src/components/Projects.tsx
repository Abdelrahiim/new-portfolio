import React, { Fragment } from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "~/lib/data";
import Project from "./Project";

const Projects = () => {
  return (
    <section id="projects" className="scroll-m-28 mb-28">
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
