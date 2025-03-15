import "./Welcome.css";
import me from "../assets/me.png";

function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome-txt">
        <h2>{`<HELLO WORLD/>`}</h2>
        <h3>
          <span className="var">var</span> <span className="name">name</span> ={" "}
          <span className="value">"Oto"</span>;
        </h3>
        <h3>
          <span className="var">let</span> <span className="name">age</span> ={" "}
          <span className="value">21</span>;
        </h3>
        <h3>
          <span className="var">const</span>{" "}
          <span className="name">isMadridista</span> ={" "}
          <span className="value">true</span>;
        </h3>
        <div className="about-me">
          <p>
A dedicated MERN stack developer with a knack for building dynamic web apps that work as smoothly as my morning routine (which is just water, no coffee). From React.js to Node.js, I’ve got the tools to make websites that stand out. When I’m not coding, I’m either stargazing, pondering the meaning of life, or crushing it in blitz chess. I thrive on problem-solving, constantly learning new tech, and staying ahead of the curve in an ever-evolving field. + I love animals
          </p>
        </div>
      </div>
      <div className="welcome-img">
        <img src={me} alt="logo of me" />
      </div>
    </div>
  );
}

export default Welcome;
