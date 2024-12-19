import "./Navbar.css";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Darktheme from "../logic/Darktheme";

function Navbar() {
  return (
    <div className="nav-div">
      <div className="nav-left">
        <a
          href="https://github.com/OtoAdAstra"
          target="_blank"
          rel="noreferrer">
          <VscGithubInverted />
        </a>
        <a
          href="https://www.linkedin.com/in/otosharvashidze/"
          target="_blank"
          rel="noreferrer">
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/otoadastra/"
          target="_blank"
          rel="noreferrer">
          <FaInstagram />
        </a>
        <a
          href="https://www.x.com/OSharvashidze"
          target="_blank"
          rel="noreferrer">
          <FaXTwitter />
        </a>
      </div>
      <Darktheme />
      <div className="nav-right">
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            const target = document.getElementById("projects");
            target && target.scrollIntoView({ behavior: "smooth" });
          }}>
          projects
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            const target = document.getElementById("contact");
            target && target.scrollIntoView({ behavior: "smooth" });
          }}>
          contact me
        </a>
      </div>
    </div>
  );
}

export default Navbar;
