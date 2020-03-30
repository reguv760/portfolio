import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import PortfolioOverlay from "./../components/PortfolioOverlay"

// button
import WebLink from './../components/WebLink'

const EvanBeigel = () => (
  <StaticQuery
    query={graphql`
			query {
				heroImage: file(relativePath: { eq: "web/EJB-flashSite.jpg" }) {
					...fluidImage
				}
			}
		`}
    render={data => (
      <div className="portfolio">
        <ul className="portfolio__headerTitle">
        	<li><h2>Evan J. Beigel</h2></li>
        	<li className="link"><WebLink link="http://evanjbeigel.com" /></li>
        </ul>
        <div className="portfolio__website">
          <ul className="portfolio__website-container">
            <li className="portfolio__website-container--fullWidth">
              {/* <Img fluid={props.data.imageOne.childImageSharp.fluid} alt="Hero"/>   */}

              <PortfolioOverlay>Website for Los Angeles record producer.</PortfolioOverlay>
              
              <Img
                fluid={data.heroImage.childImageSharp.fluid}
                alt="Evan J. Beigel"
                className="dropShadow"
              />
            </li>
          </ul>
        </div>
      </div>
    )}
  />
)

export default EvanBeigel

// create graphql as a const
// to search for images + thumbnails
