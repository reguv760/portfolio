import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import PortfolioOverlay from "./../components/PortfolioOverlay"

// button
import WebLink from "./../components/WebLink"

const StoreyTime = () => (
  <StaticQuery
    query={graphql`
      query {
        heroImage: file(relativePath: { eq: "web/storeyTime-fullSite.jpg" }) {
          ...fluidImage
        }

        mobileThumbnail: file(
          relativePath: { eq: "web/storeyTime-iPhone6.jpg" }
        ) {
          ...fluidImage
        }
      }
    `}
    render={data => (
      <div className="portfolio">
        <ul className="portfolio__headerTitle">
          <li>
            <h2>Storeytime</h2>
          </li>
          <li>
            <WebLink link="http://storeytime-live.netlify.com" />
          </li>
        </ul>
        <div className="portfolio__website">
          <ul className="portfolio__website-container">
            <li className="portfolio__website-container--fullWidth">
              {/* <Img fluid={props.data.imageOne.childImageSharp.fluid} alt="Hero"/>   */}

              <PortfolioOverlay>
                Website conversion from Wordpress to Gatsby JS + Netlify CMS.
              </PortfolioOverlay>

              <Img
                fluid={data.heroImage.childImageSharp.fluid}
                alt="Storeytime"
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

export default StoreyTime

// create graphql as a const
// to search for images + thumbnails
