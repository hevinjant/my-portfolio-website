import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

function ProjectItem({ name, description, url }) {
  console.log("Item url:", url);
  return (
    <div className="project-item">
      <a href={url} target="_blank">
        <p className="project-title">{name}</p>
        <p className="project-description">{description}</p>
        <p className="github-icon">
          <GitHubIcon />
        </p>
      </a>
    </div>
  );
}

export default ProjectItem;
