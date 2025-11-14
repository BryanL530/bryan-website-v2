import {FaGithub, FaTags} from "react-icons/fa6"
const BASE = import.meta.env.BASE_URL

function Project({data: {name, description, tools, link, img='/default-icon.svg'}}) {
  return (
    <div className="project">
      <div className="project-icon bg-gold" style={{"--mask-url": `url(${BASE+img})`}}/>
      <p className="project-name">{name}</p>
      <p className="project-description">{description}</p>
      <div className="tool-list">
        <FaTags /> <p className="tool-text">{tools.join(", ")}</p>
      </div>
      {link && <a className="github-link bg-gold c-blue" target="_blank" rel="noopener noreferrer" href={link}><FaGithub />{" "}Github</a>}
    </div>
  );
}

export default Project