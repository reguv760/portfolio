import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import PortfolioOverlay from "./../components/PortfolioOverlay"

// button
import WebLink from './../components/WebLink'

const Highground = () => (
  <StaticQuery
    query={graphql`
			query {
				heroImage: file(relativePath: { eq: "web/highgroundmovie.jpg" }) {
					...fluidImage
				}
			}
		`}
    render={data => (
      <div className="portfolio">
        <ul className="portfolio__headerTitle">
        	<li><h2>Highground</h2></li>
        	<li><WebLink link="http://highgroundmovie.com" /></li>
        </ul>
        <div className="portfolio__website">
          <ul className="portfolio__website-container">
            <li className="portfolio__website-container--fullWidth">
              {/* <Img fluid={props.data.imageOne.childImageSharp.fluid} alt="Hero"/>   */}

              <PortfolioOverlay>Website for award winning Independent documentary.</PortfolioOverlay>
              
              <Img
                fluid={data.heroImage.childImageSharp.fluid}
                alt="Highground"
                className="dropShadow"
              />
            </li>
          </ul>
        </div>
      </div>
    )}
  />
)

export default Highground

// create graphql as a const
// to search for images + thumbnails
