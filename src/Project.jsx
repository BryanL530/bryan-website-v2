import {FaGithub} from "react-icons/fa"
const BASE = import.meta.env.BASE_URL

function Project({data: {name, description, tools, link, img='/default-icon.svg'}}) {
  const toolList = tools.map(
    (tool) => <p key={name+tool} className="tool-text">{tool}</p>
  );
  return (
    <div className="project">
      <img className="project-icon" src={BASE + img} alt="Test" />
      <p className="project-name">{name}</p>
      <p className="project-description">{description}</p>
      <div className="tool-list">
        {toolList}
      </div>
      {link && <a className="github-link" target="_blank" rel="noopener noreferrer" href={link}><FaGithub />{" "}Github</a>}
    </div>
  );
}

export default Project