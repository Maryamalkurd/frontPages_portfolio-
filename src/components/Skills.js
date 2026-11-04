import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

const skills = [
  { id: 1, name: "React", short: "Re" },
  { id: 2, name: "JavaScript (ES6+)", short: "JS" },
  { id: 3, name: "HTML + CSS", short: "</>" },
  { id: 4, name: "PostgreSQL / SQL", short: "SQL" },
  { id: 5, name: "Node.js & Express.js", short: "Node" },
  { id: 6, name: "REST APIs", short: "API" },
  { id: 7, name: "Git & GitHub", short: "Git" },
  { id: 8, name: "MongoDB", short: "DB" },
];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

export const Skills = () => (
  <section className="skill" id="skills">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="skill-bx wow zoomIn">
            <h2>Skills</h2>
            <p>Welcome to Skills, the ultimate launchpad and reference hub for modern full-stack developers...</p>
            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
              {skills.map((s) => (
                <div className="item" key={s.id}>
                  <div className="skill-badge">{s.short}</div>
                  <h5>{s.name}</h5>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
    <img className="background-image-left" src={colorSharp} alt="" />
  </section>
);

export default Skills;
