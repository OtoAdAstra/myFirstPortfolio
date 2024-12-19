import me from "../assets/me.png";
import "./Responsivenav.css";
import { HiOutlineBars4 } from "react-icons/hi2";
import { FiExternalLink } from "react-icons/fi";
import { IoIosCloseCircle } from "react-icons/io";
import { useState } from "react";
import Darktheme from "../logic/Darktheme";

function Responsivenav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav">
      <div className="nav-left">
        <img src={me} alt="me" />
      </div>
      <div className="nav-right">
        <button onClick={toggleMenu}>
          <HiOutlineBars4 />
        </button>
      </div>
      {isOpen && (
        <>
          <div className="navBurger">
            <a
              href="https://github.com/OtoAdAstra"
              target="_blank"
              rel="noreferrer">
              GitHub <FiExternalLink className="link" />
            </a>
            <a
              href="https://www.linkedin.com/in/otosharvashidze/"
              target="_blank"
              rel="noreferrer">
              LinkedIn <FiExternalLink className="link" />
            </a>
            <a
              href="https://www.instagram.com/otoadastra/"
              target="_blank"
              rel="noreferrer">
              Instagram <FiExternalLink className="link" />
            </a>
            <a
              href="https://x.com/OSharvashidze"
              target="_blank"
              rel="noreferrer">
              Twitter <FiExternalLink className="link" />
            </a>
            <Darktheme />
            <button onClick={() => setIsOpen(false)}>
              <IoIosCloseCircle />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Responsivenav;
