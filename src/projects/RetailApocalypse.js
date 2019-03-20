import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import PortfolioOverlay from "./../components/PortfolioOverlay"

// button
import WebLink from './../components/WebLink'

const RetailApocalypse = () => (
  <StaticQuery
    query={graphql`
			query {
				heroImage: file(relativePath: { eq: "web/rapocalypse-final.jpg" }) {
					...fluidImage
				}
				mobileThumbnail: file(
					relativePath: { eq: "web/rapocalypse-iPadPro.jpg" }
				) {
					...fluidImage
				}
			}
		`}
    render={data => (
      <div className="portfolio">
        <ul className="portfolio__headerTitle">
        	<li><h2>Retail Apocalypse</h2></li>
        	<li><WebLink link="https://reguv760.github.io/team-03/" /></li>
        </ul>
        <div className="portfolio__website">
          <ul className="portfolio__website-container">
            <li className="portfolio__website-container--fullWidth">
              {/* <Img fluid={props.data.imageOne.childImageSharp.fluid} alt="Hero"/>   */}

              <PortfolioOverlay>Showcase and listings of past and present retail store closures.</PortfolioOverlay>
              <Img
                fluid={data.heroImage.childImageSharp.fluid}
                alt="Retail Apocalypse"
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

export default RetailApocalypse

// create graphql as a const
// to search for images + thumbnails
