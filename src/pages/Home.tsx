function Home() {
  // JSX: JavaScript XML
  return (
    <div
      className="container mt-5 p-4 rounded"
      style={{
        backgroundColor: "var(--light-gray)",
        color: "var(--deep-navy)",
      }}
    >
      <h1 className="display-4 text-center mb-4 pb-5">Welcome to My Portfolio</h1>
      <p className="lead text-center">
        Hi, I'm Tim Rice—a passionate software developer driven by a love for
        crafting dynamic and efficient web applications. Specializing in
        front-end and full-stack development, I thrive on the challenge of
        learning and integrating the latest technologies to deliver innovative
        solutions.
      </p>
      <p className="text-center">
        With a strong foundation in JavaScript, React, and TypeScript, I have
        developed and contributed to various projects that emphasize clean,
        maintainable, and high-performing code. Problem-solving is at the core
        of what I do, and I enjoy transforming complex ideas into user-friendly
        digital experiences.
      </p>
      <p className="text-center">
        I'm currently enrolled in the Washington University programming
        bootcamp, where I'm further enhancing my skills in full-stack web
        development, learning industry best practices, and collaborating with
        fellow aspiring developers. This intensive program has been instrumental
        in expanding my knowledge and preparing me for the ever-evolving world
        of technology.
      </p>
      <p className="text-center">
        Whether I'm collaborating with a team or diving into a solo project, I
        bring a commitment to excellence, a keen eye for detail, and an
        eagerness to continuously grow and adapt in this ever-evolving field.
      </p>
    </div>
  );
}

export default Home;
