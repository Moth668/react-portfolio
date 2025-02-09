import React from "react";
const Home: React.FC = () => {
  return (
    <div
      className="main-content container mt-5 p-5 pb-5 rounded min-vh-100 d-flex flex-column justify-content-between"
      // style={{
      //   backgroundColor: "var(--light-gray)",
      //   color: "var(--deep-navy)",
      // }}
    >
      <h1 className="display-1 text-center mb-4">Timothy Rice</h1>
      <p className="lead text-center">
        Hi, I am Tim Rice — a software developer driven by a love for crafting
        dynamic and efficient applications. Focused on MERN full-stack development, I
        thrive on the challenge of learning and integrating the latest
        technologies to deliver innovative solutions.
      </p>
      <p className="lead text-center">
        With a strong foundation in React, and TypeScript, I have
        developed and contributed to various projects that emphasize clean,
        maintainable, and high-performing code. Problem-solving is at the core
        of what I do, and I enjoy transforming complex ideas into user-friendly
        digital experiences.
      </p>
      <p className="lead text-center">
        I have graduated the Washington University in St. Louis EdX
        programming bootcamp where I enhanced my skills in full-stack web
        development, learning industry best practices, and collaborating with
        fellow aspiring developers. This intensive program was instrumental
        in expanding my knowledge and preparing me for the world of technology.
      </p>
      <p className="lead text-center">
        Whether I am collaborating with a team or diving into a solo project, I
        bring a commitment to excellence, a keen eye for detail. I posess an
        eagerness to continuously grow, learn, and adapt in this ever-evolving
        field.
      </p>
      <p className="lead text-center">
        I am excited to continue my journey in software development and am
        looking forward to the opportunities that lie ahead. Please feel free to
        reach out to me if you would like to connect or collaborate.
      </p>
      <p className="text" id="machine">
        I sourced all individual parts, and built my machine myself at home. Here's some specs:
        <ul>
          <li>Motherboard: MSI Tomahawk B550</li>
          <li>CPU: AMD Ryzen 5 3600 6-Core Processor 3.60 GHz</li>
          <li>RAM: 32 GB (Corsair Vengeance RGB PRO)</li>
          <li>Windows 10 Home</li>
          <li>1TB SSD</li>
          <li>GPU: NVIDIA GeForce RTX2080</li>
          <li>Keyboard: Corsair K60 RGB PRO SE</li>
          <li>Mouse: Corsair Harpoon RGB</li>
        </ul>
      </p>
      My list of skills includes, but is not limited to, these software tools:
      <p className="text" id="skills">
        <ul>
          <li>Visual Studio Code</li>
          <li>GitHub</li>
          <li>React</li>
          <li>TypeScript</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>React Developer Tools</li>
          <li>MongoDB</li>
          <li>Chakra UI</li>
          <li>Bootstrap</li>
          <li>Mongoose</li>
          <li>GraphQL</li>
          <li>Insomnia</li>
          <li>HTML5</li>
          <li>GitBash</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>RESTful APIs</li>
          <li>OpenAI</li>
          <li>Sequelize</li>
          <li>PostgreSQL</li>
          <li>Netlify</li>
          <li>Render</li>
          <li>Microsoft Office Suite</li>
          <li>Google Workspace</li>
          <li>Zoom</li>
          <li>Slack</li>
          <li>Discord</li>
          <li>Godot</li>
          <li>Render</li>
          <li>ProCreate</li>
        </ul>
      </p>
    </div>
  );
};

export default Home;
