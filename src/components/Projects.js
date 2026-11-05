import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { projects } from "./data/projects";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => (
  <section className="project" id="projects">
    <Container>
      <Row>
        <Col xs={12}>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className="animate__animated animate__fadeIn">
                <h2>Projects</h2>
                <p>
                  A selection of projects I've built across the front end, back end, and everything in between.
                </p>
                <Row>
                  {projects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                  ))}
                </Row>
              </div>
            )}
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
    <img className="background-image-right" src={colorSharp2} alt="" />
  </section>
);
