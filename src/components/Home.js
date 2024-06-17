import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDribbble, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import me from "../assets/images/me.png";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="content">
          <div className="content-description">
            <section className="main-desc">
              <h3>Bijina Regmi</h3>
              <span>---- UI/UX Engineer ----</span>

              <p>I'm Bijina , UI/UX Designer based in Nepal.</p>
            </section>
            <div className="main-buttonsection">
              <button
                type="button"
                className="btn btn-primary buttonsection-design"
              >
                <FontAwesomeIcon icon={faPaperPlane} />
                Say Hello
              </button>
            </div>
            <div className="worksbutton-section">
              Follow me:
              <div className="socialicons">
                <ul>
                  <li>
                    <Link to="https://dribbble.com/bijinaregmi">
                      <FontAwesomeIcon icon={faDribbble} aria-hidden="true" />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.linkedin.com/in/bijina-regmi">
                      <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="content-image">
            <img src={me} alt="Bijina" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
