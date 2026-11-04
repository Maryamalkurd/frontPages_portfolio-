import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

export const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => String(p.id) === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <section className="project-detail">
        <Container>
          <Link to="/#projects" className="back-link">← Back to projects</Link>
          <h2>Project not found</h2>
        </Container>
      </section>
    );
  }

  const { title, imgUrl, overview, description, tech, liveUrl, repoUrl, clientName } = project;

  return (
    <section className="project-detail">
      <Container>
        <Link to="/#projects" className="back-link">← Back to projects</Link>
        <h1>{title}</h1>
        {clientName && <p className="detail-client">Client: {clientName}</p>}
        <img className="detail-hero" src={imgUrl} alt={title} />
        <div className="detail-body">
          <h3>About this project</h3>
          <p>{overview || description}</p>

          {tech && tech.length > 0 && (
            <>
              <h3>Built with</h3>
              <div className="detail-tech">
                {tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </>
          )}

          <div className="detail-links">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="detail-btn">
                Live demo ↗
              </a>
            )}
            {repoUrl && (
              <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="detail-btn detail-btn-outline">
                View on GitHub ↗
              </a>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectDetail;

