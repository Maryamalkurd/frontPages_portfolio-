import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCard = ({ id, title, description, imgUrl }) => (
  <Col xs={12} sm={6} md={4} className="mb-4">
    <Link to={`/projects/${id}`} className="proj-link">
      <div className="proj-card">
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-hover">
            <span>View details →</span>
          </div>
        </div>
        <div className="proj-info">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  </Col>
);
