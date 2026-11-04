import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { tabs, projects } from "../data/projects";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const byCategory = (cat) => projects.filter((p) => p.category === cat);

  return (
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
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      {tabs.map((t) => (
                        <Nav.Item key={t.key}>
                          <Nav.Link eventKey={t.key}>{t.label}</Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? "" : ""}
                    >
                      {tabs.map((t) => (
                        <Tab.Pane eventKey={t.key} key={t.key}>
                          <Row>
                            {byCategory(t.key).length === 0 && (
                              <p style={{ textAlign: "center", color: "#B8B8B8" }}>
                                No projects in this category yet.
                              </p>
                            )}
                            {byCategory(t.key).map((project) => (
                              <ProjectCard key={project.id} {...project} />
                            ))}
                          </Row>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
