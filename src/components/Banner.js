import { Container, Row, Col } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import "animate.css";
import TrackVisibility from "react-on-screen";

const marquee = [
  "Full-stack craft",
  "Responsive systems",
  "Clean interfaces",
  "Reliable back ends",
];

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center hero-grid">
          <Col xs={12} md={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <div className="hero-crumb">
                    Computer Systems Engineer &nbsp;/&nbsp; Open to new projects
                  </div>
                  <h1 className="hero-title">
                    Full-Stack
                    <br />
                    <em>Developer</em>
                    <i>.</i>
                  </h1>
                  <p className="hero-lead">
                    I build fast, responsive web applications with React.js,
                    Express.js and PostgreSQL, from the interface to the
                    database behind it.
                  </p>
                  <div className="hero-actions">
                    <HashLink className="hero-cta hero-cta-fill" to="#projects">
                      Explore my work ↗
                    </HashLink>
                    <HashLink className="hero-cta" to="#connect">
                      Let's connect ↗
                    </HashLink>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={5}>
            <div className="hero-orbwrap">
              <div className="hero-orb" />
              <div className="hero-tag hero-tag-1">&lt;/&gt; React / Node / APIs</div>
              <div className="hero-tag hero-tag-2">
                Interface
                <br />
                as a point
                <br />
                of view.
              </div>
              <div className="hero-tag hero-tag-3">Build / Ship / Refine</div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="hero-marquee">
        <div className="hero-marquee-track">
          {[...marquee, ...marquee, ...marquee].map((m, i) => (
            <span key={i}>{m}</span>
          ))}
        </div>
      </div>
    </section>
  );
};
