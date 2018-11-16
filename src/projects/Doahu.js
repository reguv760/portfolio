import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

// images
// import doahuFinal from './../img/web/doahu-final.jpg'
// import doahuMobile from './../img/web/doahu-galaxyS7_mockup.jpg'

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
              <div className="portfolio__overlay">
                <div className="portfolio__overlay-container">
                  <p className="portfolio__overlay-text">
										Travel website promoting both the modern and the natural
										scenery of Oahu, Hawaii.
                  </p>
                </div>
              </div>

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
