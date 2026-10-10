import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { HashLink } from "react-router-hash-link";
import headerImg from "../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>Hi! I'm Mariam, Full-Stack Developer</h1>
                  <p>
                    I'm a Computer Systems Engineer who builds fast, responsive web
                    applications with React.js, Express.js, and PostgreSQL. I enjoy
                    turning ideas into clean, user-friendly products, from the
                    interface to the database behind it. I'm open to new
                    opportunities and projects.
                  </p>
                  <HashLink to="#connect">
                    <button>
                      Let's Connect <ArrowRightCircle size={25} />
                    </button>
                  </HashLink>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            
          </Col>
        </Row>
      </Container>
    </section>
  );
};
