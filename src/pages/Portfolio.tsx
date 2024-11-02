// function Message() {
//     // JSX: JavaScript XML
//     const name = 'Tim';
//     if (name)
//     return <h1>Hello {name}</h1>;
//     return <h1>Hello World</h1>;
// }

// export default Message;

// src/pages/Portfolio.tsx
import React from 'react';
import Project from '../components/Project';

const Portfolio: React.FC = () => {
  return (
    <section className="portfolio">
      <h2>My Projects</h2>
      <div className="project-list">
        <Project
          title="Project One"
          description="This is the first project. It does amazing things."
          imageUrl="path/to/image1.jpg"
          projectUrl="https://link-to-project-one.com"
        />
        <Project
          title="Project Two"
          description="This is the second project. It does even more amazing things."
          imageUrl="path/to/image2.jpg"
          projectUrl="https://link-to-project-two.com"
        />
        <Project
          title="Project Three"
          description="This is the third project. It's the most amazing of all."
          imageUrl="path/to/image3.jpg"
          projectUrl="https://link-to-project-three.com"
        />
        {/* Add more Project components as needed */}
      </div>
    </section>
  );
};

export default Portfolio;
