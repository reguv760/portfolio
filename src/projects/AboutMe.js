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
            <div className="col">Col 1</div>
            <div className="col">
            <p>Anim mollit ad ullamco amet in do quis ullamco in culpa dolore amet in aliquip dolor ut nisi tempor dolore nisi in et in sed incididunt dolor dolor veniam proident fugiat ea nisi labore ad irure laborum mollit fugiat deserunt cillum ullamco proident tempor in commodo id in esse non et qui adipisicing ut laboris officia aliqua exercitation amet non id officia non tempor aute veniam consequat sint excepteur eiusmod proident ut ad incididunt laborum non do pariatur quis sed deserunt consequat minim consectetur ut proident excepteur sed proident laboris aliquip sunt voluptate esse id sunt in ullamco enim voluptate sint occaecat in cillum cillum ut incididunt velit ad veniam ex quis velit sit culpa anim reprehenderit proident officia fugiat incididunt magna minim irure excepteur commodo quis quis non officia sunt aliqua ut amet qui exercitation aliqua labore incididunt fugiat laborum incididunt sunt in sed dolore id dolor ut culpa veniam in fugiat sit dolore reprehenderit est consectetur ut amet do occaecat aute aliqua id dolor ex sint sit reprehenderit ea sed ut voluptate eiusmod sunt ad cupidatat occaecat sint deserunt quis dolor irure deserunt non anim pariatur voluptate ullamco enim pariatur officia fugiat dolor adipisicing consequat officia duis esse nisi in et pariatur ut irure cillum adipisicing dolore dolore dolore sit sed duis fugiat fugiat deserunt non anim et deserunt enim aute elit consectetur ut sed velit.</p>
            </div>
          </div>
           

            
        </div>
      </div>
    )}
  />
)

export default Ravenwolf

// create graphql as a const
// to search for images + thumbnails
