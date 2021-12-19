import React from "react";
import ProjectItem from "./ProjectItem";
import { myProjects } from "../Data";

function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
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
  );
}

export default Projects;
