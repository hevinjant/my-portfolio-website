import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

function ProjectItem({ name, description, url }) {
  return (
    <div className="project-item">
      <a href={url} target="_blank">
        <p className="project-title">{name}</p>
        <p className="project-description">{description}</p>
        <p>
          <GitHubIcon />
        </p>
      </a>
    </div>
  );
}

export default ProjectItem;
