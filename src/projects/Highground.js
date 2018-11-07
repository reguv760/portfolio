import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

// import HighgroundMovie from './../img/web/highgroundmovie.jpg'

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

              <div className="portfolio__overlay">
                <div className="portfolio__overlay-container">
                  <p className="portfolio__overlay-text">
										Website for award winning Independent documentary.
                  </p>
                </div>
              </div>
              <Img
                fluid={data.heroImage.childImageSharp.fluid}
                alt="Highground"
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
