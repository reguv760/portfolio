import React from "react"
import { StaticQuery, graphql } from "gatsby"
//import Img from "gatsby-image"

import PortfolioOverlay from "./../components/PortfolioOverlay"

import abeFullSite from "./../img/web/abrahamLim-fullSite.jpg"
import abeMobile from "./../img/web/abrahamLim_mobile-iphone8.png"
// button
import WebLink from "./../components/WebLink"

const AbrahamLim = () => (
  <StaticQuery
    query={graphql`
      query {
        heroImage: file(relativePath: { eq: "web/abrahamLim-fullSite.jpg" }) {
          ...fluidImage
        }

        mobileThumbnail: file(
          relativePath: { eq: "web/abrahamLim_mobile-iphone8.png" }
        ) {
          ...fluidImage
        }
      }
    `}
    render={data => (
      <div className="portfolio">
        <ul className="portfolio__headerTitle">
          <li>
            <h2>Law Offices of Abraham L. Lim</h2>
          </li>
          <li>
            <WebLink link="http://abrahamlimlaw.com" />
          </li>
        </ul>
        <div className="portfolio__website">
          <ul className="portfolio__website-container">
            <li className="portfolio__website-container--fullWidth">
              {/* <Img fluid={props.data.imageOne.childImageSharp.fluid} alt="Hero"/>   */}

              <PortfolioOverlay>
                Website for Los Angeles, CA based Attorney. Built with Bootstrap
                + ReactJS.
              </PortfolioOverlay>

              {/* <Img
                fluid={data.heroImage.childImageSharp.fluid}
                alt="Abraham Lim"
                className="dropShadow"
              /> */}
              <img src={abeFullSite} alt="Abraham Lim" className="dropShadow" />
            </li>

            <li className="portfolio__website-container--subcontent">
              {/* <Img
                fluid={data.mobileThumbnail.childImageSharp.fluid}
                alt="thumbnail"
              /> */}
              <img src={abeMobile} alt="thumbnail" />
            </li>
          </ul>
        </div>
      </div>
    )}
  />
)

export default AbrahamLim

// create graphql as a const
// to search for images + thumbnails
