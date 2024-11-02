// src/components/Project.tsx
import React from 'react';

interface ProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, imageUrl, projectUrl }) => {
  return (
    <div className="project">
      <img src={imageUrl} alt={`${title} screenshot`} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={projectUrl} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
};

export default Project;

  