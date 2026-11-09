import "animate.css";
import TrackVisibility from "react-on-screen";
import { HashLink } from "react-router-hash-link";

const stats = [
  { value: "2020", label: "freelancing since" },
  { value: "95", label: "Lighthouse performance score" },
  { value: "600+", label: "products in one catalog" },
];

export const About = () => (
  <section className="about" id="about">
    <div className="container">
      <TrackVisibility>
        {({ isVisible }) => (
          <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
            <div className="about-head">
              <span>01</span>
              <span>About / the short version</span>
            </div>
            <div className="about-grid">
              <h2 className="about-statement">
                I build products where the <em>interface</em> and the{" "}
                <em>database</em> both feel right.
              </h2>
              <div className="about-text">
                <p>
                  Computer Systems Engineering graduate and full-stack
                  developer, working with international clients and teams
                  since 2020. I move between front-end detail, back-end logic
                  and the operational side of a business, so what I build is
                  useful as well as polished.
                </p>
                <HashLink to="#experience" className="about-link">
                  See the full journey ↗
                </HashLink>
                <div className="about-stats">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <b>{s.value}</b>
                      <small>{s.label}</small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </TrackVisibility>
    </div>
  </section>
);

export default About;
