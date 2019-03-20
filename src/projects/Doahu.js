import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

// images
import PortfolioOverlay from "./../components/PortfolioOverlay"

// button
import WebLink from './../components/WebLink'

const Doahu = () => (
  <StaticQuery
    query={graphql`
			query {
				heroImage: file(relativePath: { eq: "web/doahu-final.jpg" }) {
					...fluidImage
          
				}
				mobileThumbnail: file(
					relativePath: { eq: "web/doahu-galaxyS7_mockup.jpg" }
				) {
					...fluidImage
				}
			}
		`}
    render={data => (
      <div className="portfolio">
        <ul className="portfolio__headerTitle">
          <li><h2>Destination: Oahu</h2></li>
          <li><WebLink link="http://tessellationdesign.com/IMD211/doahu/" /></li>
        </ul>
        <div className="portfolio__website">
          <ul className="portfolio__website-container">
            <li className="portfolio__website-container--fullWidth">
              <PortfolioOverlay>
										Travel website promoting both the modern and the natural
										scenery of Oahu, Hawaii.
              </PortfolioOverlay>

              <Img
                fluid={data.heroImage.childImageSharp.fluid}
                alt="Destination: Oahu"
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

export default Doahu

// create graphql as a const
// to search for images + thumbnails
