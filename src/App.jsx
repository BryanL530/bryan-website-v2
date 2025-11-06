import { useState } from 'react'
import Project from './Project'
import { Helmet } from 'react-helmet'
import './App.css'

const DATA = {
  name: "project name ",
  description: "Project description, it is really long that it is longer than the title",
  tools: ["python", "dijango", "flask"],
  img: "./assets/easy68.png",
}

function App() {
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
          <Project data={DATA}/>
          <Project data={DATA}/>
          <Project data={DATA}/>
          <Project data={DATA}/>
          <Project data={DATA}/>
          <Project data={DATA}/>
          <Project data={DATA}/>
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
