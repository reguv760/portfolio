import React from "react"
import AboutMeIcons from "../components/AboutMeIcons"

const AboutMe = () => (
  <div className="portfolio">
    <ul className="portfolio__headerTitle">
      <li className="aboutMe">
        <h2>About Me</h2>
      </li>
    </ul>

    <div className="portfolio__aboutMe">
      <div className="row">
        <div className="col img">
          <AboutMeIcons />
        </div>
        <div className="col">
          <h4>
            Depending on your point of view, I'm a designer who can code or
            I'm a coder with an eye for design...
          </h4>
          <p>
            My specialty is designing and building websites using Adobe CC,
            React JS and Gatsby JS.
          </p>

          <p>
            When I'm not designing or coding, I listen to music with heavy
            distortion at a pace of 160bpm or more, shredding on the guitar,
            reading DC Comics and build my own Lego sets.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default AboutMe
