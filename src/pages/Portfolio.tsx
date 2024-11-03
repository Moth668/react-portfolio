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
    <section className="container my-5 pb-5">
      <h2 className="text-center mb-5">My Projects</h2>
      <div className="row">
        <div className="col-md-4">
          <Project
            title="Workforce-Wiz"
            description="This was an assignment during bootcamp to create an employee database with a terminal interface."
            imageUrl="/workforce-wiz-screenshot.png"
            projectUrl="https://github.com/Moth668/workforce-wiz"
          />
        </div>
        <div className="col-md-4">
          <Project
            title="Towmato"
            description="This was an assignment during bootcamp to create a terminal user interface."
            imageUrl="/towmato_screenshot.png"
            projectUrl="https://github.com/Moth668/towmato"
          />
        </div>
        <div className="col-md-4">
          <Project
            title="Markdown-Master"
            description="This was an assignment during bootcamp to create a README.md file generator."
            imageUrl="/markdown_master_screenshot.png"
            projectUrl="https://github.com/Moth668/markdown-master"
          />
        </div>
        <div className="col-md-4">
          <Project
            title="Prework Study Guide"
            description="This was a prerequisite to the bootcamp. My first ever deployed project."
            imageUrl="/preworkstudyguide.png"
            projectUrl="https://github.com/Moth668/prework-study-guide"
          />
        </div>
        <div className="col-md-4">
          <Project
            title="Color My World"
            description="This color generator was the first group project that I participated in during bootcamp."
            imageUrl="/color_my_world_screenshot.png"
            projectUrl="https://github.com/mmcgarry13/Color-My-World"
          />
        </div>
        <div className="col-md-4">
          <Project
            title="Distraction"
            description="I created his time management game to maintain productivity and focus."
            imageUrl="/distraction_screenshot.png"
            projectUrl="https://github.com/Moth668/distraction"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
