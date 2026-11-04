import colorSharp from "../assets/img/color-sharp.png";

const skillGroups = [
  {
    title: "Front-End",
    skills: ["React", "JavaScript (ES6+)", "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Back-End",
    skills: ["Node.js", "Express.js", "REST APIs", "PHP", "socket.io"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub"],
  },
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
