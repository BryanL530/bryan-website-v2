import './App.css'
import Project from './Project'
import projectJson from "./project.json"
const BASE = import.meta.env.BASE_URL

// List for mapping in skills section
const PROGS = ["Python", "C#", "Java", "Javascript", "C++"];
const TOOLS = ["React", "Unity", "Git", "Github", "Docker", "Visual Studio Code", "Azure Cosmos DB", "Postman"]
const MISCS = ["Restful APIs", "Debugging", "Data Strucutre & Algorithms", "Object-Oriented Programming"]

function App() {
  // Mapped List for various section
  const projectList = projectJson.map((p) => <Project key={p.name} data={p}/>);

  const progList = PROGS.map((lang, index) => <li key={index}>{lang}</li>);
  const toolList = TOOLS.map((tool, index) => <li key={index}>{tool}</li>);
  const miscList = MISCS.map((misc, index) => <li key={index}>{misc}</li>);
  
  return (
    <>
      {/* About Section */}
      <div id='home'>
        <div id='home-bg' style={{"--bg": `url(${BASE+"/home-background.jpg"})`}}/>
        <div id='home-text'>
          <h1>Hi, I am Bryan Lin</h1>
          <h1>I am a Software Engineer</h1>
        </div>
      </div>

      {/*About-me Section */}
      <section id='about-me'>
        <h2>About Me</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, eius? Nostrum illo assumenda magnam incidunt, impedit optio neque sed delectus? Esse tempore iusto quos suscipit? Reiciendis illum unde recusandae minima!</p>
      </section>

      {/* Proejct Section */}
      <section id='projects'>
        <h2>Projects</h2>
        <div id='project-list'>
          {projectList}
        </div>
      </section>

      {/* Skills Section */}
      <section id='skills'>
        <h2>Skills</h2>
        <h3>Programming Languages</h3>
        <ul>
          {progList}
        </ul>
        <h3>Tool & Frameworks</h3>
        <ul>
          {toolList}
        </ul>
        <h3>Misc</h3>
        <ul>
          {miscList}
        </ul>
      </section>
      
      {/*Some footer probably*/}
      <section></section>
    </>
  )
}

export default App
