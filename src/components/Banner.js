import { Container, Row, Col } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} className="text-center">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Full-Stack Developer</span>
                  <h1>Mariam Alkurd</h1>
                  <h2 className="hero-role">Building fast, reliable web applications</h2>
                  <p>
                    Software Engineer specializing in React, Node.js /
                    Express and PostgreSQL. I design and build responsive,
                    user-friendly products, from the interface to the database
                    behind it. Open to new opportunities and freelance projects.
                  </p>
                  <div className="hero-buttons">
                    <HashLink className="hero-btn hero-btn-fill" to="#projects">
                      View Projects
                    </HashLink>
                    <HashLink className="hero-btn" to="#connect">
                      Let's Connect
                    </HashLink>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
