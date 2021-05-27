import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import PortfolioOverlay from "./../components/PortfolioOverlay"

// button
import WebLink from "./../components/WebLink"

const HairExt = () => (
  <StaticQuery
    query={graphql`
      query {
        heroImage: file(relativePath: { eq: "web/dollySite-desktop.jpg" }) {
          ...fluidImage
        }
        mobileThumbnail: file(relativePath: { eq: "web/dollySite-iPad.jpg" }) {
          ...fluidImage
        }
      }
    `}
    render={data => (
      <div className="portfolio">
        <ul className="portfolio__headerTitle">
          <li><h2>Hair Extensions by Dolly</h2></li>
          <li><WebLink link="https://dolly-rg.netlify.app/" /></li>
        </ul>
        <div className="portfolio__website">
          <ul className="portfolio__website-container">
            <li className="portfolio__website-container--fullWidth">
              {/* <Img fluid={props.data.imageOne.childImageSharp.fluid} alt="Hero"/>   */}

              <PortfolioOverlay>
                Website for Hair Stylist in Orange County, CA. Built with ReactJS + Material UI.
              </PortfolioOverlay>

              <Img
                fluid={data.heroImage.childImageSharp.fluid}
                alt="Hair Extensions by Dolly"
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

export default HairExt

// create graphql as a const
// to search for images + thumbnails
