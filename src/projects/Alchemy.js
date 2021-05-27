import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import PortfolioOverlay from "./../components/PortfolioOverlay"

const Seta = () => (
  <StaticQuery
    query={graphql`
      query {
        heroImage: file(relativePath: { eq: "graphic/alchemy/ak-logo.jpg" }) {
          ...fluidImage
        }
        alchemyInstagram: file(
          relativePath: { eq: "graphic/alchemy/alchemyInstagram.png" }
        ) {
          ...fluidImage
        }
      }
    `}
    render={data => (
      <div className="portfolio">
        <ul className="portfolio__headerTitle">
          <li className="graphic">
            <h2>Alchemy Kitchen: Catering</h2>
          </li>
        </ul>
        <div className="portfolio__gallery">
          <ul className="portfolio__gallery-container">
            <li className="portfolio__gallery-container--hero">
              <PortfolioOverlay>
                Final logo design for Catering service
              </PortfolioOverlay>

              <Img
                fluid={data.heroImage.childImageSharp.fluid}
                alt="Alchemy Kitchen logo"
                className="dropShadow"
              />
            </li>
            <li className="portfolio__gallery-container--subcontent">
              <Img
                fluid={data.alchemyInstagram.childImageSharp.fluid}
                alt="Application on Instagram Promotion"
              />
            </li>
          </ul>
        </div>
      </div>
    )}
  />
)

export default Seta

// create graphql as a const
// to search for images + thumbnails
