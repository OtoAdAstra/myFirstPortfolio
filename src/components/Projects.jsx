import "./Projects.css";
import bril from "../assets/bril.png";
import mariotto from "../assets/mariotto.png";
import musk from "../assets/musk.png";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h2>Projects:</h2>

      <div className="projectcard">
        <a href="https://mariotto.ge/" target="_blank">
          <div className="card">
            <img src={mariotto} />
            <div className="h3h5">
              <h3>Mariotto travel</h3>
              <h5>travel company</h5>
            </div>
          </div>
        </a>

        <a href="https://bril.consulting/" target="_blank">
          <div className="card">
            <img src={bril} />
            <div className="h3h5">
              <h3>Bril</h3>
              <h5>m&a company</h5>
            </div>
          </div>
        </a>

        <a href="https://www.x.com" target="_blank">
          <div className="card">
            <img src={musk} />
            <div className="h3h5">
              <h3>Twitter</h3>
              <h5>not X</h5>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Projects;
