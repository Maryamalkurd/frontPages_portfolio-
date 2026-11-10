import { ProjectCard } from "./ProjectCard";
import { projects } from "./data/projects"; // adjust to "../data/projects" if data/ is inside src/

export const Projects = () => (
  <section className="sx sx-last" id="projects">
    <div className="container">
      <div className="sx-head">
        <span>Projects</span>
        <span>Selected work</span>
      </div>
      <div className="sx-pgrid">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} index={i} {...project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
