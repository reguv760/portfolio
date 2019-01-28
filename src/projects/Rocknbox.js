import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

// import RocknboxSite from './../img/web/rocknbox-fullSite.jpg'

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

              <div className="portfolio__overlay">
                <div className="portfolio__overlay-container">
                  <p className="portfolio__overlay-text">
                    Mock-up subscription service that caters to music collectors and fans of Rock'n'Roll.
                  </p>
                </div>
              </div>
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
