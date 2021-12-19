import React from "react";

function ProjectItem({ name, description, url }) {
  return (
    <div className="project-item">
      <p>{name}</p>
      <p>{description}</p>
      <p>GitHub: {url}</p>
    </div>
  );
}

export default ProjectItem;
