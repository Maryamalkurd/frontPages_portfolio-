import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

const tabs = [
  { key: "first", label: "Tab 1" },
  { key: "second", label: "Tab 2" },
  { key: "third", label: "Tab 3" },
];

const projects = [
  {
    id: 1,
    title: "Professional lanading page",
    description: "HTML + CSS + Bootstrap + javaScript + animation libraries",
    imgUrl: projImg1,
    projectUrl: "https://maryamalkurd.github.io/Pro.-Landing-Page/",
    category: "first",
  },
  {
    id: 2,
    title: "Portfolio Site",
    description: "Full-stack development React js + Express js + PostgreSQL",
    imgUrl: projImg2,
    projectUrl: "https://github.com/Maryamalkurd/Personal-Portfolio",
    category: "first",
  },
  {
    id: 3,
    title: "Front-end dashboard",
    description: "HTML + CSS + Bootstrap + javaScript",
    imgUrl: projImg3,
    projectUrl: "https://maryamalkurd.github.io/Dashboard/",
    category: "second",
  },
  {
    id: 4,
    title: "Front-End dashboard",
    description: "HTML+CSS+JS+Bootstrap",
    imgUrl: projImg4,
    projectUrl: "https://maryamalkurd.github.io/Control-Panel/",
    category: "first",
  },
  {
    id: 4,
    title: "CRM system",
    description: "full-stack CRM website php + mySQL",
    // imgUrl: projImg4,
    projectUrl: "https://github.com/Maryamalkurd/MEM_CRM",
    category: "third",
  },
    {
    id: 5,
    title: "Ecommerce Website",
    description: "React and Node website to build a fully-functional e-commerce website exactly like amazon. Open your code editor and follow me for the next hours to build an e-commerce website using MERN stack.",
    // imgUrl: projImg1,
    projectUrl: "https://github.com/Maryamalkurd/Ecommerce-website-with-nodejs",
    category: "third",
  },
];

export const Projects = () => {
  const byCategory = (cat) => projects.filter((p) => p.category === cat);

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
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
                      className={isVisible ? "animate__animated animate__slideInUp" : ""}
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