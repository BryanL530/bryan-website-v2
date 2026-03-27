import "./App.css";
import Project from "./Project";
import projectJson from "./project.json";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
const BASE = import.meta.env.BASE_URL;

// List for mapping in skills section
const PROGS = ["Python", "C#", "Java", "Javascript", "C++"];
const TOOLS = [
  "React",
  "Unity",
  "Git",
  "Github",
  "Docker",
  "Visual Studio Code",
  "Azure Cosmos DB",
  "Postman",
];
const MISCS = [
  "Restful APIs",
  "Debugging",
  "Data Strucutre & Algorithms",
  "Object-Oriented Programming",
];

function App() {
  // Mapped List for various section
  const projectList = projectJson.map((p) => <Project key={p.name} data={p} />);

  const progList = PROGS.map((lang, index) => <li key={index} className="skill-chip">{lang}</li>);
  const toolList = TOOLS.map((tool, index) => <li key={index} className="skill-chip">{tool}</li>);
  const miscList = MISCS.map((misc, index) => <li key={index} className="skill-chip">{misc}</li>);

  return (
    <>
      {/* Navbar */}
      <nav id="navbar">
        <a href="#home" id="nav-logo">Bryan Lin</a>
        <div id="nav-links">
          <a href="#home">Home</a>
          <a href="#about-me">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* About Section */}
      <div id="home">
        <div
          id="home-bg"
          style={{ "--bg": `url(${BASE + "/home-background.jpg"})` }}
        />
        <div id="home-text">
          <h1>Hi, I am Bryan Lin</h1>
          <h1>I am a Software Engineer</h1>
          <a href="#projects" className="cta-button">View My Work</a>
        </div>
      </div>

      {/*About-me Section */}
      <section id="about-me">
        <h2>About Me</h2>
        <p>
          I am a CS graduate from UW Bothell who got into programming through video games because I wanted to build the games I loved playing. These days I focus on software engineering, and what keeps me hooked is the problem solving and breaking down a challenge to find the right solution.
        </p>
        <p>Currently seeking software engineering roles where I can contribute, grow, and keep solving interesting problems.</p>
        <a href={BASE + "Bryan_Lin_Resume.pdf"} target="_blank" rel="noopener noreferrer" className="cta-button">Download Resume</a>
      </section>

      {/* Proejct Section */}
      <section id="projects">
        <h2>Projects</h2>
        <div id="project-list">{projectList}</div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2>Skills</h2>
        <h3>Programming Languages</h3>
        <ul className="skill-list">{progList}</ul>
        <h3>Tools & Frameworks</h3>
        <ul className="skill-list">{toolList}</ul>
        <h3>Misc</h3>
        <ul className="skill-list">{miscList}</ul>
      </section>

      {/* Footer */}
      <footer id="contact">
        <p>© 2026 Bryan Lin</p>
        <div id="contact-links">
          <a href="https://github.com/BryanL530" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
          <a href="mailto:bryanlin530@gmail.com"><FaEnvelope /> Email</a>
          <a href="https://www.linkedin.com/in/bryanlin530/" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
        </div>
      </footer>
    </>
  );
}

export default App;
