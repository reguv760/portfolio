import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import PortfolioOverlay from "./../components/PortfolioOverlay"

// button
//import WebLink from './../components/WebLink'

const FauxRealNews = () => (
  <StaticQuery
    query={graphql`
      query {
        heroImage: file(relativePath: { eq: "web/frn-final.jpg" }) {
          ...fluidImage
        }
        mobileThumbnail: file(
          relativePath: { eq: "web/frn-galaxyTab4-mockup.jpg" }
        ) {
          ...fluidImage
        }
      }
    `}
    render={data => (
      <div className="portfolio">
        <ul className="portfolio__headerTitle">
          <li>
            <h2>FauxRealNews</h2>
          </li>
          <li></li>
        </ul>
        <div className="portfolio__website">
          <ul className="portfolio__website-container">
            <li className="portfolio__website-container--fullWidth">
              {/* <Img fluid={props.data.imageOne.childImageSharp.fluid} alt="Hero"/>   */}

              <PortfolioOverlay>
                Mockup website for a fictional News organization to counter
                "fake news". Built with Bootstrap.
              </PortfolioOverlay>
              <Img
                fluid={data.heroImage.childImageSharp.fluid}
                alt="FauxRealNews"
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

export default FauxRealNews

// create graphql as a const
// to search for images + thumbnails
