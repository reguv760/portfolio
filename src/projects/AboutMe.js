import React from "react"
import AboutMeIcons from "../components/AboutMeIcons"

import { StaticQuery, graphql } from "gatsby"
//import Img from 'gatsby-image'

// import ravenWolfLogo from './../img/graphic/ravenwolf/ravenwolf-logo.jpg'
// import ravenWolfProduct from './../img/graphic/ravenwolf/ravenwolf-bag.jpg'

const AboutMe = () => (
  <StaticQuery
    query={graphql`
      query {
        heroImage: file(
          relativePath: { eq: "graphic/ravenwolf/ravenwolf-logo.jpg" }
        ) {
          ...fluidImage
        }
      }
    `}
    render={data => (
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
                distortion at a pace of 160bpm or more, shredding on the guitar
                and reading DC Comics. In my spare time, I build my own Lego
                sets.
              </p>
            </div>
          </div>
        </div>
      </div>
    )}
  />
)

export default AboutMe

// create graphql as a const
// to search for images + thumbnails
