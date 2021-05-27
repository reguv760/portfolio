import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import PortfolioOverlay from "./../components/PortfolioOverlay";

const Seta = () => (
  <StaticQuery
    query={graphql`
			query {
				heroImage: file(relativePath: { eq: "graphic/seta/setaLogo.jpg" }) {
					...fluidImage
				}
				signageThumbnail1: file(
					relativePath: { eq: "graphic/seta/setaLogo3.jpg" }
				) {
					...fluidImage
				}
				signageThumbnail2: file(
					relativePath: { eq: "graphic/seta/setaLogo1.jpg" }
				) {
					...fluidImage
				}
			}
		`}
    render={data => (
      <div className="portfolio">
        <ul className="portfolio__headerTitle">
          <li className="graphic"><h2>Seta: Restaurant</h2></li>
        </ul>
        <div className="portfolio__gallery">
          <ul className="portfolio__gallery-container">
            <li className="portfolio__gallery-container--hero">


              <PortfolioOverlay>Final logo design for upscale restaurant in Whittier, CA</PortfolioOverlay>
             
              <Img
                fluid={data.heroImage.childImageSharp.fluid}
                alt="Seta logo"
                className="dropShadow"
              />
            </li>
            <li className="portfolio__gallery-container--subcontent">
              <Img
                fluid={data.signageThumbnail1.childImageSharp.fluid}
                alt="Seta signage"
              />
            </li>

            <li className="portfolio__gallery-container--subcontent">
              <Img
                fluid={data.signageThumbnail2.childImageSharp.fluid}
                alt="Seta signage outside"
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
