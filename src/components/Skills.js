import colorSharp from "../assets/img/color-sharp.png";

const skillGroups = [
  {
    title: "Front-End",
    skills: [
      "React.js", "Redux", "React Router", "JavaScript",
      "HTML5", "CSS3", "SASS", "Bootstrap 4",
      "Material UI", "AJAX / Fetch API",
    ],
  },
  {
    title: "Back-End",
    skills: ["Node.js", "Express.js", "REST APIs", "PHP", "Python", "Java"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB","mySQL"],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git", "GitHub", "npm", "Stripe", "PayPal",
      "SEO Optimization", "Zoho Books", "Microsoft 365", "Data Reporting",
    ],
  },
  // {
  //   title: "Languages",
  //   skills: ["Arabic (Native)", "English (Fluent)"],
  // },
];

export const Skills = () => (
  <section className="skill" id="skills">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="skill-bx">
            <h2>Skills</h2>
            <p>The technologies I use to build full-stack web applications.</p>
            <div className="skill-groups">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.title}>
                  <h5>{group.title}</h5>
                  <div className="skill-tags">
                    {group.skills.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <img className="background-image-left" src={colorSharp} alt="" />
  </section>
);

export default Skills;
