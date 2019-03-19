import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

// import ravenWolfLogo from './../img/graphic/ravenwolf/ravenwolf-logo.jpg'
// import ravenWolfProduct from './../img/graphic/ravenwolf/ravenwolf-bag.jpg'

const Ravenwolf = () => (
  <StaticQuery
    query={graphql`
			query {
				heroImage: file(
					relativePath: { eq: "graphic/ravenwolf/ravenwolf-logo.jpg" }
				) {
					...fluidImage
				}
			}
		`}
    render={data => (
      <div className="portfolio">

        <ul className="portfolio__headerTitle">
          <li className="aboutMe"><h2>About Me</h2></li>
        </ul>

        <div className="portfolio__aboutMe">
          <div className="row">
           { /* <div className="col1">Col 1</div>
            <div className="col2">Col 2</div> */ }
          </div>
          
        </div>
      </div>
    )}
  />
)

export default Ravenwolf

// create graphql as a const
// to search for images + thumbnails
