import React from "react";
const Home: React.FC = () => {
  return (
    <>
      <div className="main-content container mt-5 p-5 pb-5 rounded min-vh-100 d-flex flex-column justify-content-between">
        <h1 className="display-1 text-center mb-4">Timothy Rice</h1>
        <p className="lead text-center">
          Hi, I am Tim Rice — a software developer driven by a love for crafting
          dynamic and efficient applications. Focused on MERN full-stack
          development, I thrive on the challenge of learning and integrating the
          latest technologies to deliver innovative solutions.
        </p>
        <p className="lead text-center">
          With a strong foundation in React, and TypeScript, I have developed
          and contributed to various projects that emphasize clean,
          maintainable, and high-performing code. Problem-solving is at the core
          of what I do, and I enjoy transforming complex ideas into
          user-friendly digital experiences.
        </p>
        <p className="lead text-center">
          I have graduated the Washington University in St. Louis EdX
          programming bootcamp where I enhanced my skills in full-stack web
          development, learning industry best practices, and collaborating with
          fellow aspiring developers. This intensive program was instrumental in
          expanding my knowledge and preparing me for the world of technology.
        </p>
        <p className="lead text-center">
          I am currently enrolled in WGU pursuing Bachelor of Science, Software
          Engineering.
        </p>
        <p className="lead text-center">
          Whether I am collaborating with a team or diving into a solo project,
          I bring a commitment to excellence, a keen eye for detail. I posess an
          eagerness to continuously grow, learn, and adapt in this ever-evolving
          field.
        </p>
        <p className="lead text-center">
          I am excited to continue my journey in software development and am
          looking forward to the opportunities that lie ahead. Please feel free
          to reach out to me if you would like to connect or collaborate.
        </p>
        <section className="hardware text-center">
          <h2>Hardware</h2>
          <ul>
            <li>
              <h3>PC</h3>
              <p className="text" id="machine1">
                I sourced all individual parts, and built my machine at home.
                Here's some specs:
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
            </li>
            <li>
              <h3>MacBook</h3>
              <p className="text" id="machine2">
                <ul>
                  <li>14" MacBook Pro (November 2024)</li>
                  <li>Chip: Apple M4</li>
                  <li>macOS Sequoia Version 15.7.4</li>
                  <li>Built-in Liquid Retina XDR Display</li>
                  <li>Memory: 24GB</li>
                  <li>Storage: 1TB</li>
                </ul>
              </p>
            </li>
          </ul>
        </section>
      </div>

      <section className="section text-center">
        <h2>Software</h2>
        <p>
          My list of skills includes, but is not limited to, these software
          tools:
        </p>
        <div className="container">
          <div className="card-grid" role="list">
            <a
              className="service-card"
              href="services.html#vscode"
              role="listitem"
            >
              <img src="images/vscode.jpg" alt="vscode" loading="lazy" />
              <span>Visual Studio Code</span>
            </a>
            <a
              className="service-card"
              href="services.html#github"
              role="listitem"
            >
              <img src="images/github.jpg" alt="github" loading="lazy" />
              <span>GitHub</span>
            </a>
            <a
              className="service-card"
              href="services.html#gitlab"
              role="listitem"
            >
              <img src="images/gitlab.jpg" alt="gitlab" loading="lazy" />
              <span>GitLab</span>
            </a>
            <a
              className="service-card"
              href="services.html#bathrooms"
              role="listitem"
            >
              <img src="images/react.jpg" alt="react" loading="lazy" />
              <span>React</span>
            </a>
            <a
              className="service-card"
              href="services.html#typescript"
              role="listitem"
            >
              <img
                src="images/typescript.jpeg"
                alt="typescript"
                loading="lazy"
              />
              <span>Typescript</span>
            </a>
            <a
              className="service-card"
              href="services.html#nodejs"
              role="listitem"
            >
              <img
                src="images/nodejs.jpeg"
                alt="Bathroom remodel"
                loading="lazy"
              />
              <span>Node.js</span>
            </a>
            <a
              className="service-card"
              href="services.html#expressjs"
              role="listitem"
            >
              <img src="images/expressjs.jpeg" alt="expressjs" loading="lazy" />
              <span>Express.js</span>
            </a>
            <a
              className="service-card"
              href="services.html#reactdevtools"
              role="listitem"
            >
              <img
                src="images/reactdevtools.jpeg"
                alt="Bathroom remodel"
                loading="lazy"
              />
              <span>React Developer Tools</span>
            </a>
            <a
              className="service-card"
              href="services.html#mongodb"
              role="listitem"
            >
              <img src="images/mongodb.jpeg" alt="mongodb" loading="lazy" />
              <span>MongoDB</span>
            </a>
            <a
              className="service-card"
              href="services.html#chakraui"
              role="listitem"
            >
              <img src="images/chakraui.jpeg" alt="chakraui" loading="lazy" />
              <span>ChakraUI</span>
            </a>
            <a
              className="service-card"
              href="services.html#bootstrap"
              role="listitem"
            >
              <img src="images/bootstrap.jpg" alt="bootstrap" loading="lazy" />
              <span>Bootstrap</span>
            </a>
            <a
              className="service-card"
              href="services.html#mongoose"
              role="listitem"
            >
              <img src="images/mongoose.jpg" alt="mongoose" loading="lazy" />
              <span>Mongoose</span>
            </a>
            <a
              className="service-card"
              href="services.html#graphql"
              role="listitem"
            >
              <img src="images/graphql.jpg" alt="graphql" loading="lazy" />
              <span>GraphQL</span>
            </a>
            <a
              className="service-card"
              href="services.html#insomnia"
              role="listitem"
            >
              <img src="images/insomnia.jpg" alt="insomnia" loading="lazy" />
              <span>Insomnia</span>
            </a>
            <a
              className="service-card"
              href="services.html#HTML5"
              role="listitem"
            >
              <img src="images/HTML5.jpg" alt="HTML5" loading="lazy" />
              <span>HTML5</span>
            </a>
            <a
              className="service-card"
              href="services.html#gitbash"
              role="listitem"
            >
              <img src="images/gitbash.jpg" alt="gitbash" loading="lazy" />
              <span>GitBash</span>
            </a>
            <a
              className="service-card"
              href="services.html#CSS3"
              role="listitem"
            >
              <img src="images/CSS3.jpg" alt="CSS3" loading="lazy" />
              <span>CSS3</span>
            </a>
            <a
              className="service-card"
              href="services.html#javascript"
              role="listitem"
            >
              <img
                src="images/javascript.jpg"
                alt="javascript"
                loading="lazy"
              />
              <span>JavaScript</span>
            </a>
            <a
              className="service-card"
              href="services.html#python"
              role="listitem"
            >
              <img src="images/python.jpg" alt="python" loading="lazy" />
              <span>Python</span>
            </a>
            <a
              className="service-card"
              href="services.html#restfulapi"
              role="listitem"
            >
              <img
                src="images/restfulapi.jpg"
                alt="restfulapi"
                loading="lazy"
              />
              <span>RESTful API</span>
            </a>
            <a
              className="service-card"
              href="services.html#sequelize"
              role="listitem"
            >
              <img src="images/sequelize.jpg" alt="sequelize" loading="lazy" />
              <span>Sequelize</span>
            </a>
            <a
              className="service-card"
              href="services.html#openai"
              role="listitem"
            >
              <img src="images/openai.jpg" alt="openai" loading="lazy" />
              <span>OpenAI</span>
            </a>
            <a
              className="service-card"
              href="services.html#postgresql"
              role="listitem"
            >
              <img
                src="images/postgresql.jpg"
                alt="postgresql"
                loading="lazy"
              />
              <span>PostgreSQL</span>
            </a>
            <a
              className="service-card"
              href="services.html#netlify"
              role="listitem"
            >
              <img src="images/netlify.jpg" alt="netlify" loading="lazy" />
              <span>Netlify</span>
            </a>
            <a
              className="service-card"
              href="services.html#render"
              role="listitem"
            >
              <img src="images/render.jpg" alt="render" loading="lazy" />
              <span>Render</span>
            </a>
            <a
              className="service-card"
              href="services.html#microsoft"
              role="listitem"
            >
              <img src="images/microsoft.jpg" alt="microsoft" loading="lazy" />
              <span>Microsoft Office Suite</span>
            </a>
            <a
              className="service-card"
              href="services.html#google"
              role="listitem"
            >
              <img src="images/google.jpg" alt="google" loading="lazy" />
              <span>Google Workspace</span>
            </a>
            <a
              className="service-card"
              href="services.html#zoom"
              role="listitem"
            >
              <img src="images/zoom.jpg" alt="zoom" loading="lazy" />
              <span>Zoom</span>
            </a>
            <a
              className="service-card"
              href="services.html#slack"
              role="listitem"
            >
              <img src="images/slack.jpg" alt="slack" loading="lazy" />
              <span>Slack</span>
            </a>
            <a
              className="service-card"
              href="services.html#discord"
              role="listitem"
            >
              <img src="images/discord.jpg" alt="discord" loading="lazy" />
              <span>Discord</span>
            </a>
            <a
              className="service-card"
              href="services.html#godot"
              role="listitem"
            >
              <img src="images/godot.jpg" alt="godot" loading="lazy" />
              <span>Godot</span>
            </a>
            <a
              className="service-card"
              href="services.html#procreate"
              role="listitem"
            >
              <img src="images/procreate.jpg" alt="procreate" loading="lazy" />
              <span>Procreate</span>
            </a>
            <a
              className="service-card"
              href="services.html#procreate"
              role="listitem"
            >
              <img src="images/procreate.jpg" alt="procreate" loading="lazy" />
              <span>Procreate</span>
            </a>
            <a
              className="service-card"
              href="services.html#homebrew"
              role="listitem"
            >
              <img src="images/homebrew.jpg" alt="homebrew" loading="lazy" />
              <span>Homebrew</span>
            </a>
            <a
              className="service-card"
              href="services.html#terminal"
              role="listitem"
            >
              <img src="images/terminal.jpg" alt="terminal" loading="lazy" />
              <span>Terminal</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
