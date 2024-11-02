// function Message() {
//     // JSX: JavaScript XML
//     const name = 'Tim';
//     if (name)
//     return <h1>Hello {name}</h1>;
//     return <h1>Hello World</h1>;
// }

// export default Message;

// src/pages/Portfolio.tsx
import React from "react";
import Project from "../components/Project";

const Portfolio: React.FC = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-5">My Projects</h2>
      <div className="row">
        <div className="col-md-4">
          <Project
            title="Project One"
            description="This is the first project. It does amazing things."
            imageUrl="path/to/image1.jpg"
            projectUrl="https://link-to-project-one.com"
          />
        </div>
        <div className="col-md-4">
          <Project
            title="Project Two"
            description="This is the second project. It does even more amazing things."
            imageUrl="path/to/image2.jpg"
            projectUrl="https://link-to-project-two.com"
          />
        </div>
        <div className="col-md-4">
          <Project
            title="Project Three"
            description="This is the third project. It's the most amazing of all."
            imageUrl="path/to/image3.jpg"
            projectUrl="https://link-to-project-three.com"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
