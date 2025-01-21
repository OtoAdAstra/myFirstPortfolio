import "./Projects.css";
import bril from "../assets/bril.png";
import mariotto from "../assets/mariotto.png";
import astroshop from "../assets/astroshop.png";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h2>Projects:</h2>

      <div className="projectcard">
        <a
          href="https://astroshop-nine.vercel.app/"
          target="_blank"
          rel="noreferrer">
          <div className="card">
            <img src={astroshop} alt="astroshop" />
            <div className="h3h5">
              <h3>Astroshop</h3>
              <h5>E-commerce website</h5>
            </div>
          </div>
        </a>

        <a href="https://mariotto.ge/" target="_blank" rel="noreferrer">
          <div className="card">
            <img src={mariotto} alt="travel company" />
            <div className="h3h5">
              <h3>Mariotto travel</h3>
              <h5>Travel company</h5>
            </div>
          </div>
        </a>

        <a href="https://bril.consulting/" target="_blank" rel="noreferrer">
          <div className="card">
            <img src={bril} alt="m&a company" />
            <div className="h3h5">
              <h3>Bril</h3>
              <h5>M&A company</h5>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Projects;
