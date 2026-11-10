const skillGroups = [
  {
    title: "Front-End",
    skills: [
      "React.js", "Redux", "React Router", "JavaScript", "HTML5",
      "CSS3", "SASS", "Bootstrap 4", "Material UI", "AJAX / Fetch API",
    ],
  },
  {
    title: "Back-End",
    skills: ["Node.js", "Express.js", "REST APIs", "PHP", "Python", "Java"],
  },
  { title: "Databases", skills: ["PostgreSQL", "MongoDB"] },
  {
    title: "Tools & Platforms",
    skills: [
      "Git", "GitHub", "npm", "Stripe", "PayPal",
      "SEO Optimization", "Zoho Books", "Microsoft 365", "Data Reporting",
    ],
  },
  { title: "Languages", skills: ["Arabic (Native)", "English (Fluent)"] },
];

export const Skills = () => (
  <section className="sx" id="skills">
    <div className="container">
      <div className="sx-head">
        <span>Skills</span>
        <span>What I work with</span>
      </div>
      <div className="sx-skgrid">
        {skillGroups.map((g) => (
          <div className="sx-skcard" key={g.title}>
            <h5>{g.title}</h5>
            <div className="sx-tags">
              {g.skills.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
