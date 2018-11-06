import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

// import FauxRealFinal from './../img/web/frn-final.jpg'
// import FauxRealThumb from './../img/web/frn-galaxyTab4-mockup.jpg'

// button
import WebLink from './../components/WebLink'

const FauxRealNews = () => (
  <StaticQuery
    query={graphql`
			query {
        heroImage: file(relativePath: { eq: "web/frn-final.jpg" }) {
			   ...fluidImage
		    }
				mobileThumbnail: file(
					relativePath: { eq: "web/frn-galaxyTab4-mockup.jpg" }
				) {
					...fluidImage
				}
			}
		`}
    render={data => (
      <div className="portfolio">
        <h2>FauxRealNews</h2>
        <div className="portfolio__website">
          <ul className="portfolio__website-container">
            <li className="portfolio__website-container--fullWidth">
              {/* <Img fluid={props.data.imageOne.childImageSharp.fluid} alt="Hero"/>   */}

              <div className="portfolio__overlay">
                <div className="portfolio__overlay-container">
                  <p className="portfolio__overlay-text">
										Mockup website for a fictional News organization to counter
										"fake news". Built with Bootstrap.
                  </p>
                </div>
              </div>
              <Img
                fluid={data.heroImage.childImageSharp.fluid}
                alt="FauxRealNews"
              />
            </li>

            <li className="portfolio__website-container--subcontent">
              <Img
                fluid={data.mobileThumbnail.childImageSharp.fluid}
                alt="thumbnail"
              />
            </li>
            <li className="portfolio__website-container--link">
              <WebLink link="http://tessellationdesign.com/GWDA273/frn/" />
            </li>
          </ul>
        </div>
      </div>
    )}
  />
)

export default FauxRealNews

// create graphql as a const
// to search for images + thumbnails
