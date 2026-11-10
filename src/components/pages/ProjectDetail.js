import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { projects } from "../data/projects";

export const ProjectDetail = () => {
  const { id } = useParams();
  const index = projects.findIndex((p) => String(p.id) === id);
  const project = projects[index];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <section className="pd">
        <div className="container">
          <HashLink to="/#projects" className="pd-back">← Back to projects</HashLink>
          <h1>Project not found</h1>
        </div>
      </section>
    );
  }

  const { title, imgUrl, overview, description, tech, liveUrl, repoUrl, clientName } = project;
  const next = projects[(index + 1) % projects.length];

  return (
    <section className="pd">
      <div className="container">
        <HashLink to="/#projects" className="pd-back">← Back to projects</HashLink>

        <div className="sx-head">
          <span>Project {String(index + 1).padStart(2, "0")}</span>
          <span>{clientName ? `Client: ${clientName}` : "Case study"}</span>
        </div>

        <h1 className="pd-title">{title}</h1>
        <p className="pd-lead">{description}</p>

        <img className="pd-hero" src={imgUrl} alt={title} />

        <div className="pd-grid">
          <div>
            <h5 className="pd-label">About this project</h5>
            <p className="pd-text">{overview || description}</p>
          </div>

          <aside className="pd-side">
            {tech && tech.length > 0 && (
              <div className="pd-block">
                <h5 className="pd-label">Built with</h5>
                <div className="sx-tags">
                  {tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            )}
            <div className="pd-block">
              <h5 className="pd-label">Links</h5>
              <div className="pd-links">
                {liveUrl && (
                  <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="pd-btn pd-btn-fill">
                    Live demo ↗
                  </a>
                )}
                {repoUrl && (
                  <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="pd-btn">
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
          </aside>
        </div>

        <Link to={`/projects/${next.id}`} className="pd-next">
          <span>Next project</span>
          <b>{next.title} →</b>
        </Link>
      </div>
    </section>
  );
};

export default ProjectDetail;
