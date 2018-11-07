import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Seta = () => (
  <StaticQuery
    query={graphql`
			query {
				heroImage: file(relativePath: { eq: "graphic/seta/seta-logo.jpg" }) {
					...fluidImage
				}
				signageThumbnail1: file(
					relativePath: { eq: "graphic/seta/seta-logo3.jpg" }
				) {
					...fluidImage
				}
				signageThumbnail2: file(
					relativePath: { eq: "graphic/seta/seta-logo1.jpg" }
				) {
					...fluidImage
				}
			}
		`}
    render={data => (
      <div className="portfolio">
        <ul className="portfolio__headerTitle">
          <li><h2>Seta: Restaurant</h2></li>
        </ul>
        <div className="portfolio__gallery">
          <ul className="portfolio__gallery-container">
            <li className="portfolio__gallery-container--hero">
              <div className="portfolio__overlay">
                <div className="portfolio__overlay-container">
                  <p className="portfolio__overlay-text">
										Final logo design for upscale restaurant in Whittier, CA
                  </p>
                </div>
              </div>
              <Img
                fluid={data.heroImage.childImageSharp.fluid}
                alt="Seta logo"
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
