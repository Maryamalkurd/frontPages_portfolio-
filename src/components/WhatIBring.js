import "animate.css";
import TrackVisibility from "react-on-screen";
import { HashLink } from "react-router-hash-link";

const services = [
  "Full-stack web development",
  "Frontend development",
  "Responsive website development",
  "Admin dashboards",
  "REST API development + integration",
  "E-commerce development",
  "Maintenance + optimization",
];

export const WhatIBring = () => (
  <section className="bring" id="services">
    <div className="container">
      <TrackVisibility>
        {({ isVisible }) => (
          <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
            <div className="about-head">
              <span>Services</span>
              <span>What I bring</span>
            </div>
            <ul className="bring-list">
              {services.map((title, i) => (
                <li key={title}>
                  <HashLink to="#connect" className="bring-row">
                    <span className="bring-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="bring-title">{title}</span>
                    <span className="bring-arrow">↗</span>
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </TrackVisibility>
    </div>
  </section>
);

export default WhatIBring;
