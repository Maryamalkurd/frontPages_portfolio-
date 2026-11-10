const freelance = {
  role: "Freelance Full-Stack Developer",
  company: "Self-employed · Remote",
  period: "June 2020 – Present",
  points: [
    "Built an end-to-end admin dashboard with React.js, Express.js and PostgreSQL, including authentication, file uploads and role-based access.",
    "Converted client XD designs into pixel-accurate, responsive, SEO-optimized pages.",
    {
      client: "Trackita Pty Ltd",
      place: "Australia",
      text: "contributed to an open-source design system aligned with Storybook's visual identity, working with an engineering team on a project with 2,000+ developers.",
    },
    {
      client: "Aesthetic Essential",
      place: "Georgia",
      text: "developed a responsive React.js website with Home, Products, About and Contact pages, showcasing a catalog of 600+ products.",
    },
  ],
};

const reach = {
  role: "Remote Front-End Developer",
  company: "Reach Online Company",
  period: "Oct 2022 – Jan 2023",
  points: [
    "Developed 5+ landing pages for Google and Meta Ads campaigns from XD and Figma designs, each delivered in 3 days with a 95 Lighthouse performance score.",
    "Built an admin dashboard with 3 charts, authentication, file uploads and role-based access control.",
    "Implemented the front end of 2+ e-commerce websites with product catalogs, shopping carts and a one-step checkout supporting PayPal and Stripe.",
  ],
};

const frystmat = {
  role: "Business Coordinator and Software Engineer",
  company: "Frystmat MENA Foods AB · Remote",
  period: "Oct 2021 – Apr 2024",
  points: [
    "Cut reporting and performance-tracking time by half with custom Zoho Books workflows and a Zoho CRM function with an employee-facing UI that generated reports automatically. Used by a 10-person team across Turkey, Sweden and remote locations.",
    "Kept international clients updated on around 30 cargo shipments each month, helping avoid port charges of $300+ per day for late shipments.",
    "Trained and managed new employees, in person and remotely, through onboarding on company systems and workflows.",
  ],
};

const leftColumn = [freelance, reach];
const rightColumn = [frystmat];

const JobCard = ({ job }) => (
  <div className="sx-item">
    <span className="sx-dot" />
    <div className="sx-ecard">
      <span className="sx-per">{job.period}</span>
      <h4>{job.role}</h4>
      <h6>{job.company}</h6>
      <ul>
        {job.points.map((pt, i) =>
          typeof pt === "string" ? (
            <li key={i}>{pt}</li>
          ) : (
            <li key={i}>
              <span className="sx-co">{pt.client}</span> ({pt.place}): {pt.text}
            </li>
          )
        )}
      </ul>
    </div>
  </div>
);

export const Experience = () => (
  <section className="sx" id="experience">
    <div className="container">
      <div className="sx-head">
        <span>Experience</span>
        <span>Work and education</span>
      </div>
      <div className="sx-tl">
        <div className="sx-col">
          {leftColumn.map((job) => (
            <JobCard key={job.role} job={job} />
          ))}
        </div>
        <div className="sx-col sx-col-right">
          {rightColumn.map((job) => (
            <JobCard key={job.role} job={job} />
          ))}
          <div className="sx-item">
            <span className="sx-dot" />
            <div className="sx-ecard sx-edu">
              <div className="sx-year">2024</div>
              <div>
                <h4>B.Sc. in Computer Systems Engineering</h4>
                <h6>Al-Azhar University – Gaza</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
