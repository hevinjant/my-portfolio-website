import React from "react";
import ProjectItem from "./ProjectItem";
import { myProjects } from "../Data";

function Projects() {
  return (
    <>
      <span className="anchor-projects" id="section-projects"></span>
      <div className="projects" id="section-projects">
        <h1>Projects</h1>
        <div className="project-list">
          {myProjects.map((project, key) => {
            return (
              <ProjectItem
                key={key}
                name={project.name}
                description={project.description}
                url={project.url}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
