import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import PortfolioOverlay from "./../components/PortfolioOverlay"

// import ravenWolfLogo from './../img/graphic/ravenwolf/ravenwolf-logo.jpg'
// import ravenWolfProduct from './../img/graphic/ravenwolf/ravenwolf-bag.jpg'

const Ravenwolf = () => (
  <StaticQuery
    query={graphql`
			query {
				heroImage: file(
					relativePath: { eq: "graphic/ravenwolf/ravenwolfLogo.jpg" }
				) {
					...fluidImage
				}
				mobileThumbnail: file(
					relativePath: { eq: "graphic/ravenwolf/ravenwolfBag.jpg" }
				) {
					...fluidImage
				}
			}
		`}
    render={data => (
      <div className="portfolio">

        <ul className="portfolio__headerTitle">
          <li className="graphic"><h2>Ravenwolf: Adventure Gear</h2></li>
        </ul>

        <div className="portfolio__gallery">
          <ul className="portfolio__gallery-container">
            <li className="portfolio__gallery-container--hero">

              <PortfolioOverlay>Logo Design for Adventure Gear startup</PortfolioOverlay>

              <Img
                fluid={data.heroImage.childImageSharp.fluid}
                alt="RavenWolf Logo"
                className="dropShadow"
              />
            </li>
            <li className="portfolio__gallery-container--subcontent">
              <Img
                fluid={data.mobileThumbnail.childImageSharp.fluid}
                alt="Ravenwolf Patch"
              />
            </li>
          </ul>
        </div>
      </div>
    )}
  />
)

export default Ravenwolf

// create graphql as a const
// to search for images + thumbnails
