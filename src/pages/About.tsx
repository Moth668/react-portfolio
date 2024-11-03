// function Message() {
//     return <h3>Hello World, I'm Tim. A husband, father of two, I enjoy fishing, hiking, DIY projects, playing Fortnite with my family, OSRS, restoring a 1991 Nissan 300zx. I'm an optimistic jack of all trades. </h3>;
// }

// export default Message;

// src/pages/About.tsx
import React from "react";

const About: React.FC = () => {
  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src="path/to/your-profile-image.jpg"
            alt="profile picture of Tim Rice"
            className="img-fluid rounded-circle mb-4"
          />
        </div>
        {/* <div className="p-5 bg-light rounded-3">
          <h2>Welcome to My Portfolio</h2>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
        </div> */}

        <div className="col-md-6">
          <h2 className="mb-4">About Me</h2>
          <p className="lead">
            Hello! I'm Tim Rice, a passionate software developer with a love for
            creating interactive and efficient web applications. I specialize in
            front-end and full-stack development, and I am always eager to learn
            and implement the latest technologies.
          </p>
          <p>
            Over the years, I've worked on various projects that have helped me
            hone my skills in JavaScript, React, TypeScript, and more. I enjoy
            problem-solving and bringing ideas to life through clean, efficient,
            and maintainable code.
          </p>
          <p>
            When I am not coding, you can find me exploring new technologies,
            contributing to open source, or enjoying outdoor activities.
          </p>
        </div>
        {/* <a
          href="path/to/your-resume.pdf"
          className="btn btn-primary mt-3"
          download
        >
          Download My Resume
        </a> */}
      </div>
    </section>
  );
};

export default About;
