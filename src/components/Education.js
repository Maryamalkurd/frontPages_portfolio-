import "animate.css";
import TrackVisibility from "react-on-screen";

export const Education = () => (
  <section className="education" id="education">
    <div className="container">
      <TrackVisibility>
        {({ isVisible }) => (
          <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
            <h2>Education</h2>
            <div className="edu-card">
              <div className="edu-year">2024</div>
              <div className="edu-info">
                <h4>B.Sc. in Computer Systems Engineering</h4>
                <h6>Al-Azhar University – Gaza</h6>
                <p>Faculty of Engineering and Information Technology</p>
              </div>
            </div>
          </div>
        )}
      </TrackVisibility>
    </div>
  </section>
);

export default Education;
