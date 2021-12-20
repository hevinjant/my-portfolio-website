import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

function ProjectItem({ name, description, url }) {
  return (
    <div className="project-item">
      <a href="#">
        <p>{name}</p>
        <p>{description}</p>
        <p>
          <GitHubIcon /> {url}
        </p>
      </a>
    </div>
  );
}

export default ProjectItem;
