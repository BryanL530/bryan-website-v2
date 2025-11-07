import { useState } from 'react'
import Project from './Project'
import { Helmet } from 'react-helmet'
import './App.css'
import projectJson from "./project.json"

function App() {
  const projectList = projectJson.map(
    (p) => <Project key={p.name} data={p}/>
  );
  
  return (
    <>
      {/* About Section */}
      <div id='about-me'>
        <div id='about-text'>
          <h1>Hi, I am Bryan</h1>
          <h1>I am a Software Engineer</h1>
        </div>
      </div>

      {/* Proejct Section */}
      <div id='projects' className='section'>
        <h2>Projects</h2>
        <div id='project-list'>
          {projectList}
        </div>
      </div>
      {/* Skills Section */}
      <div id='skills' className='section'>
        <h2>Skills</h2>
      </div>
    </>
  )
}

export default App
