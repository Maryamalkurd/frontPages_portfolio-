import "animate.css";
import TrackVisibility from "react-on-screen";

const experiences = [
  {
    id: 1,
    role: "Freelance Full-Stack Developer",
    company: "Self-employed · Remote",
    period: "June 2020 – Present",
    points: [
      "Built an end-to-end admin dashboard with React.js, Express.js and PostgreSQL, including authentication, file uploads and role-based access.",
      "Converted client XD designs into pixel-accurate, responsive, SEO-optimized pages.",
      "Trackita Pty Ltd (Australia): contributed to an open-source design system aligned with Storybook's visual identity, working with an engineering team on a project with 2,000+ developers.",
      "Aesthetic Essential (Georgia): developed a responsive React.js website with Home, Products, About and Contact pages, showcasing a catalog of 600+ products.",
    ],
    tech: ["React.js", "Express.js", "PostgreSQL"],
  },
  {
    id: 2,
    role: "Business Coordinator and Software Engineer",
    company: "Frystmat MENA Foods AB · Remote",
    period: "Oct 2021 – Apr 2024",
    points: [
      "Cut reporting and performance-tracking time by half with custom Zoho Books workflows and a Zoho CRM function with an employee-facing UI that generated reports automatically. Used by a 10-person team across Turkey, Sweden and remote locations.",
      "Kept international clients updated on around 30 cargo shipments each month, helping avoid port charges of $300+ per day for late shipments.",
      "Trained and managed new employees, in person and remotely, through onboarding on company systems and workflows.",
    ],
    tech: ["Zoho Books", "Zoho CRM", "Reporting"],
  },
  {
    id: 3,
    role: "Remote Front-End Developer",
    company: "Reach Online Company",
    period: "Oct 2022 – Jan 2023",
    points: [
      "Developed 5+ landing pages for Google and Meta Ads campaigns from XD and Figma designs, each delivered in 3 days with a 95 Lighthouse performance score.",
      "Built an admin dashboard with 3 charts, authentication, file uploads and role-based access control.",
      "Implemented the front end of 2+ e-commerce websites with product catalogs, shopping carts and a one-step checkout supporting PayPal and Stripe.",
    ],
    tech: ["React.js", "HTML", "CSS", "Stripe", "PayPal"],
  },
];

export const Experience = () => (
  <section className="experience" id="experience">
    <div className="container">
      <TrackVisibility>
        {({ isVisible }) => (
          <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
            <h2>Experience</h2>
            <p className="exp-sub">
              Freelance and remote roles across web development and business operations.
            </p>
            <div className="exp-timeline">
              {experiences.map((e) => (
                <div className="exp-item" key={e.id}>
                  <span className="exp-dot" />
                  <div className="exp-card">
                    <span className="exp-period">{e.period}</span>
                    <h4>{e.role}</h4>
                    <h6>{e.company}</h6>
                    <ul>
                      {e.points.map((pt, i) => (
                        <li key={i}>{pt}</li>
                      ))}
                    </ul>
                    <div className="exp-tech">
                      {e.tech.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </TrackVisibility>
    </div>
  </section>
);

export default Experience;
