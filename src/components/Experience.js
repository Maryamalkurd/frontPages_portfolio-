// A point is either a plain string or { client, place?, text } (the client name gets highlighted).
const freelance = {
  role: "Freelance Full-Stack Developer",
  company: "Self-employed · Remote",
  period: "June 2020 – Present",
  points: [
    "Delivered full-stack and front-end freelance work, building an end-to-end admin dashboard with React.js, Express.js and PostgreSQL, including auth, file uploads and role-based access, and converting client XD designs into pixel-accurate, responsive, SEO-optimized pages.",
    {
      client: "Jade Rune Publishing",
      text: "engineered and deployed three responsive, single-page websites, optimizing front-end assets to reduce page load time by 40% and contributing to a 25% increase in client inquiries, supporting business growth to 2,000+ transactions per month.",
    },
    {
      client: "Aesthetic Essential",
      place: "Republic of Georgia",
      text: "developed a responsive React.js website for a beauty and cosmetics business, building the Home, Products, About and Contact pages to showcase a catalog of 600+ products, as the business reached 10,000 sales per month.",
    },
    {
      client: "Trackita Pty Ltd",
      place: "Australia",
      text: "contributed to an open-source design system aligned with Storybook, collaborating with a community of 2,000+ developers to build and scale reusable React components for a product reaching 97.88M+ monthly installs.",
    },
  ],
};

const reach = {
  role: "Remote Front-End Developer",
  company: "Reach Online Company",
  period: "Oct 2022 – Jan 2023",
  points: [
    "Developed 3+ landing pages for Google and Meta Ads campaigns, translating XD and Figma designs into responsive React.js interfaces using HTML and CSS, with cross-browser compatibility and web accessibility best practices aligned with WCAG guidelines.",
    "Built a scalable admin dashboard with role-based access control for one Super Admin and unlimited Users, featuring authentication, file uploads and 3 analytics charts.",
    "Implemented the front end of 2+ e-commerce websites with product catalogs, shopping carts and one-step checkout with PayPal and Stripe, supporting websites generating over $50K in revenue monthly.",
  ],
};

const frystmat = {
  role: "Business Coordinator and Software Engineer",
  company: "Frystmat MENA Foods AB · Remote",
  period: "Oct 2021 – Apr 2024",
  points: [
    "Reduced the time and effort required for reporting and performance tracking by half with custom Zoho Books workflows and a Zoho CRM function with an employee-facing UI that automatically generated reports from entered data. Enabled the CEO to monitor and evaluate employee performance, with the solution used by a 10-person team across Turkey, Sweden and remote locations.",
    "Kept international clients updated on around 30 cargo shipments each month to avoid port charges of $300+ per day for each late shipment.",
    "Trained and managed new employees, in person and remotely, by leading onboarding on company systems and workflows.",
  ],
};

const leftColumn = [frystmat, reach];
const rightColumn = [freelance];

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
              <span className="sx-co">{pt.client}</span>
              {pt.place ? ` (${pt.place})` : ""}: {pt.text}
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
