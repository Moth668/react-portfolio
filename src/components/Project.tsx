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
    <div className="card mb-4" style={{ width: '18rem' }}>
      <img src={imageUrl} className="card-img-top" alt={`${title} screenshot`} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={projectUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
  );
};

export default Project;


  