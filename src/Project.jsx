import {FaGithub} from "react-icons/fa"

function Project({data: {name, description, tools, link, img}}) {
  const toolList = tools.map(
    (tool) => <p key={name+tool} className="tool-text">{tool}</p>
  );
  
  return (
    <div className="project">
      <img src={img} alt="" />
      <p className="project-name">{name}</p>
      <p className="project-description">{description}</p>
      <div className="tool-list">
        {toolList}
      </div>
      {link && <a className="github-link" href={link}><FaGithub />{" "}Github</a>}
    </div>
  );
}

export default Project