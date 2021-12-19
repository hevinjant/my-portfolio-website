import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

function ProjectItem({ name, description, url }) {
  return (
    <div className="project-item">
      <div>
        <p>{name}</p>
        <p>{description}</p>
        <p>
          <GitHubIcon /> {url}
        </p>
      </div>
    </div>
  );
}

export default ProjectItem;
