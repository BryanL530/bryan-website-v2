import { nanoid } from "nanoid";

function Project(props) {
  const toolList = props.data.tools.map(
    (tool) => <p key={nanoid()} className="tool-text">{tool}</p>
  );
  
  
  return (
    <div className="project">
      <img src={props.data.img} alt="" />
      <p className="project-name">{props.data.name}</p>
      <p className="project-description">{props.data.description}</p>
      <div className="tool-list">
        {toolList}
      </div>
    </div>
  );
}

export default Project