import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import PortfolioOverlay from "./../components/PortfolioOverlay"

// button
import WebLink from './../components/WebLink'

const Rocknbox = () => (
  <StaticQuery
    query={graphql`
      query {
        heroImage: file(relativePath: { eq: "web/rocknbox-fullSite.jpg" }) {
          ...fluidImage
        }
      }
    `}
    render={data => (
      <div className="portfolio">
        <ul className="portfolio__headerTitle">
          <li><h2>rock'n'box</h2></li>
          <li><WebLink link="http://rocknbox-rg.netlify.com" /></li>
        </ul>
        <div className="portfolio__website">
          <ul className="portfolio__website-container">
            <li className="portfolio__website-container--fullWidth">
              {/* <Img fluid={props.data.imageOne.childImageSharp.fluid} alt="Hero"/>   */}

              <PortfolioOverlay>Mock-up subscription service that caters to music collectors and fans of Rock'n'Roll.</PortfolioOverlay>
              
              <Img
                fluid={data.heroImage.childImageSharp.fluid}
                alt="Rocknbox"
                className="dropShadow"
              />
            </li>
          </ul>
        </div>
      </div>
    )}
  />
)

export default Rocknbox

// create graphql as a const
// to search for images + thumbnails
