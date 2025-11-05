import { useState } from 'react'
import Project from './Project'
import { Helmet } from 'react-helmet'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
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
