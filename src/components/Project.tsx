// src/components/Project.tsx
import React from "react";

interface ProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  imageUrl,
  projectUrl,
}) => {
  return (
    <div className="card project-card">
      <img src={imageUrl} alt={title} className="card-img-top project-image" />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text flex-grow-1">{description}</p>
        <a
          href={projectUrl}
          className="btn btn-primary btn-block mt-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default Project;
