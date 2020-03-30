import React from "react"
//import { useStaticQuery, graphql } from "gatsby"
//import Img from "gatsby-image"

import PortfolioOverlay from "./../components/PortfolioOverlay"

// button
import WebLink from "./../components/WebLink"

import hairFull from "./../img/web/dollySite_Desktop.jpg"
import hairIpad from "./../img/web/dollySite_iPad.jpg"

const HairExt = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     heroImage: file(relativePath: { eq: "web/dollySite_Desktop.jpg" }) {
  //       childImageSharp {
  //         fluid {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     mobileThumbnail: file(relativePath: { eq: "web/dollySite_iPad.jpg" }) {
  //       childImageSharp {
  //         fluid {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <div className="portfolio">
      <ul className="portfolio__headerTitle">
        <li>
          <h2>Hair Extensions by Dolly</h2>
        </li>
        <li className="link">
          <WebLink link="http://hairextensionsbydolly.com" />
        </li>
      </ul>
      <div className="portfolio__website">
        <ul className="portfolio__website-container">
          <li className="portfolio__website-container--fullWidth">
            {/* <Img fluid={props.data.imageOne.childImageSharp.fluid} alt="Hero"/>   */}

            <PortfolioOverlay>
              Website for Hair Stylist in Orange County, CA. Built with ReactJS
              + Material UI.
            </PortfolioOverlay>

            {/* <Img
              fluid={data.heroImage.childImageSharp.fluid}
              alt="Hair Extensions by Dolly"
              className="dropShadow"
            /> */}
            <img
              src={hairFull}
              alt="Hair Extensions by Dolly"
              className="dropShadow"
            />
          </li>

          <li className="portfolio__website-container--subcontent">
            {/* <Img
              fluid={data.mobileThumbnail.childImageSharp.fluid}
              alt="thumbnail"
            /> */}
            <img src={hairIpad} alt="thumbnail" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HairExt
