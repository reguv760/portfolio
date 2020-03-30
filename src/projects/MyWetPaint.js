import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import PortfolioOverlay from "./../components/PortfolioOverlay"

// button
import WebLink from "./../components/WebLink"

const MyWetPaint = () => (
  <StaticQuery
    query={graphql`
      query {
        heroImage: file(relativePath: { eq: "web/mywetpaint.jpg" }) {
          ...fluidImage
        }
        mobileThumbnail: file(
          relativePath: { eq: "web/mywetpaint-iPhone6.jpg" }
        ) {
          ...fluidImage
        }
      }
    `}
    render={data => (
      <div className="portfolio">
        <ul className="portfolio__headerTitle">
          <li>
            <h2>My Wet Paint Studio</h2>
          </li>
          <li>
            <WebLink link="http://mywetpaintstudio.com" />
          </li>
        </ul>
        <div className="portfolio__website">
          <ul className="portfolio__website-container">
            <li className="portfolio__website-container--fullWidth">
              <PortfolioOverlay>
                Portfolio for Los Angeles based fine artist using Gatsby JS.
              </PortfolioOverlay>

              {/* <img src={mwpHero} width="1280" height="800" alt="Hero" /> */}

              <Img
                fluid={data.heroImage.childImageSharp.fluid}
                alt="My Wet Paint Studio homepage"
                className="dropShadow"
              />
            </li>

            <li className="portfolio__website-container--subcontent">
              <Img
                fluid={data.mobileThumbnail.childImageSharp.fluid}
                alt="thumbnail"
              />
            </li>
          </ul>
        </div>
      </div>
    )}
  />
)

export default MyWetPaint

// create graphql as a const
// to search for images + thumbnails
