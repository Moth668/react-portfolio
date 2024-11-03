// function Message() {
//     return <h3>Hello World, I'm Tim. A husband, father of two, I enjoy fishing, hiking, DIY projects, playing Fortnite with my family, OSRS, restoring a 1991 Nissan 300zx. I'm an optimistic jack of all trades. </h3>;
// }

// export default Message;

// src/pages/About.tsx
import React from "react";

const About: React.FC = () => {
  return (
    <section className="container my-5 pb-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src="/picture.jpg"
            alt="profile picture of Tim Rice"
            className="img-fluid rounded-circle mb-4"
          />
        </div>

        <div className="col-md-6">
          <h2 className="mb-4">About Me</h2>
          <div className="lead">
            <p>
              I'm a dedicated husband and proud father, driven by a passion for
              coding and a love for life’s adventures. When I am not immersed in
              writing code, you can find me fishing, hiking, tackling DIY
              projects, or engaging in epic Fortnite battles with my family. I am
              also a long-time OSRS enthusiast and enjoy
              restoring our 1991 Nissan 300ZX, embracing the challenges and
              rewards of every turn. With an optimistic spirit and a versatile
              skill set, I like to think of myself as a true jack of all trades.
            </p>{" "}
            <p>
              My journey into software development has been fueled by a
              curiosity for problem-solving and the joy of bringing ideas to
              life through clean, efficient, and maintainable code. I've honed
              my skills through diverse projects, specializing in JavaScript,
              React, TypeScript, and more, and I thrive on the opportunity to
              learn and grow with every new challenge.
            </p>{" "}
            <p>
              Before diving into tech, I built a rich career in management,
              customer service, and sales, spending much of my professional life
              in the world of automotive repair. These experiences have not only
              shaped my work ethic but also instilled in me a deep appreciation
              for teamwork, communication, and a commitment to excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
