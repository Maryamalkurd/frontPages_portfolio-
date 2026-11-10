import { Link } from "react-router-dom";

export const ProjectCard = ({ id, index, title, description, imgUrl }) => (
  <Link to={`/projects/${id}`} className="sx-pcard">
    <img className="sx-pimg" src={imgUrl} alt={title} />
    <div className="sx-pbody">
      <div className="sx-pmeta">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <b>View ↗</b>
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </Link>
);
