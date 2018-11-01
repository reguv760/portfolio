import React from 'react'
//import Img from 'gatsby-image'
//import { graphql } from 'gatsby'
//import { Link } from 'gatsby'
import HighgroundMovie from './../img/web/highgroundmovie.jpg'

//button
import WebLink from './../components/WebLink'

const Highground = () => (
	<div className="portfolio">
		<h2>Destination: Oahu</h2>
		<div className="portfolio__website">
			<ul className="portfolio__website-container">
				<li className="portfolio__website-container--fullWidth">
					{/* <Img fluid={props.data.imageOne.childImageSharp.fluid} alt="Hero"/>   */}

					<div className="portfolio__overlay">
						<div className="portfolio__overlay-container">
							<p>
								Website for award winning Independent
								documentary.
							</p>
						</div>
					</div>
					<img
						src={HighgroundMovie}
						width="1200"
						height="625"
						alt="Hero"
					/>
				</li>
				<li className="portfolio__website-container--link">
					<WebLink link="http://highgroundmovie.com" />
				</li>
			</ul>
		</div>
	</div>
)

export default Highground

//create graphql as a const
//to search for images + thumbnails
